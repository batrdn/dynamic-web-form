import * as React from "react";
import { render } from "react-dom";
import { Form, Row, Col } from "antd";
import { unmountComponentAtNode } from "react-dom";
import FormField from "./FormField";

import "antd/dist/antd.css";

export default class DynamicForm extends HTMLElement {
  static observedAttributes = ["config"];

  connectedCallback() {
    this._innerHTML = this.innerHTML;
    this.mount();
  }

  attributeChangedCallback() {
    this.unmount();
    this.mount();
  }

  mount() {
    const configAttr = this.attributes["config"];

    if (configAttr) {
      const config = JSON.parse(configAttr.value);

      render(
        <Form
          id={config.id}
          name={config.name}
          layout={config.layout}
          initialValues={{ radio: 2 }}
          onFinish={(values) => console.log("finished", values)}
          onFinishFailed={console.log("failed")}
        >
          <Row gutter={24}>{this.getFormFields(config)}</Row>
        </Form>,
        this
      );
    }
  }

  getFormFields(config) {
    const fields = config.fields;

    const result = [];

    for (let index = 0; index < fields.length; index++) {
      result.push(
        <Col
          span={fields[index].colspan ? fields[index].colspan : 24}
          key={index}
        >
          <FormField {...fields[index]} />
        </Col>
      );
    }

    return result;
  }

  disconnectedCallback() {
    this.unmount();
    this.observer.disconnect();
  }

  unmount() {
    unmountComponentAtNode(this);
  }

  getProps(attributes) {
    return [...attributes]
      .filter((attr) => attr.name !== "style")
      .map((attr) => this.convert(attr.name, attr.value))
      .reduce((props, prop) => ({ ...props, [prop.name]: prop.value }), {});
  }

  getEvents() {
    return Object.values(this.attributes)
      .filter((key) => /on([a-z].*)/.exec(key.name))
      .reduce(
        (events, ev) => ({
          ...events,
          [ev.name]: (args) =>
            this.dispatchEvent(new CustomEvent(ev.name, { ...args }))
        }),
        {}
      );
  }

  convert(attrName, attrValue) {
    let value = attrValue;
    if (attrValue === "true" || attrValue === "false")
      value = attrValue === "true";
    else if (!isNaN(attrValue) && attrValue !== "") value = +attrValue;
    else if (/^{.*}/.exec(attrValue)) value = JSON.parse(attrValue);
    return {
      name: attrName,
      value: value
    };
  }
}

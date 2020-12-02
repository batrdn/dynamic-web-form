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
}

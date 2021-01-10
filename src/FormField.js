import * as React from "react";
import {
  Input,
  Form,
  Checkbox,
  InputNumber,
  Select,
  Radio,
  DatePicker,
  Switch,
  Button
} from "antd";

const { Option } = Select;

const formFieldRegistry = {
  input: Input,
  password: Input.Password,
  checkbox: Checkbox,
  number: InputNumber,
  dropdown: Select,
  radio: Radio.Group,
  date: DatePicker,
  toggle: Switch,
  submit: Button
};

function FormField(props) {
  const Component = formFieldRegistry[props.type];

  const { id, name, label } = props;
  const validations = props.validations;

  return (
    <Form.Item id={id} name={name} label={label} rules={[...validations]}>
      {getComponent(props, Component)}
    </Form.Item>
  );
}

function getComponent(props, Component) {
  switch (props.type) {
    case "checkbox":
      return <Component>{props.value}</Component>;
    case "dropdown":
      return (
        <Component placeholder={props.placeholder}>
          {props.datasource.map((data) => (
            <Option key={data.key}>{data.value}</Option>
          ))}
        </Component>
      );
    case "radio":
      return (
        <Component>
          {props.datasource.map((data) => (
            <Radio value={data.key}>{data.value}</Radio>
          ))}
        </Component>
      );
    case "submit":
      return <Component htmlType="submit">{props.value}</Component>;
    default:
      return <Component placeholder={props.placeholder} />;
  }
}

export default FormField;

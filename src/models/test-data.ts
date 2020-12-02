import { FieldType, Form, FormLayout, LayoutType } from "./form";

const FORM: Form = {
  id: "form-id",
  name: "Test Form",
  description: "Description goes here...",
  layout: {
    type: LayoutType.VERTICAL,
    columns: 3
  },
  fields: [
    {
      id: "firstName",
      type: FieldType.INPUT,
      index: 0,
      validations: [
        {
          required: true,
          message: "Нэрээ заавал оруулна уу!"
        },
        {
          pattern: new RegExp("^[a-zA-Z]+$"),
          message: "Тусгай тэмдэгт болон тоо нэрэнд байх боломжгүй"
        }
      ],
      label: "Нэр"
    },
    {
      id: "lastName",
      type: FieldType.INPUT,
      index: 1,
      validations: [
        {
          required: true,
          message: "Овгоо заавал оруулна уу!"
        },
        {
          pattern: new RegExp("^[a-zA-Z]+$"),
          message: "Тусгай тэмдэгт болон тоо овгын утганд байх боломжгүй"
        }
      ],
      label: "Овог"
    },
    {
      id: "age",
      type: FieldType.NUMBER,
      index: 2,
      validations: [
        {
          required: true,
          message: "Насаа заавал оруулна уу!",
          min: 16,
          max: 70
        }
      ],
      label: "Нас"
    },
    {
      id: "address",
      type: FieldType.INPUT,
      index: 3,
      validations: [
        {
          required: false
        }
      ],
      label: "Хаяг",
      colspan: 2
    },
    {
      id: "passowrd",
      type: FieldType.PASSWORD,
      index: 4,
      validations: [
        {
          required: false
        }
      ],
      label: "Нууц үг"
    }
  ]
};

export default FORM;

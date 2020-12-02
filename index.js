import "./src/components";

const config = {
  id: "form-id",
  name: "Test Form",
  description: "Description goes here...",
  layout: "vertical",
  fields: [
    {
      id: "firstName",
      name: "firstName",
      type: "input",
      placeholder: "yaay",
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
      colspan: 10,
      label: "Нэр"
    },
    {
      id: "lastName",
      name: "lastName",
      type: "input",
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
      colspan: 10,
      label: "Овог"
    },
    {
      id: "age",
      type: "number",
      index: 2,
      validations: [
        {
          required: true,
          message: "Насаа заавал оруулна уу!",
          min: 16,
          max: 70
        }
      ],
      label: "Нас",
      colspan: 4
    },
    {
      id: "address",
      type: "input",
      index: 3,
      validations: [
        {
          required: false
        }
      ],
      label: "Хаяг"
    },
    {
      id: "password",
      type: "password",
      index: 4,
      validations: [
        {
          required: false
        }
      ],
      label: "Нууц үг"
    },
    {
      id: "martialStatus",
      type: "checkbox",
      index: 5,
      validations: [
        {
          required: true
        }
      ],
      label: "Гэрлэсэн эсэх",
      value: "Гэрлэсэн",
      colspan: 4
    },
    {
      id: "select",
      name: "dropdown",
      type: "dropdown",
      placeholder: "Зүгээр сонго pls",
      index: 6,
      validations: [
        {
          required: true
        }
      ],
      colspan: 20,
      label: "Dropdown",
      datasource: [
        {
          key: "1",
          value: "1"
        },
        {
          key: "2",
          value: "2"
        }
      ]
    },
    {
      id: "radio",
      name: "radio",
      type: "radio",
      index: 7,
      validations: [
        {
          required: true
        }
      ],
      label: "Radio Group",
      datasource: [
        {
          key: 1,
          value: "1"
        },
        {
          key: 2,
          value: "2"
        }
      ]
    },
    {
      id: "date",
      type: "date",
      index: 8,
      validations: [
        {
          required: true
        }
      ],
      label: "Огноо"
    },
    {
      id: "switch",
      type: "toggle",
      index: 9,
      validations: [],
      label: "Toggle me"
    },
    {
      id: "Submit",
      type: "submit",
      index: 9,
      validations: [],
      value: "Илгээх"
    }
  ]
};

const dynamicForm = document.getElementById("dynamic-form");
dynamicForm.setAttribute("config", JSON.stringify(config));

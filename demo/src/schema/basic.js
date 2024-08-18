import { save } from "../source/external-handlers";

export default {
  onSubmit: save.bind(this),
  initialValues: {},
  schema: {
    id: "basic",
    label: "Basic",
    type: "container",
    renderer: "form",
    configSource: (formik, config) => {
      return new Promise((resolve, reject) => {
        fetch("http://google.com") // Call the fetch function passing the url of the API as a parameter
          .then(function (data) {
            // Your code for handling the data you get from the API
            console.log(data);
            resolve();
          })
          .catch(function () {
            // This is where you run code if the server returns any errors
          });
      });
    },
    elements: {
      multiCheckbox: {
        name: "multiCheckbox",
        label: "Multiple options",
        type: "field",
        renderer: "checkbox",
        options: [
          {
            value: "checkbox-1",
            label: "Checkbox 1",
          },
          {
            value: "checkbox-2",
            label: "Checkbox 2",
          },
          {
            value: "checkbox-3",
            label: "Checkbox 3",
          },
          {
            value: "checkbox-4",
            label: "Checkbox 4",
          },
        ],
      },
      telephone: {
        name: "telephone",
        label: "Telephone (enabled if email is empty)",
        type: "field",
        renderer: "text",
        fieldType: "telephone",
        validation: [["string"], ["required"], ["min", 3]],

        showWhen: ["or", ['is', 'multiCheckbox[0][0]', 'on'], ['is', 'multiCheckbox[3][0]', 'on']],
        // validation: [['string'], ['when', 'multiCheckbox[0][0]', {
        //     is: function(value) {
        //       return value === 'on' || value == 'on';
        //     },
        //     then: [['string'], ['required']]
        //   }]],
      },
      name: {
        name: "name",
        label: "Name",
        type: "field",
        renderer: "text",
        fieldType: "text",
        validation: [["string"], ["required"], ["min", 3]],
      },
      email: {
        name: "email",
        label: "Email",
        type: "field",
        renderer: "text",
        fieldType: "text",
        validation: [["string"], ["required"], ["email"]],
      },
   
      
      message: {
        name: "message",
        label: "Message (visible if name is not empty)",
        type: "field",
        renderer: "textarea",
        validation: [["string"], ["required"]],
        showWhen: [
          "not",
          ["or", ["is", "name", ""], ["isOfType", "name", "undefined"]],
        ],
      },
      save: {
        type: "field",
        renderer: "button",
        content: "Save",
        fieldClass: "btn-success float-right",
        buttonType: "submit",
      },
    },
  },
};

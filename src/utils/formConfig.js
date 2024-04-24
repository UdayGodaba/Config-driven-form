export const forms = {
  "Contact Form": [
    {
      type: "textField",
      label: "Name",
      options: { placeHolder: "Full Name" },
      validations: { required: true, minLength: 3, maxLength: 50 },
    },
    {
      type: "textField",
      label: "Email",
      options: { placeHolder: "Email Address" },
      validations: {
        required: true,
        minLength: 3,
        maxLength: 50,
        pattern:
          /^(?!.*?[^\x21-\x7E\s])[\w\x21-\x7E]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      },
    },
    {
      type: "textField",
      label: "Phone",
      options: { placeHolder: "Contact Number" },
      validations: {
        required: true,
        minLength: 6,
        maxLength: 14,
        pattern: /^\+(?:[0-9] ?){6,14}[0-9]$/,
      },
    },
    {
      type: "checkBox",
      label: "Worked On",
      values: ["Frontend", "Backend", "Devops", "AI/ML", "None"],
      validations: { required: true },
    },
    {
      type: "select",
      label: "City",
      values: ["Hyderabad", "Bengaluru", "Mumbai", "Other"],
      validations: { required: true },
    },
    { type: "switch", label: "Get Notified", validations: { required: true } },
  ],

  "Feedback Form": [
    {
      type: "textField",
      label: "Name",
      options: { placeHolder: "Full Name" },
      validations: { required: true, minLength: 3, maxLength: 50 },
    },
    {
      type: "textField",
      label: "Email",
      options: { placeHolder: "Email Address" },
      validations: {
        required: true,
        minLength: 3,
        maxLength: 50,
        pattern:
          /^(?!.*?[^\x21-\x7E\s])[\w\x21-\x7E]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      },
    },
    {
      type: "textField",
      label: "Comment",
      options: { minRows: 5, placeHolder: "Please Provide Feedback" },
      validations: { required: true, minLength: 10 },
    },
    {
      type: "starRating",
      label: "Rate Us",
      options: { maxRating: 5, precision: 0.5 },
      validation: { required: true },
    },
  ],

  "Student Form": [
    {
      type: "textField",
      label: "Name",
      options: { placeHolder: "Full Name" },
      validations: { required: true, minLength: 3, maxLength: 50 },
    },
    {
      type: "textField",
      label: "Email",
      options: { placeHolder: "Email Address" },
      validations: {
        required: true,
        minLength: 3,
        maxLength: 50,
        pattern:
          /^(?!.*?[^\x21-\x7E\s])[\w\x21-\x7E]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      },
    },
    {
      type: "textField",
      label: "Phone",
      options: { placeHolder: "Contact Number" },
      validations: {
        required: true,
        minLength: 6,
        maxLength: 14,
        pattern: /^\+(?:[0-9] ?){6,14}[0-9]$/,
      },
    },
    {
      type: "datePicker",
      label: "Date of Birth",
      validations: { required: true },
    },
    {
      type: "radioButton",
      label: "Gender",
      values: ["Male", "Female", "Don't want to specify"],
      validations: { required: true },
    },
    {
      type: "buttonGroup",
      label: "Hobbies",
      values: ["Sports", "Indoor Games", "Tech", "Music", "Fitness", "Art"],
    },
    {
      type: "select",
      label: "Branch",
      values: ["CSE", "EEE", "ECE", "MECH", "IT", "CIVIL"],
      validations: { required: true },
    },
    {
      type: "switch",
      label: "Agree to Terms and Conditions",
      validations: { requried: true },
    },
  ],

  "Login Form": [
    {
      type: "textField",
      label: "Email",
      options: { placeHolder: "Email Address" },
      validations: {
        required: true,
        minLength: 3,
        maxLength: 50,
        pattern:
          /^(?!.*?[^\x21-\x7E\s])[\w\x21-\x7E]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      },
    },
    {
      type: "textField",
      label: "Password",
      options: { placeHolder: "Password" },
      validations: {
        required: true,
        minLength: 5,
        maxLength: 50,
        pattern:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      },
    },
  ],

  "SignUp Form": [
    {
      type: "textField",
      label: "Name",
      options: { placeHolder: "Full Name" },
      validations: { required: true, minLength: 3, maxLength: 50 },
    },
    {
      type: "textField",
      label: "Email",
      options: { placeHolder: "Email Address" },
      validations: {
        required: true,
        minLength: 3,
        maxLength: 50,
        pattern:
          /^(?!.*?[^\x21-\x7E\s])[\w\x21-\x7E]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      },
    },
    {
      type: "textField",
      label: "Password",
      options: { placeHolder: "Password" },
      validations: {
        required: true,
        minLength: 5,
        maxLength: 50,
        pattern:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      },
    },
  ],
};

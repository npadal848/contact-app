export const renderField = ({
  input,
  label,
  className,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} className={className} placeholder={label} type={type} />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "!Required";
  } else if (values.name.length > 20) {
    errors.name = "Must be 20 characters or less";
  }
  if (!values.email) {
    errors.email = "!Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.mobileNumber) {
    errors.mobileNumber = "!Required";
  } else if (!"/^[0-9]+$/".match(values.mobileNumber)) {
    errors.mobileNumber = "Must be a number";
  } else if (Number(values.mobileNumber).length === 10) {
    errors.mobileNumber = "Sorry, you must enter 10 digits mobile number";
  }
  return errors;
};

export const required = (value) => {
  return value || typeof value === "number" ? undefined : "!Required";
};

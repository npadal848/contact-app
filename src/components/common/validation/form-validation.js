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
  } else if (Number(values.mobileNumber).length === 10) {
    errors.mobileNumber = "Sorry, you must enter 10 digits mobile number";
  }
  return errors;
};

export const required = (value) => {
  return value || typeof value === "number" ? undefined : "!Required";
};

export const upper = (value) =>
  value && value.toUpperCase().replace(/[^A-Za-z \s]/gi, "");
export const lower = (value) => value && value.toLowerCase();
export const mobileNumber = (value) => {
  if (!value) {
    return value;
  }
  const mobileNo = value.replace(/[^\d]/g, "");
  if (mobileNo.length <= 3) {
    return `${mobileNo}`;
  }
  if (mobileNo.length <= 7) {
    return `${mobileNo.slice(0, 3)}-${mobileNo.slice(3)}`;
  }
  return `${mobileNo.slice(0, 3)}-${mobileNo.slice(3, 6)}-${mobileNo.slice(
    6,
    10
  )}`;
};

import { FormControl, FormLabel, Row } from "react-bootstrap";
import { useState } from "react";

const FormElement = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, ...inputprops } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <Row className="mb-3">
      <FormLabel>{label}</FormLabel>
      <FormControl
        onChange={onChange}
        {...inputprops}
        onBlur={handleFocus}
        onFocus={() =>
          inputprops.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      ></FormControl>
      <span>{errorMessage}</span>
    </Row>
  );
};

export default FormElement;

import { FormControl, FormLabel, Row } from "react-bootstrap";
import "./FormPage.css";

const FormElement = (props) => {
  const { label, onChange, ...inputprops } = props;
  return (
    <Row className="mb-3">
      <FormLabel>{label}</FormLabel>
      <FormControl onChange={onChange} {...inputprops}></FormControl>
    </Row>
  );
};

export default FormElement;

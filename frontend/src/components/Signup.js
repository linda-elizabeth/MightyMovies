import { useState } from "react";
import FormElement from "./FormElement";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./FormPage.css";
const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: "email",
      label: "Email",
      name: "email",
      type: "email",
      errorMessage: "Enter a valid email address!",
      required: true,
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      type: "password",
      pattern: "^(?=.*[a-z])(?=.*[A-Z]).{8,}$",
      errorMessage:
        "Password should contain atleast 8 characters, including a lowercase letter and uppercase letter",
      required: true,
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      pattern: values.password,
      errorMessage: "Passwords do not match!",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/signup", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log(res);
        alert("Signup Successful!");
      })
      .catch((err) => {
        alert(err.response.data.detail);
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="main">
      <div className="transbox">
        <div style={{ textAlign: "center" }}>Get Started!</div>

        <Form
          className="rounded p-4 align-items-center"
          onSubmit={handleSubmit}
        >
          {inputs.map((input) => (
            <FormElement
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <div style={{ textAlign: "center" }}>
            <Button type="submit">Sign-up</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;

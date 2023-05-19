import { useState } from "react";
import FormElement from "./FormElement";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./FormPage.css";
const Signin = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const inputs = [
    {
      id: "email",
      label: "Email",
      name: "email",
      type: "email",
      errorMessage: "Enter a valid email id!",
      required: true,
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      type: "password",
      pattern: "^(?=.*[a-z])(?=.*[A-Z]).{8,}$",
      errorMessage:
        "Password should contain atleast 8 characters, including a lowercase and uppercase letter",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/signin", values)
      .then((res) => {
        console.log(res);
        alert("Signin successful!");
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
        <div style={{ textAlign: "center" }}>Welcome Back!</div>
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
            <Button type="submit">Sign-in</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signin;

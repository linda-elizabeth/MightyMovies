import { useState } from "react";
import FormElement from "./FormElement";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./FormPage.css";
const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const inputs = [
    {
      id: "email",
      label: "Email",
      name: "email",
      type: "email",
      required: true,
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      type: "password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/signup", values)
      .then((res) => {
        console.log("Signup successful!");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert("Invalid credentials!");
        }
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="main">
      <div className="transbox">
        Get Started!
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

          <Button type="submit">Sign-up</Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;

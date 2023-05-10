import { useState } from "react";
import FormElement from "./FormElement";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
const Signin = () => {
  const [values, setValues] = useState({ email: "", password: "" });
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
    axios.post("http://localhost:8000/api/signin", values).then((res) => {
      console.log(res);
    });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div>
      Welcome Back!
      <Form className="rounded p-4 align-items-center" onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormElement
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <Button type="submit">Sign-in</Button>
      </Form>
    </div>
  );
};

export default Signin;

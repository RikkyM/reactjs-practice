import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = (props) => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        name="Fullname"
        placeholder="Insert your name here..."
      />
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="*****"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="*****"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;

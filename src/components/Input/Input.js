import "./Input.css";

const Input = (props) => {
  const { size = "medium", ...rest } = props;
  return (
    <input className={`ip ${size}`} {...rest} type="text" placeholder={size} />
  );
};

export default Input;

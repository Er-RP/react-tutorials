import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    setUser({ name: "RP", email: "rp@gmail.com" });
    navigate("/dashboard");
  };
  return (
    <section className="section">
      <label htmlFor="login" style={{ margin: "0 10px" }}>
        Inbuilt login
      </label>
      <button id="login" className="btn" onClick={handleLogin}>
        Login
      </button>
    </section>
  );
};

export default Login;

import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const ctx = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = e => {
    setEmail(e.target.value);
  };
  const changePassword = e => {
    setPassword(e.target.value);
  };

  const login = () => {
    console.log("a");
    ctx.loginUser(email, password);
    
  };
  return (
    <>
      <div className="container mt-5 col-3">
        <div className="form-group py-3">
          <label htmlFor="exampleInputEmail1" className="py-2">
            Хэрэглэчийн нэр
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Хэрэглэгчийн нэр"
            onChange={changeEmail}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="py-2">
            Нууц үг
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Нууц үг"
            onChange={changePassword}
          />
        </div>
        <button
          onClick={login}
          type="submit"
          className="btn my-4 btn-dark text-center"
        >
          Нэвтрэх
        </button>
      </div>
    </>
  );
};

export default Login;

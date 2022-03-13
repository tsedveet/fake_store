import React, {useState} from "react";
import axios from "../axios-products";
const UserContext = React.createContext();

const initialState = {
  logginIn: false,
  success: null,
  error: null,
  token: null,
};

export const UserStore = props => {
  const [state, setState] = useState(initialState);

  const logOut = () => {
    localStorage.removeItem("token");
    setState(initialState);
  };

  const loginUserSuccess = (success, token) => {
    localStorage.setItem("success", success);
    localStorage.setItem("token", token);
    setState({
      ...state,
      logginIn: true,
      success,
      token,
    });
  };

  const loginUser = (username, password) => {
    setState({...state, logginIn: true});
    const data = {
      username,
      password,
    };
    console.log(data);

    axios.post("auth/login", data).then(result => {
      // LocalStorage ruu hadgalna
      const token = result.data.token;
      const success = true;
      loginUserSuccess(success, token);
    });
  };


  return (
    <UserContext.Provider
      value={{
        state,
        loginUser,
        loginUserSuccess,
        logOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;

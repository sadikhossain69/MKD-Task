import React, { useReducer } from "react";
import MkdSDK from "./utils/MkdSDK";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')),
  user: localStorage.getItem('email') === "null" ? null : localStorage.getItem('email'),
  token: localStorage.getItem('token') === "null" ? null : localStorage.getItem('token'),
  role: localStorage.getItem('role') === "null" ? null : localStorage.getItem('role'),
};

console.log(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      //TODO
      return {
        ...state,
        isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')),
        user: localStorage.getItem('email') === "null" ? null : localStorage.getItem('email'),
        token: localStorage.getItem('token') === "null" ? null : localStorage.getItem('token'),
        role: localStorage.getItem('role') === "null" ? null : localStorage.getItem('role'),
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

let sdk = new MkdSDK();

export const tokenExpireError = (dispatch, errorMessage) => {
  const c = sdk.check(localStorage.getItem('role'))
  const role = localStorage.getItem("role");
  if (sdk.check(localStorage.getItem('role')).message === "OK") {
    alert("Your are a valid user")
  }
  else if (c.message === "TOKEN_EXPIRED") {
    alert("You are not a valid user")
    dispatch({
      type: "LOGOUT",
    });
    window.location.href = "/" + role + "/login";
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    //TODO
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import axios from "axios";
const initial = {
  email: "",
  password: ""
};
const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const [state, setState] = useState(initial);
  const handleChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
    // console.log(state)
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://reqres.in/api/login/", state);
      console.log(res);
      if (res.data.token) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={state.email}
          />
        </div>
        <div>
          <label>Password</label>

          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={state.password}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </>
  );
};
export { Login };

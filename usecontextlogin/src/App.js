import "./styles.css";
import { Navbar } from "./Components/Navbar";
import { Login } from "./Components/Login";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContextProvider";
export default function App() {
  const { isAuth } = useContext(AuthContext);
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      {!isAuth && <Login />}
    </div>
  );
}

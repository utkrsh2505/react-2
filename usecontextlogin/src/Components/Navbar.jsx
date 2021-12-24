import { AuthContext } from "../Context/AuthContextProvider";
import { useContext } from "react";
const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <>
      navabar
      {isAuth && (
        <>
          <button onClick={() => setIsAuth(false)}>Sign out</button>
          <br />
          <p> you are logeed in</p>
        </>
      )}
    </>
  );
};
export { Navbar };

import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const contextData = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);

  return (
    <div className="flex justify-between shadow-lg m-2">
      <div className="logoContainer">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4"> Online Status - {onlineStatus}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>
          <button
            className="loginBtn"
            onClick={() => {
              buttonName == "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
          <li className="p-2 font-bold">{contextData.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

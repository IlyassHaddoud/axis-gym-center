import { useRef } from "react";
import logo from "../assets/hero/Logo.png";

const Header = () => {
  const nav = useRef();
  const burger = useRef();
  const toggleNav = () => {
    nav.current.classList.toggle("active");
    burger.current.classList.toggle("active");
    document.body.classList.toggle("active");
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} />
      </div>
      <div ref={nav} className="nav">
        <ul className="nav-links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Program</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
        </ul>
        <div className="nav-buttons">
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
      </div>
      <div ref={burger} onClick={toggleNav} className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Header;

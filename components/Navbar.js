import { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";

import Logo from "../static/images/logoSIMPLE.svg";
import Button from "./Button";

const Navbar = ({ email }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navStyles = isOpen ? "--open" : "--close";

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="container">
        <div className="nav-logo-wrapper">
          <Logo />
        </div>
        <ul className="nav-items-wrapper">
          <li>
            <a href="#hjem">Hjem</a>
          </li>
          <li>
            <a href="#tjenester">Tjenester</a>
          </li>
          <li>
            <a href="#om-oss">Om oss</a>
          </li>
          <li>
            <a href="#kontakt-oss">Kontakt oss</a>
          </li>
          <li>
            <Button email={email} />
          </li>
        </ul>
        <div className="mobile-nav-btn" style={{ marginBottom: "0.5rem" }}>
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={handleClick}
            width={35}
            height={25}
            strokeWidth={3}
            rotate={0}
            color="#777"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
        <div className={`mobile-nav ${navStyles}`}>
          <ul className="mobile-nav-items">
            <li onClick={handleClick}>
              <a href="#hjem">Hjem</a>
            </li>
            <li onClick={handleClick}>
              <a href="#tjenester">Tjenester</a>
            </li>
            <li onClick={handleClick}>
              <a href="#om-oss">Om oss</a>
            </li>
            <li onClick={handleClick}>
              <a href="#kontakt-oss">Kontakt oss</a>
            </li>
            <li onClick={handleClick}>
              <Button email={email} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

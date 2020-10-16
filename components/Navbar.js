import Logo from "../static/images/logoSIMPLE.svg";
import Button from "./Button";

const Navbar = ({ email }) => {
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
      </div>
    </nav>
  );
};

export default Navbar;

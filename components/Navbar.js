import Logo from "../static/images/logoSIMPLE.svg";

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
            <a href={`mailto:${email}`}>
              <button className="btn btn-md">BOOK MØTE</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

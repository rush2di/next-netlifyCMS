import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../static/images/logoSIMPLE.svg";

const Footer = ({ content }) => (
  <footer>
    <div className="container">
      <div className="block-grid-3">
        <div className="logo-wrapper">
          <Logo />
        </div>
        <div className="block">
          <ul>
            <li>
              <div className="flex">
                <FontAwesomeIcon icon={["fas", "phone"]} />
                <p>{content.telephone}</p>
              </div>
            </li>
            <li>
              <div className="flex">
                <FontAwesomeIcon icon={["fas", "envelope"]} />
                <a href={`mailto:${content.email}`}>{content.email}</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="block">
          <ul>
            <li>
              <div className="flex">
                <FontAwesomeIcon icon={["fab", "facebook-square"]} />
                <a
                  href={content.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </div>
            </li>
            <li>
              <div className="flex">
                <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
                <p>{content.address}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-credits">
        <span>Copyright Sanden økonomi as</span>
        <span>
          design & utvikling av{" "}
          <a
            href="https://www.reeitdesign.no"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reeitdesign
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;

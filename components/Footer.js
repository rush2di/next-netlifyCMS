import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../static/images/logoSIMPLE.svg";

const Footer = ({ content }) => (
  <footer id="kontakt-oss">
    <div className="container">
      <div className="block-grid-3">
        <div className="logo-wrapper">
          <Logo />
        </div>
        <div className="block">
          <ul>
            <li>
              <div className="flex">
                <FontAwesomeIcon icon={["fas", "phone"]} className="icon" />
                <a href={`tel:${content.telephone}`}>{content.telephone}</a>
              </div>
            </li>
            <li>
              <div className="flex">
                <FontAwesomeIcon icon={["fas", "envelope"]} className="icon" />
                <a href={`mailto:${content.email}`}>{content.email}</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="block">
          <ul>
            <li>
              <div className="flex">
                <FontAwesomeIcon
                  icon={["fab", "facebook-square"]}
                  className="icon"
                />
                <a
                  href={
                    content.facebook.includes("https://")
                      ? content.facebook
                      : `https://${content.facebook}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </div>
            </li>
            <li>
              <div className="flex">
                <FontAwesomeIcon
                  icon={["fas", "map-marker-alt"]}
                  className="icon"
                />
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
            href="https://www.jrdesign.no"
            target="_blank"
            rel="noopener noreferrer"
          >
            JR DESIGN AS
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;

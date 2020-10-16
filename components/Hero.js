import Logo from "../static/images/logoCLG.svg";

const Hero = ({ content }) => (
  <div className="hero-section">
    <div className="container">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="text-content">
        <div>
          <h1 className="heading heading-lg">{content.title}</h1>
          <p className="paragraph">{content.intro}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;

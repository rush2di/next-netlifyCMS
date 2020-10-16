const About = ({ content }) => (
  <div className="about-section" id="om-oss">
    <div className="container">
      <div className="text-content-wrapper">
        <div className="block">
          <h2 className="heading heading-md">{content.title}</h2>
          <p className="paragraph">{content.intro}</p>
        </div>
        <div className="block">
          <div className="block-heading">
            <img src="../static/images/assetsico1.png" />
            <h3 className="heading heading-sm">{content.info1.title_info1}</h3>
          </div>
          <p className="paragraph">{content.info1.desc_info1}</p>
        </div>
        <div className="block">
          <div className="block-heading">
            <img src="../static/images/assetsico2.png" />
            <h3 className="heading heading-sm">{content.info2.title_info2}</h3>
          </div>
          <p className="paragraph">{content.info2.desc_info2}</p>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={content.image} />
      </div>
    </div>
  </div>
);

export default About;

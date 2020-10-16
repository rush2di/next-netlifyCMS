import { v4 as uuid } from "uuid";

const Services = ({ content }) => (
  <div className="services-section">
    <div className="container">
      <div className="grid-block">
        <div className="block">
          <p className="paragraph">{content.intro}</p>
          <ul className="sub-grid">
            {content.list1.map((item) => (
              <li key={uuid()}>{item.service}</li>
            ))}
          </ul>
        </div>
        <div className="block">
          <ul className="sub-grid">
            {content.list2.map((item) => (
              <li key={uuid()}>{item.service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Services;

const { default: Button } = require("./Button");

const Book = ({ content, email }) => (
  <div className="book-section">
    <div className="container">
      <div className="text-content">
        <h2 className="heading heading-md">{content.title}</h2>
        <p className="paragraph">{content.intro}</p>
        <Button email={email} />
      </div>
      <div className="image-wrapper">
        <img src={content.image} />
      </div>
    </div>
  </div>
);

export default Book;

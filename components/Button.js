const Button = ({ email }) => (
  <a href={`mailto:${email}`}>
    <button className="btn btn-md">BOOK MØTE</button>
  </a>
);

export default Button;

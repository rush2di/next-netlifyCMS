import Header from "./Header";
import Navbar from "./Navbar";

const Layout = (props) => {
  const { children, headerSEO, info } = props;
  return (
    <div>
      <Header
        description={headerSEO.description}
        thumbnail={headerSEO.thumbnail}
      />
      <Navbar email={info.email} />
      <main>{children}</main>
    </div>
  );
};


export default Layout;

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

library.add(fab, fas);

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
      <Footer content={info} />
    </div>
  );
};

export default Layout;

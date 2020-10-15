import React from "react";
import Head from "next/head";
import stylesheet from "../src/styles/style.scss";

const Header = ({ description, thumbnail }) => (
  <Head>
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: stylesheet }}
    />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:image" content={thumbnail} />
    <meta property="og:site_name" content="Sanden Økonomi AS" />
    <meta property="og:title" content="Sanden Økonomi AS" />
    <meta property="og:description" content={description} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:title" content="Sanden Økonomi AS" />
    <meta name="twitter:image" content={thumbnail} />
    <title>Sanden Økonomi AS</title>
  </Head>
);

export default Header;

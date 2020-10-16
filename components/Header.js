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
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
      integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
      crossOrigin=""
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    ></link>
    <link
      href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap"
      rel="stylesheet"
    ></link>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

    <title>Sanden Økonomi AS</title>
  </Head>
);

export default Header;

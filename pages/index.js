import dynamic from "next/dynamic";

import About from "../components/About";
import Book from "../components/Book";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Services from "../components/Services";

const ClientSideLeaftletMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const Index = (props) => {
  console.log(props);

  const {
    heroContent,
    aboutContent,
    servicesContent,
    bookContent,
    infoContent,
  } = props;

  const headerSEO = {
    description: heroContent.intro,
    thumbnail: aboutContent.image,
  };

  return (
    <Layout headerSEO={headerSEO} info={infoContent}>
      <Hero content={heroContent} />
      <About content={aboutContent} />
      <Services content={servicesContent} />
      <Book content={bookContent} />
      <ClientSideLeaftletMap />
    </Layout>
  );
};

export async function getStaticProps() {
  const heroContent = await import("../content/hero/hero.md");
  const aboutContent = await import("../content/about/about.md");
  const servicesContent = await import("../content/services/services.md");
  const bookContent = await import("../content/bookapp/bookapp.md");
  const infoContent = await import("../content/info/general-info.md");

  return {
    props: {
      heroContent: heroContent.attributes,
      aboutContent: aboutContent.attributes,
      servicesContent: servicesContent.attributes,
      bookContent: bookContent.attributes,
      infoContent: infoContent.attributes,
    },
  };
}

export default Index;

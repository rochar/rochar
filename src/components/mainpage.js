import React from "react";

import Hero from "./hero";
import Articles from "./articles";
import ArticleData from "../data/articles.json";

const MainPage = ({configuration}) => {
  return (
    <React.StrictMode>
      <Hero name={configuration.name}></Hero>
      <main id="main">
        <Articles items={ArticleData} />        
      </main>
    </React.StrictMode>
  );
};

export default MainPage;

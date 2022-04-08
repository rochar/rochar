import React from "react";

import Hero from "./hero";
import ArticlesList from "./articleslist";
import ArticleData from "../../data/articles.json";

const Home = ({configuration}) => {
  return (
    <React.StrictMode>
      <Hero name={configuration.name}></Hero>
      <main id="main">
        <ArticlesList items={ArticleData} />        
      </main>
    </React.StrictMode>
  );
};

export default Home;

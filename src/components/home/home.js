import React from "react";

import Hero from "./hero";
import ArticlesList from "../articleslist";
import ArticleData from "../../data/articles.json";

const Home = ({configuration}) => {
  return (
    <React.StrictMode>
      <Hero name={configuration.name}></Hero>
    </React.StrictMode>
  );
};

export default Home;

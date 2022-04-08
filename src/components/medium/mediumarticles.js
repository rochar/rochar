import React from "react";
import axios from "axios";
import Spinner from "../spinner";
import MediumArticle from "./mediumarticle";

const baseURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rochar";

class MediumArticles extends React.Component {
  state = { articles: [], error: null };

  componentDidMount() {
    axios
      .get(baseURL)
      .then((response) => {
        this.setState({ articles: response.data.items, error: null });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ articles: [], error: error });
      });
  }

  conditionalRender() {
    const { articles, error } = this.state;

    if (error !== null) {
      return <div>Could not load articles: {error}</div>;
    }

    if (articles.length > 0) {
      const articlesComponents = articles.map((article) => (
        <MediumArticle key={article.guid} article={article}></MediumArticle>
      ));
      return (
        <div className="mt-3 row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {articlesComponents}
        </div>
      );
    }

    return <Spinner />;
  }

  render() {
    return <div>{this.conditionalRender()}</div>;
  }
}

export default MediumArticles;

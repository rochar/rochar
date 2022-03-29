import React from "react";
import axios from "axios";
import Spinner from "./spinner";

const baseURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rochar";

class Articles extends React.Component {
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
        <div key={article.guid} className="col gy-4">
          <div className="card">
            <img
              src={article.thumbnail}
              className="card-img-top"
              alt="Article Image"
            />
            <div className="card-body bg-dark text-white">
              <h5 className="card-title">{article.title}</h5>
              <p
                className="card-text hide-img"
                dangerouslySetInnerHTML={{ __html: article.description }}
              />
            </div>
          </div>
        </div>
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

export default Articles;

import React from "react";

const ArticleInfo = ({ category, date, githuburl, summary }) => {
  let githublink;
  if (githuburl) {
    githublink = (
      <a href={githuburl} target="_blank">
        GitHub
      </a>
    );
  } else {
    githublink = " - ";
  }
  return (
    <div className="col-lg-4">
      <div className="portfolio-info">
        <h3>Information</h3>
        <ul>
          <li>
            <strong>Category</strong>: {category}
          </li>
          <li>
            <strong>Publish date</strong>: {date}
          </li>
          <li>
            <strong>Project URL</strong>:
            {githublink}
          </li>
        </ul>
      </div>
      <div className="portfolio-description">
        <h2>Summary</h2>
        <p>
          {summary}
        </p>
      </div>
    </div>
  );
};
export default ArticleInfo;

import React from "react";

//see https://codesandbox.io/s/01-loading-components-dynamically-without-switch-statement-forked-kcznxq?file=/src/App.js

const ArticleDetails = () => {
    //TODO Get from Query string
  const id = "A1";
  const ArticleComponent = React.lazy(() =>
    import(`./${id}`).catch(() => import(`./NotFoundArticle`))
  );

  return (
    <main id="main">
      <h1>Article Details</h1>
      <React.Suspense fallback="Loading article...">
        <ArticleComponent />
      </React.Suspense>
    </main>
  );
};

export default ArticleDetails;

import React from "react";

//see https://codesandbox.io/s/01-loading-components-dynamically-without-switch-statement-forked-kcznxq?file=/src/App.js

const ArticleDetails = () => {
    //TODO Get from Query string
  const id = "avoidrelaycommands";
  const ArticleComponent = React.lazy(() =>
    import(`./${id}`).catch(() => import(`./NotFoundArticle`))
  );

  return (
    <main id="main">
      <React.Suspense fallback="Loading article...">
        <ArticleComponent />
      </React.Suspense>
    </main>
  );
};

export default ArticleDetails;

import React from "react";
import { useParams } from 'react-router-dom';


const ArticleDetails = () => {
  let params = useParams();

  const ArticleComponent = React.lazy(() =>
    import(`./${params.id}`).catch(() => import(`./NotFoundArticle`))
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

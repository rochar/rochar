import React from "react";
import { useParams } from 'react-router-dom';

const ArticleDetails = () => {
  let params = useParams();

  const ArticleComponent = React.lazy(() =>
    import(`./${params.id}`).catch(() => import(`./NotFoundArticle`))
  );

  return (
    
       <React.Suspense fallback={<h1>Loading, please wait...</h1>}>
        <ArticleComponent />        
      </React.Suspense> 
  );
};

export default ArticleDetails;

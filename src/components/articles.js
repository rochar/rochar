import React from "react";
import RouteLink from "./routelink";

const computeUniqueFamilies = (data) => {
  const uniqueValues = new Set();

  for (const item of data)
    for (const familiy of item.families) uniqueValues.add(familiy);
  return Array.from(uniqueValues).sort();
};

const Article = ({ item }) => {
  let filterNames = "";
  item.families.forEach((element) => {
    filterNames += " filter-" + element;
  });

  return (
    <div className={`col-lg-4 col-md-6 portfolio-item ${filterNames}`}>
      {/* <RouteLink href={`/articledetails?id=${item.id}`} target="_blank"> */}
      <a href={item.url} target="_blank" >
        <div className="portfolio-wrap">
          <div className="portfolio-title">{item.title}</div>
          {/* require needs to have the hardcoded initial path so webpack 
          will create a chunk for each image file in /assets/img/portfolio */}
          <img
            src={require(`../assets/img/portfolio/${item.image}`)}
            className="img-fluid"
            alt=""
          />
        </div>
        </a>
      {/* </RouteLink> */}
    </div>
  );
};

const Articles = (props) => {
  const families = computeUniqueFamilies(props.items);
  var familyComponents = families.map((family) => (
    <li key={family} data-filter={`.filter-${family}`}>
      {family}
    </li>
  ));
  var articleComponents = props.items.map((article) => (
    <Article key={article.id} item={article}></Article>
  ));

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Articles</h2>
          <p>
            Articles that I wrote, mainly to explore a topic, share and keep
            knowledge about some pattern or technique!
          </p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              {familyComponents}
            </ul>
          </div>
        </div>
        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {articleComponents}
        </div>
      </div>
    </section>
  );
};

export default Articles;

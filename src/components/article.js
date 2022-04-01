import React from "react";

class Article extends React.Component{
    constructor(props)
    {
        super(props);
        this.articleRef = React.createRef();
    }

    componentDidMount()
    {
        this.articleRef.current.addEventListener('load', this.setImageProps);
    }

    setImageProps = () =>{
        const height = this.articleRef.current.clientHeight;
        // console.log(height);
        // console.log(this.articleRef.current.clientWidth);
    }

    render(){
        const {thumbnail, title, pubDate, link} = this.props.article;
        return (
        <div className="col gy-4">
          <div className="card border-info">
            <img
              ref={this.articleRef}
              src={thumbnail}
              className="card-img-top"
              alt="Article Image"
            />
            <div className="card-body bg-dark text-white">
              <h5 className="card-title">{title}</h5>
              <div className="card-text mt-3 fs-6 fw-light">{pubDate}</div>
              <a href={link} target="_blank">Read More</a>
            </div>
          </div>
        </div> );
    }
}

export default Article;
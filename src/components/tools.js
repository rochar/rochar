import React from "react";
import axios from "axios";
import Spinner from "./spinner";
class Tools extends React.Component {
  state = { tools: [], error: null };

  componentDidMount() {
    axios
      .get("./data/toolsdata.json")
      .then((response) => {
        this.setState({ tools: response.data, error: null });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ tools: [], error: error });
      });
  }

  conditionalRender() {
    const { tools, error } = this.state;

    if (error !== null) {
      return <div>Could not load tools: {error}</div>;
    }
     if (tools.length > 0) {         
       const toolsComponents = tools.map((tool) => (
            <div key={tool.url}>
                <a href={tool.url} target="_blank">{tool.title}</a>
                <div>{tool.description}</div>
                </div>       
       ));
       return <div >{ toolsComponents }</div>;
     }

    return <Spinner />;
  }

  render() {
    return (
      <form>
        {/* <select className="form-select">
          <option value="1">One</option>
        </select> */}
        <div>{this.conditionalRender()}</div>
      </form>
    );
  }
}

export default Tools;

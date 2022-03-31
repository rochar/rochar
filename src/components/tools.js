import React from "react";
import axios from "axios";
import Spinner from "./spinner";
class Tools extends React.Component {
  state = { toolsData: [], families: [], error: null };

  componentDidMount() {
    axios
      .get("./data/toolsdata.json")
      .then((response) => {
        const unqiueFamilies = this.computDistinctFamily(response.data);
        this.setState({
          toolsData: response.data,
          families: unqiueFamilies,
          error: null,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ toolsData: [], families: [], error: error });
      });
  }
  rendeFamilies() {
    const { toolsData, families, error } = this.state;

    if (error !== null) {
      return;
    }
    const components = families.map((family) => <option key={family}>{family}</option>);
    return (
      <select className="form-select" onChange={this.onSelectedFamilyChanged}>
        {components}
      </select>
    );
  }
  renderListTools() {
    const { toolsData, families, error } = this.state;

    if (error !== null) {
      return <div>Could not load tools: {error}</div>;
    }
    if (toolsData.length > 0) {
      const components = toolsData.map((tool) => (
        <div key={tool.url} className="p-2">
          <a href={tool.url} target="_blank">
            {tool.title}
          </a>
          <div>{tool.description}</div>
        </div>
      ));
      return <div>{components}</div>;
    }

    return <Spinner />;
  }

  render() {
    return (
      <div className="p-3">
      <form>
        {this.rendeFamilies()}
        <div>{this.renderListTools()}</div>
      </form>
      </div>
    );
  }

  onSelectedFamilyChanged(event) {
    console.log(event.target.value);
  }

  computDistinctFamily(toolsData) {
    const uniqueValues = new Set();
    for (const tool of toolsData) uniqueValues.add(tool.family);
    return Array.from(uniqueValues);
  }
}

export default Tools;

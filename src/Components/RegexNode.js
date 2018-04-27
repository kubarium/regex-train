import React, { Component } from "react";
import "./RegexNode.css";

class RegexNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regex: this.props.regex
    };
  }
  collectRegex = () => {
    console.log(this.props.flags);
    this.props.travel();
  };
  render() {
    return (
      <div className="node">
        <div className="flags">
          <label>
            <input type="checkbox" value="g" checked={this.props.flags.g} onChange={this.collectRegex} /> (g)lobal
          </label>
          <label>
            <input type="checkbox" value="i" checked={this.props.flags.i} onChange={this.collectRegex} /> (i)nsensitive
          </label>
          <label>
            <input type="checkbox" value="m" checked={this.props.flags.m} onChange={this.collectRegex} /> (m)ultiline
          </label>
          <label>
            <input type="checkbox" value="u" checked={this.props.flags.u} onChange={this.collectRegex} /> (u)nicode
          </label>
          <label>
            <input type="checkbox" value="y" checked={this.props.flags.y} onChange={this.collectRegex} /> stick(y)
          </label>
        </div>
        <div className="pattern">
          /
          <input type="text" name="pattern" value={this.props.pattern} />
          /
        </div>
        <div className="controls">
          <button className="clone">One More</button>
          <button className="move-up">Move Up</button>
          <button className="move-down">Move Down</button>
          <button className="disable">Disable</button>
          <button className="delete">Delete</button>
        </div>
        <div className="connectors">
          <span draggable="true" className="connector input" />
          <span draggable="true" className="connector output" />
        </div>
      </div>
    );
  }
}

export default RegexNode;

import React, { Component } from "react";
import "./RegexNode.css";
import { connect } from "react-redux";
import * as Actions from "../actions";
import { patternStringify } from "../Utils";
import ReactNbsp from "react-nbsp";

const mapStateToProps = (state, ownProps) => {
  return {
    regexNode: ownProps.regexNode
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNode: () => {
      dispatch(Actions.createNode());
    },
    updatePattern: () => {
      dispatch(Actions.updatePattern());
    },
    toggleFlag: event => {
      dispatch(Actions.updatePattern(event.target.value, event.target.checked));
    }
  };
};
/* 
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        mergeProp: mergePropVal
    }
}
 */

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
            <input type="checkbox" value="g" checked={this.props.regexNode.flags.g} onChange={this.updatePattern} />
            <ReactNbsp />
            (g)lobal
          </label>
          <label>
            <input type="checkbox" value="i" checked={this.props.regexNode.flags.i} onChange={this.updatePattern} />
            <ReactNbsp />
            (i)nsensitive
          </label>
          <label>
            <input type="checkbox" value="m" checked={this.props.regexNode.flags.m} onChange={this.updatePattern} />
            <ReactNbsp />
            (m)ultiline
          </label>
          <label>
            <input type="checkbox" value="u" checked={this.props.regexNode.flags.u} onChange={this.updatePattern} />
            <ReactNbsp />
            (u)nicode
          </label>
          <label>
            <input type="checkbox" value="y" checked={this.props.regexNode.flags.y} onChange={this.updatePattern} />
            <ReactNbsp />
            stick(y)
          </label>
        </div>
        <div className="pattern">
          /
          <input
            type="text"
            name="pattern"
            value={this.props.regexNode.pattern && patternStringify(this.props.regexNode.pattern)}
          />
          /
        </div>
        <div className="controls">
          <button className="clone" onClick={this.props.createNode}>
            One More
          </button>
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

export default connect(mapStateToProps, mapDispatchToProps, null)(RegexNode);

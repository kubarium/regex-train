import React, { Component } from "react";
import "./RegexNode.css";
import { connect } from "react-redux";
import * as Actions from "../actions";
import { patternStringify } from "../Utils";
import ReactNbsp from "react-nbsp";

const mapStateToProps = (state, ownProps) => {
  return {
    regexNode: ownProps.regexNode,
    index: ownProps.index
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteNode: () => {
      dispatch(Actions.deleteNode(ownProps.index));
    },
    createNode: () => {
      dispatch(Actions.createNode());
    },
    updatePattern: event => {
      dispatch(Actions.updatePattern(event.target.value, ownProps.index));
    },
    toggleFlag: event => {
      dispatch(Actions.toggleFlag(event.target.value, event.target.checked, ownProps.index));
    },
    toggleNode: event => {
      dispatch(Actions.toggleNode(!ownProps.active, ownProps.index));
    }
  };
};
/* 
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    active: stateProps.active
  };
}; */

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
            <input
              type="checkbox"
              defaultValue="g"
              defaultChecked={this.props.regexNode.flags.g}
              onChange={this.props.toggleFlag}
            />
            <ReactNbsp />
            (g)lobal
          </label>
          <label>
            <input
              type="checkbox"
              defaultValue="i"
              defaultChecked={this.props.regexNode.flags.i}
              onChange={this.props.toggleFlag}
            />
            <ReactNbsp />
            (i)nsensitive
          </label>
          <label>
            <input
              type="checkbox"
              defaultValue="m"
              defaultChecked={this.props.regexNode.flags.m}
              onChange={this.props.toggleFlag}
            />
            <ReactNbsp />
            (m)ultiline
          </label>
          <label>
            <input
              type="checkbox"
              defaultValue="u"
              defaultChecked={this.props.regexNode.flags.u}
              onChange={this.props.toggleFlag}
            />
            <ReactNbsp />
            (u)nicode
          </label>
          <label>
            <input
              type="checkbox"
              defaultValue="y"
              defaultChecked={this.props.regexNode.flags.y}
              onChange={this.props.toggleFlag}
            />
            <ReactNbsp />
            stick(y)
          </label>
        </div>
        <div className="pattern">
          /
          <input
            type="text"
            name="pattern"
            disabled={this.props.regexNode.active === false}
            defaultValue={this.props.regexNode.pattern && patternStringify(decodeURI(this.props.regexNode.pattern))}
            onChange={this.props.updatePattern}
          />
          /
        </div>
        <div className="controls">
          <button className="clone" onClick={this.props.createNode}>
            One More
          </button>
          <button className="move-up">Move Up</button>
          <button className="move-down">Move Down</button>
          <button className="disable" onClick={this.props.toggleNode} value={this.props.regexNode.active}>
            {this.props.regexNode.active ? "Disable" : "Enable"}
          </button>
          <button className="delete" onClick={this.props.deleteNode}>
            Delete
          </button>
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

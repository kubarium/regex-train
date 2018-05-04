import React, { Component } from "react";
import "./RegexNode.css";
import { connect } from "react-redux";
import * as Actions from "../actions";
import { patternStringify } from "../Utils";
import ReactNbsp from "react-nbsp";

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps
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
    moveNode: event => {
      dispatch(Actions.moveNode(event.target.value, ownProps.index));
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
    this.props.travel();
  };
  render() {
    console.log(this.props.regexNode.flags);

    return (
      <div className="node">
        <div className="flags">
          <label>
            <input
              type="checkbox"
              defaultValue="g"
              checked={this.props.regexNode.flags.g}
              onChange={this.props.toggleFlag}
            />
            <ReactNbsp />
            (g)lobal
          </label>
          <label>
            <input
              type="checkbox"
              defaultValue="i"
              checked={this.props.regexNode.flags.i}
              onChange={this.props.toggleFlag}
            />
            <ReactNbsp />
            (i)nsensitive
          </label>
          <label>
            <input
              type="checkbox"
              defaultValue="m"
              checked={this.props.regexNode.flags.m}
              onChange={this.props.toggleFlag}
            />
            <ReactNbsp />
            (m)ultiline
          </label>
          <label>
            <input
              type="checkbox"
              defaultValue="u"
              checked={this.props.regexNode.flags.u}
              onChange={this.props.toggleFlag}
            />
            <ReactNbsp />
            (u)nicode
          </label>
          <label>
            <input
              type="checkbox"
              defaultValue="y"
              checked={this.props.regexNode.flags.y}
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
            placeholder="put your pattern here: \d"
            disabled={this.props.regexNode.active === false}
            value={this.props.regexNode.pattern && patternStringify(decodeURI(this.props.regexNode.pattern))}
            onChange={this.props.updatePattern}
          />
          /
        </div>
        <div className="controls">
          <button className="clone" onClick={this.props.createNode}>
            One More
          </button>
          <button
            className="move-up"
            value={Actions.MOVE_NODE_UP}
            onClick={this.props.moveNode}
            disabled={this.props.first}>
            Move Up
          </button>
          <button
            className="move-down"
            value={Actions.MOVE_NODE_DOWN}
            onClick={this.props.moveNode}
            disabled={this.props.last}>
            Move Down
          </button>
          <button className="disable" onClick={this.props.toggleNode} value={this.props.regexNode.active}>
            {this.props.regexNode.active ? "Disable" : "Enable"}
          </button>
          <button className="delete" onClick={this.props.deleteNode} disabled={this.props.first}>
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

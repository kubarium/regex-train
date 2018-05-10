import React, { Component } from "react";
import "./RegexNode.css";
import { connect } from "react-redux";
import * as Actions from "../actions";
import { patternStringify } from "../Utils";
import ReactNbsp from "react-nbsp";

import MdCheckBoxOutlineBlank from "react-icons/lib/md/check-box-outline-blank";
import MdCheckBox from "react-icons/lib/md/check-box";
import MdAdd from "react-icons/lib/md/add";
import MdRemove from "react-icons/lib/md/remove";
import MdKeyboardArrowDown from "react-icons/lib/md/keyboard-arrow-down";
import MdKeyboardArrowUp from "react-icons/lib/md/keyboard-arrow-up";

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    ...state
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
      dispatch(Actions.moveNode(event.currentTarget.value, ownProps.index));
    },
    updatePattern: event => {
      dispatch(Actions.updatePattern(event.target.value, ownProps.index));
    },
    updateReplace: event => {
      dispatch(Actions.updateReplace(event.target.value, ownProps.index));
    },
    toggleFlag: event => {
      dispatch(Actions.toggleFlag(event.target.name, event.target.checked, ownProps.index));
    },
    toggleNode: event => {
      dispatch(Actions.toggleNode(!ownProps.active, ownProps.index));
    }
  };
};
class RegexNode extends Component {
  render() {
    return (
      <div className="node">
        <fieldset className="controlsFieldset">
          <legend>Controls</legend>
          <div className="controls">
            <button onClick={this.props.createNode}>
              <MdAdd className="clone" />
            </button>
            <button onClick={this.props.deleteNode} disabled={this.props.first}>
              <MdRemove className="delete" />
            </button>
            <button value={Actions.MOVE_NODE_UP} onClick={this.props.moveNode} disabled={this.props.first}>
              <MdKeyboardArrowUp className="move-up" />
            </button>
            <button value={Actions.MOVE_NODE_DOWN} onClick={this.props.moveNode} disabled={this.props.last}>
              <MdKeyboardArrowDown className="move-down" />
            </button>
            <button onClick={this.props.toggleNode} value={this.props.regexNode.active}>
              {this.props.regexNode.active ? (
                <MdCheckBox className="disable" />
              ) : (
                <MdCheckBoxOutlineBlank className="disable" />
              )}
            </button>
          </div>
        </fieldset>
        <fieldset className="patternFieldset">
          <legend>Pattern</legend>
          <div className="pattern">
            /
            <input
              type="text"
              name="pattern"
              placeholder="put your pattern here: \d"
              disabled={this.props.regexNode.active === false}
              value={this.props.regexNode.pattern !== null && patternStringify(decodeURI(this.props.regexNode.pattern))}
              onChange={this.props.updatePattern}
            />
            /
          </div>
          <div className="flags">
            <label>
              <input type="checkbox" name="g" checked={this.props.regexNode.flags.g} onChange={this.props.toggleFlag} />
              <ReactNbsp />
              (g)lobal
            </label>
            <label>
              <input type="checkbox" name="i" checked={this.props.regexNode.flags.i} onChange={this.props.toggleFlag} />
              <ReactNbsp />
              (i)nsensitive
            </label>
            <label>
              <input type="checkbox" name="m" checked={this.props.regexNode.flags.m} onChange={this.props.toggleFlag} />
              <ReactNbsp />
              (m)ultiline
            </label>
            <label>
              <input type="checkbox" name="u" checked={this.props.regexNode.flags.u} onChange={this.props.toggleFlag} />
              <ReactNbsp />
              (u)nicode
            </label>
            <label>
              <input type="checkbox" name="y" checked={this.props.regexNode.flags.y} onChange={this.props.toggleFlag} />
              <ReactNbsp />
              stick(y)
            </label>
          </div>
        </fieldset>
        <fieldset className="replaceFieldset">
          <legend>Replace</legend>
          <input
            type="text"
            className="replace"
            value={this.props.regexNode.replace}
            onChange={this.props.updateReplace}
          />
        </fieldset>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(RegexNode);

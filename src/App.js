import React, { Component } from "react";
import RegexNode from "./Components/RegexNode";
import "./App.css";

import { connect } from "react-redux";

import * as Actions from "./actions";

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    /*     createNode: () => {
      dispatch(Actions.createNode());
    } */
  };
};
/* 
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    mergeProp: mergePropVal
  };
};
 */
class App extends Component {
  render() {
    return (
      <main>
        <section className="input">
          <h1>Input your text below</h1>
          <textarea value={this.props.input} />
        </section>
        <section className="regex-nodes">
          <h1>Build your RegEx Train</h1>
          {this.props.regexNodes.map(regexNode => (
            <RegexNode key={`regexNode-${regexNode.index}`} regexNode={regexNode} />
          ))}
        </section>
        <section className="output">
          <h1>Your processed output</h1>
          <textarea value={this.props.output} />
        </section>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(App);

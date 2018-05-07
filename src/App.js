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
    updateInput: event => {
      dispatch(Actions.updateInput(event.target.value));
    }
  };
};

class App extends Component {
  render() {
    return (
      <main>
        <section className="input">
          <h1>Input your text below</h1>
          <textarea value={this.props.input} onChange={this.props.updateInput} />
        </section>
        <section className="regex-nodes">
          <h1>Build your RegEx Train</h1>
          {this.props.regexNodes.map((regexNode, index, nodes) => (
            <RegexNode
              key={`regexNode-${index}`}
              index={index}
              active={regexNode.active}
              last={index === nodes.length - 1}
              first={index === 0}
              regexNode={regexNode}
            />
          ))}
        </section>
        <section className="output">
          <h1>Your processed output</h1>
          <textarea value={this.props.output} readOnly />
        </section>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(App);

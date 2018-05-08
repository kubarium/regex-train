import React, { Component } from "react";
import RegexNode from "./Components/RegexNode";
import ReactNbsp from "react-nbsp";
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
    },
    toggleFaq: event => {
      dispatch(Actions.toggleFaq());
    }
  };
};

class App extends Component {
  render() {
    return (
      <main>
        <section>
          <header>
            <ReactNbsp />
            <h1>RegEx Train</h1>
            <span onClick={this.props.toggleFaq} className="faq">
              ?
            </span>
          </header>
          <div style={{ display: this.props.faq === false ? "none" : "block" }}>
            <p>
              For all your regular expression needs, please peruse{" "}
              <a href="https://regexr.com/" target="_blank">
                RegExr
              </a>, an indispensable tool that I refer to almost every day multiple times.
            </p>
            <p>
              That being said, I sometimes need to chain my regular expressions so in each operation of replace, the
              output gets pasted back into input at RegExr. Of course, further down the chain, I realize I had forgotten
              something in one of the early replace operations. This creates a lot of frustration since I now have to
              open multiple tabs for each operation I want to run so I could have access to the history of the rules I
              applied.
            </p>
            <p>
              Look at the example below. I want to get rid of the numbers at the end of each word and swap lazy and
              quick in the sentence. The solution I'm suggesting is one way of doing it. You can alter the order of the
              nodes and in some cases it will help you, in some other, you might have to follow a strict order.
            </p>
          </div>
        </section>
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

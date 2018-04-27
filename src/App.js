import React, { Component } from "react";
import RegexNode from "./Components/RegexNode";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "The1 quick2 brown3 fox4 jumps5 over6 the7 lazy8 dog9",
      regexNodes: [
        { pattern: /\d+/, flags: { g: false, i: false, m: false, u: false, y: false }, replace: "", active: true },
        {
          pattern: /lazy/,
          flags: { g: false, i: false, m: false, u: false, y: false },
          replace: "quick",
          active: true
        },
        { pattern: /quick/, flags: { g: false, i: false, m: false, u: false, y: false }, replace: "lazy", active: true }
      ],
      output: ""
    };
  }
  travel = () => {
    let output = this.state.input;
    this.state.regexNodes
      .filter(node => node.active)
      .forEach(
        node =>
          (output = output.replace(
            RegExp(node.pattern, Object.keys(node.flags).filter(flag => node.flags[flag])),
            node.replace
          ))
      );

    this.setState({ output });
  };
  patternStringify = pattern => {
    return pattern.toString().substring(1, pattern.toString().length - 1);
  };
  render() {
    return (
      <main>
        <section className="input">
          <h1>Input your text below</h1>
          <textarea value={this.state.input} />
        </section>
        <section className="regex-nodes">
          <h1>Build your RegEx Train</h1>
          {this.state.regexNodes.map((regexNode, index) => (
            <RegexNode
              key={`regexNode-${index}`}
              pattern={this.patternStringify(regexNode.pattern)}
              flags={regexNode.flags}
              travel={this.travel}
            />
          ))}
        </section>
        <section className="output">
          <h1>Your processed output</h1>
          <textarea value={this.state.output} />
        </section>
      </main>
    );
  }
}

export default App;

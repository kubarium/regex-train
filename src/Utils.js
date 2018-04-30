export const patternStringify = pattern => {
  return pattern.toString().substring(1, pattern.toString().length - 1);
};

export const prepareOutput = () => {
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

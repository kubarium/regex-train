export const patternStringify = pattern => {
  return pattern.toString().substring(1, pattern.toString().length - 1);
};

export const prepareOutput = (input, regexNodes) => {
  let output = input;

  regexNodes.filter(node => node.active).forEach(
    node =>
      (output = output.replace(
        RegExp(
          decodeURI(node.pattern),
          Object.keys(node.flags)
            .filter(flag => node.flags[flag])
            .join("")
        ),
        node.replace
      ))
  );

  return output;
};

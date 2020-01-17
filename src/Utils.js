export const prepareOutput = (input, regexNodes) => {
  let output = input;

  const nodes = regexNodes.filter(node => node.active);

  nodes.forEach(node => {
    try {
      output = output.replace(RegExp(decodeURI(node.pattern), flattenFlags(node.flags)), node.replace);
    } catch (error) {
      //simply ignore because we don't want to catch Regex related Syntax errors
      console.log(error);
    }
  });

  return output;
};

const flattenFlags = flags =>
  Object.keys(flags)
    .filter(flag => flags[flag])
    .join("");

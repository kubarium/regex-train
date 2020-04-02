export const prepareOutput = (input, regexNodes) => {
  let output = input;

  const nodes = regexNodes.filter(node => node.active);

  nodes.forEach(node => {
    try {
      var searchValue = RegExp(decodeURI(node.pattern), flattenFlags(node.flags));
      var replaceValue = decodeURI(node.replace).replace(/\\t/g, "\t").replace(/\\n/g, "\n").replace(/\\r/g, "\r");
      output = output.replace(searchValue, replaceValue);
    } catch (error) {
      //simply ignore because we don't want to catch Regex related Syntax errors
    }
  });

  return output;
};

const flattenFlags = flags =>
  Object.keys(flags)
    .filter(flag => flags[flag])
    .join("");

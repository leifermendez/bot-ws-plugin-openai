const cleanText = (inputText) => {
  // return inputText.replaceAll('\n', ' ').replaceAll('\r\n',' ')
  // return inputText.replaceAll('\n', ' ')
  return inputText.replace('"', "");
};

/**
 *
 * @param {*} text
 * @returns
 */
const determineAgent = (text) => {
  text = text.replaceAll("\n", " ");

  const match = /^\w+:(.)/.exec(text);
  const employee = match[0].trim().replaceAll(":", "");

  if (!match) {
    throw new Error(`Could not parse LLM output: ${text}`);
  }

  try {
    return {
      tool: employee,
      log: cleanText(text),
    };
  } catch (e) {
    return {
      tool: null,
      error: e.message,
    };
  }
};

/**
 *
 * @param {*} agentName
 * @param {*} agentsList
 * @returns
 */
const getAgent = (agentName, agentsList) => {
  const indexAgent = agentsList.findIndex((agent) => agent.name === agentName);
  return agentsList[indexAgent];
};

module.exports = { determineAgent, getAgent };

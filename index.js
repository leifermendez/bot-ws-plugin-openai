const PluginEmployeesClass = require("./src/plugin.employees");

/**
 *
 * @param  {Object}  settings
 * @param  {String}  settings.model    model gpt-3.5-turbo, text-davinci-003
 * @param  {Array}   settings.temperature  0
 * @param  {Integer} settings.apiKey     your api key opena
 * @returns
 */
const init = (settings = {}) => {
  return new PluginEmployeesClass(settings);
};

module.exports = { init };

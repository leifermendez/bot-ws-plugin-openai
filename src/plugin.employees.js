const OpenAiClass = require("./openai.class");
const { determineAgent } = require("./determine");
const { buildPromptEmployee } = require("./employee.rol");

class EmployeesClass extends OpenAiClass {
  listEmployees = [];

  constructor(_settings) {
    super(_settings);
  }

  /**
   *
   * @param {*} employees [] array
   */
  employees = (employees = []) => {
    this.listEmployees = employees;
  };

  /**
   *
   * @param {*} employeeName
   * @returns
   */
  getAgent = (employeeName) => {
    const indexEmployee = this.listEmployees.findIndex(
      (emp) => emp.name === employeeName
    );
    return this.listEmployees[indexEmployee];
  };

  /**
   *
   */
  determine = async (text) => {
    try {

      const messages = [
        {
          role: "system",
          content: buildPromptEmployee(this.listEmployees),
        },
        {
          role: "user",
          content: text,
        },
      ]


      const llmDetermineEmployee = await this.sendChat(messages);

      if(llmDetermineEmployee?.error){
        throw new Error(llmDetermineEmployee?.error?.message)
      }

      const bestChoise = determineAgent(
        llmDetermineEmployee.choices[0].message.content
      );
      const employee = this.getAgent(bestChoise.tool);
      return employee;

    } catch (err) {
      return `ERROR_DETERMINANDO_EMPELADO`;
    }
  };

  /**
   * @param {*} employee 
   * @param {*} ctxFn 
   */
  gotoFlow = (employee, ctxFn) => {
    const flow = employee.flow
    ctxFn.gotoFlow(flow)
  }
}

module.exports = EmployeesClass;

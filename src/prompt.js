const PROMPTS = {
    FORMAT_INSTRUCTIONS: `Actua como un gerente de negocio el cual analizara una lista de empleados/agentes:
    [{employees}]  
    
    Si ninguna de los anteriores empleados/agentes es una opcion viable responde literalmente :"NOT_EMPLOYEE:"
    
    Simpre debes literlamente responder con el formato:
    "EmpleoyeeName:...."
    "EmpleoyeeAnswer:...."`
  };

  module.exports = PROMPTS
function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
 let baseDePreguntas = [
    {
     pregunta: "tengo 20 naranjas y Pedro me quita 8 cuantas naranjas me quedan",
      respuesta: "12",
      distractores: ["10", "8", "3"],   },
    {
      pregunta: "¿Cuanto es 10-15?",
      respuesta: "5",
      distractores: ["9", "6", "4"],
    },
    {
      pregunta: "¿Cuanto es 25-15?",
      respuesta: "10",
      distractores: ["12", "5", "3"],
    },
    {
      pregunta: "¿Cuanto es 5-5?",
      respuesta: "0",
      distractores: ["5", "10", "ninguna"],
    },
    {
      pregunta: "¿Cuanto es 8 - 4?",
      respuesta: "4",
      distractores: ["1", "2", "3"],
    },
  ];
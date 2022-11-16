function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
 let baseDePreguntas = [
    {
     pregunta: "Multiplica 8x8",
      respuesta: "64",
      distractores: ["24", "18", "15"],   },
    {
      pregunta: "¿Cuanto es 10x5?",
      respuesta: "50",
      distractores: ["100", "10", "5"],
    },
    {
      pregunta: "¿Cuanto es 2x2?",
      respuesta: "4",
      distractores: ["2", "1", "3"],
    },
    {
      pregunta: "¿Cuanto es 5x5?",
      respuesta: "20",
      distractores: ["25", "9", "5"],
    },
    {
      pregunta: "¿Cuanto es 9x9?",
      respuesta: "81",
      distractores: ["40", "90", "99"],
    },
  ];
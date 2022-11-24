function LaTeX(code) {
   return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
 }
 
 function opnLaTeX(code) {
   return `<img src="${LaTeX(code)}" style="height:40px">`;
 }
let baseDePreguntas = [
   {
    pregunta: "Si Paco tiene 4 manzana y Pedro le da 2, cuantas manzanas tiene Paco",
     respuesta: "6",
     distractores: ["8", "2", "4"],   },
   {
     pregunta: "¿Cuanto es 10+5?",
     respuesta: "15",
     distractores: ["9", "5", "4"],
   },
   {
     pregunta: "¿Cuanto es 2+2?",
     respuesta: "4",
     distractores: ["2", "1", "3"],
   },
   {
     pregunta: "¿Cuanto es 5+5?",
     respuesta: "10",
     distractores: ["25", "9", "5"],
   },
   {
    pregunta: "Tengo 5 patos, y se unieron 6 a la manada, cuantos patos tengo ahora ",
    respuesta: "11",
    distractores: ["20", "8", "dos conejos"],
   },
 ];
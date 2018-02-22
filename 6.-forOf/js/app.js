                            // ES5

// declara la variable
/*var array = [10, 20, 30, 20, 30, 40, 60];
var sum = 0;
// escribe tu funcion
function computeSumOfAllElements (elements){
  for(var i = 0; i < elements.length; i++){
    sum += elements[i];
  }
  var prom = sum / elements.length;
  console.log(prom);
}

computeSumOfAllElements(array);
*/



const array = [10, 20, 30, 20, 30, 40, 60];
let sum = 0;
const computeSumOfAllElements = elements =>{
  for(let value of array){
    sum += value;
  }
  let prom = sum /elements.length;
  return `El promedio de este arreglo es: ${prom}`;
}
console.log(computeSumOfAllElements(array));












                              //ES6
// Comenta todo lo anterior y escribelo en ES6


// declara la variable


// escribe tu funcion

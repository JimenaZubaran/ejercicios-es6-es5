// En este ejercicio deberas crear tu solción en ES5, asegurarte que funcione

// declara el prompt
 /*var password = "laboratoria";
function user (string) {
// escribe tu código aqui...
  var passwordQuestion = prompt("¿Cuál es tu contraseña?");
    if(passwordQuestion === "laboratoria"){
      console.log("verdadero");
    } else if (passwordQuestion !== "laboratoria") {
      console.log("falso");
    }else{
      console.log(falso);
    }
}


user();
*/


// comenta todo lo anterior y escribelo en ES6

const password = "laboratoria";
const user = string => { //function expression
  const passwordQuestion = prompt("¿Cuál es tu contraseña?");
  if(passwordQuestion === "laboratoria"){
    console.log("verdadero");
  } else if (passwordQuestion !== "laboratoria") {
    console.log("falso");
  }else{
    console.log(falso);
  }
}
user();
// user () => {

// }

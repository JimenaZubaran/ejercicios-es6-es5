// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

                                // ES5

// declara las variables ES5

/*var array = [2, 4, 6];
//var array = [-3, 2, -8, 12, 5];
//var array = [1, 2, 3, 4, 5];


// declaración de la funcion

function square (element) {
  var even = array.map(function(item){
    if(item > 0){
      return item * item
    }else{
      return item
    }
  })
return even;
  // escribe tu código aqui...
};

console.log(square(array));*/



// escribe tu código aqui...

//console.log(even);


                      //  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6
const numbers = [2, 4, 6];
const  numbersOne= [-3, 2, -8, 12, 5];
const numbersTwo = [1, 2, 3, 4, 5];

const square = array => {
  return  array.map(item => {
    if(item > 0){
      return item * item
    } else {
       return item;
    }
  });
}
console.log(square(numbers));
console.log(square(numbersOne));
console.log(square(numbersTwo));




// declara variables (let-const)


// declara la funcion y ejecuta el código









// ejecuta la funcion

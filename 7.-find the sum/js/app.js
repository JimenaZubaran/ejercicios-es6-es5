                // ES5


// Escribe tu código aquí....


/*var pair = [ ];
function findPairForSum(array, num){
  for (var i = 0; i < array.length; i++){
    for (var j = 0; j < array.length; j++){
      if (array[i] + array[j] === num){
        pair.push(array[i]);
        pair.push(array[j]);
        return pair;
      }
    }
  }
}
findPairForSum([3, 34, 4, 12, 5, 2], 9)
console.log(pair);*/

                    // ES6

// Ahora comenta todo el código anterior y pasalo a ES6
let pair = [ ];
const findPairForSum = (array, num) =>{
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
      if(array[i] + array[j] === num){
        pair.push(array[i]);
        pair.push(array[j]);
        return pair;
      }
    }
  }
}
findPairForSum([3, 34, 4, 12, 5, 2], 9)
console.log(pair);

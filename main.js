//дз основные 1
function factorialIterative(n) {
    if(n === 0) {
        return 1;
        } else {
            return n * factorialIterative(n - 1);
        }     
    }
    
    const number = 5;
    const factorial = factorialIterative(number);
    console.log(`Факториал ${number} равен ${factorial}`);
    
// // 2
const text = "My name 457 is Alex" 
const  wsithoutNomber = text.match(/\D/g);
if ( wsithoutNomber) {
    console.log( wsithoutNomber.join(''));
  } ;

3

const text2 = "Hello\tWorld\nTest";

const spaces = text2.match(/\s/g);
if (spaces) {
  console.log(spaces);
} ;

// доп
function countChar(array, charToCount) {
    let count = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === charToCount) {
        count++;
      }
    }

    return count;
  }
  
  //
  const myArray = `loremipsumdolor`;
  const charToCount = 'o';
  const result = countChar(myArray, charToCount);
  console.log("Количество символов '" + charToCount + "' в массиве: " + result);

//Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

console.log("Hello World");

//function addTwonumber(number1,number2){
  //  console.log(number1+ number2)  
 // }
  // const result =addTwonumber(2,3)
//console.log("Result",result)
console.log("Hello World");

function addTwonumber(number1, number2) {
  //let result = number1 + number2;
  return number1+number2
  //return result;
}

const result = addTwonumber(2, 3);
console.log("Result", result);
   
function loginUserMessage(username = "Subham") {
  if (username === undefined) {
    console.log("Please Enter a Username");
  } else {
    return `${username} just logged in`;
  }
}

console.log(loginUserMessage("Saurabh"));

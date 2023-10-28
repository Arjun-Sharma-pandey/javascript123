const user={
  username:"Arjun Sharma",
  price:999,
  welcomeMessage:function(){
    console.log(`${this.username}, Welcome to Website`);
  }

}
user.welcomeMessage();
user.username="Sammy"
user.welcomeMessage()
user.welcomeMessage()
//console.log(this); 
//function chai() {
 // let chai_coffee = "chai_coffee";
//  console.log(this.chai_coffee);
//}

//chai();
///let chai=function () {
//let chai_coffee = "chai_coffee";
//console.log(this.chai_coffee);
//}  Arrow Function
let chai= ()=> {
let chai_coffee = "chai_coffee";   // replace function with arrow
console.log(this.chai_coffee);
}
const addTwoNumber=(num1,num2)=>{
  return num1+num2;
}
console.log(addTwoNumber(2,3));
const addTwo=(num1,num2)=>({username:"ArjunSharma"})
console.log(addTwo(5,7));
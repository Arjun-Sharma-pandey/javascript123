// array The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

const myarray=[1,2,3,4,5,]
console.log(myarray[0]);
const myhero=["Shaktiman", "Superman","Spiderman", "Ironman"]
console.log(myhero[1]); // access the element 

//array methods
myarray.push(6) // push the element in 6th index

myarray.pop() // Remove last element
myarray.unshift(9)  //shift in first element
myarray.shift() // No argument is pass
console.log(myarray);
console.log(myarray.includes(9)); // array questionares like include, entries, concat findindexof 
console.log(myarray.indexOf(4));

// important points  join new array it changes into type string
const newarray=myarray.join() 
console.log(newarray);                       
// slice & splice
console.log("A", myarray);
const myn1=myarr.slices(1,3) 
console.log(myn1);
console.log("B", myarray);
 
// Splice 
 const myn2=myarray.splice(1,3);
 console.log(myn2);
 
 // Arrays part-02
const marvel_heroes=["thor","Ironman","superman"]  
const dc_heroes=["Superman","Flash","batman"] 
 marvel_heroes.push(dc_heroes)
 console.log(marvel_heroes);
 //C:\Users\churamoni\Desktop
 const obj ={
    name : "Arjun",
    Adress: " devdaha 07, Rupandehi",
  }
obj()

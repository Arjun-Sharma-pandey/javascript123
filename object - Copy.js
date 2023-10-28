// object declaration
// singleton (constructor) => object.create
// object literals
// const jsuser = {} // Empty Object
const jsuser = {
  name: "Arjun Sharma",
  location: "Nepal",
  skills: ["Html", "Css", "Javascript"],
};
console.log(jsuser["name"]);
console.log(jsuser.skills);
jsuser.name = "Bishal Sharma";

// Adding Function in Object in JavaScript
jsuser.greeting = function () {
  console.log("Hello JS USER");
};
console.log(jsuser.greeting());

jsuser.greetingTwo = function () {
  console.log(`Hello JS USER, ${this.name}`);
};
console.log(jsuser.greetingTwo());

// Create a new object for tinderUser
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy Kharel";
console.log(tinderUser);

// Object of Object
const user = {
  email: "arjun@gmail.com",
  phone: "981034567",
  username: {
    userFullname: {
      firstName: "Arjun",
      lastName: "Sharma",
    },
  },
};
console.log(user.username);
console.log(user.username.userFullname.firstName);
// combining Objects
const user1={
  arjun:"123",
  bishal:"456",
  sammy:"789"
}
const user2={
  deepak:"1111",
ajay:"2222"}
//const user3={user1,user2}
//const user3={...user1,...user2} (90% we used this one as it is latest and simple)
const user3=Object.assign({},user1,user2)
console.log(user3);
// Object Destructuring and API
const course = {
  courseName: "Javascript",
  price: "999",
  courseInstructor: "Hitesh Chaudhury",
};

// Destructuring the courseInstructor property
const { courseInstructor:instructor } = course;//course=>from where and courseInstructor=>where to modify or store : assign new value instructor 

console.log(instructor); // Corrected variable name
//API=>“What is an API?” API is the acronym for application programming interface — a software intermediary that allows two applications to talk to each other. APIs are an accessible way to extract and share data within and across organizations.
// data come from database in Json format=>javascript object Notation
// OBJECTS

// Declaring an object
var car = {};

//assigning properties
car.health = 100;
car.type = "Sedan";
car.model = "Phantom";
car.maker = "Rolls-Royce";
car.cost = 70000000;

// checking the value
console.log(car);

// Alternate Method
var bike = {maker:"Yamaha",health:100};
bike["cost"] = 800000;

// checking the value
console.log(bike);

// To acess a particular property of the object we do not use index but rather use the key value to access it. for eg if i want to access the maker of the object bike i can access it using these ways given below

console.log(bike.maker);
console.log(bike["maker"]);
bike.turnkey = function() {
    console.log('Running')
}
// FUNCTION AS A PROPERTY OF AN OBJECT IS KNOWN AS METHOD
console.log(bike);
bike.turnkey();
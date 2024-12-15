// Declaring an Array
var arr = [];
// Initializing an Array
arr = ["Apple","Banana","Mango"];
console.log(typeof(arr));
// Accessing elements with the help of index
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
// Arrays are objects too
arr.push("Pineapple");
console.log(arr);
arr.pop(); // removes the element last added
console.log(arr);

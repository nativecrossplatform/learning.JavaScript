// Array of characters but array methods, not all of them apply on strings
var names = ["John","James","Joesph"];
for(var i =0;i<names.length;i++)
{
    for(var j=0;j<names[i].length;j++)
    {
        console.log(names[i][j]);
    }
}
names[0] = names[0].concat(" Smith");
console.log(names[0]);
/*
More Methods:
charAt() 

concat() 

indexOf() 

lastIndexOf() 

split() 

toUpperCase() 

toLowerCase()  
*/
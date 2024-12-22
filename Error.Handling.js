// TRY AND CATCH
/*
try{
    console.log(c+d);
    console.log("YAY");
}
catch(error)
{
    console.log("NAY"+" "+error);
}
*/
// YOU CAN ALSO THROW AN ERROR ON PURPOSE
var name = 'JASH1';
try{
    if(name!='JASH')
    {
        throw new ReferenceError();
    }
}
catch(error)
{
    console.log(error);
}
/*
class CustomError extends Error {
    constructor(message) {
        super(message); // Pass the message to the parent Error class
        this.name = "CustomError"; // Set a custom name
    }
}

throw new CustomError("This is a custom error!");
example of throwing custom error
*/
/*
throwing error with arbitary values
throw "This is a string error!";
throw { code: 404, message: "Not Found" };
throw 42;
*/
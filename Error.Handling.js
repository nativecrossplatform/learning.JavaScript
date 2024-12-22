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
// IF STATEMENT
/*
if(condition == true)
{
        EXECUTE
}
*/
var jash = 1;
if(jash == 1)
{
    console.log("Yes");
}
// IF ELSE STATEMENT
/*
if(condition==true)
{
    EXCUTE THIS
}
else
{
    EXECUTE THIS
}
*/
if(jash >= 1)
{
    console.log('Yes');
}
else
{
    console.log('No');
}
// ELSE IF STATEMENT
/*
if(condition==true)
{
    EXCUTE THIS
}
else if(condition2 == true)
{
    EXECUTE THIS
}
else
{
    EXECUTE THIS
}
*/
jash = -1;
if(jash >= 1)
    {
        console.log('Yes');
    }
else if(jash == -1)
    {
        console.log("Good");
    }
else
    {
        console.log('No');
    }
// THERE CAN BE MULTIPLE ELSE IF STATEMENTS
// SWITCH STATEMENTS
/*
switch(test)
{
    case test-value-1:
        EXECUTE;
        break;
    case test-value-1:
        EXECUTE;
        break;
    // SO ON AND SO FORTH
    default:
        EXECUTE;
        break;  
}
*/
jash = 0;
switch(jash)
{
    case 1:
        console.log('Mumbai');
    case -1:
        console.log('Udaipur');
    default:
        console.log('Melbourne');
}
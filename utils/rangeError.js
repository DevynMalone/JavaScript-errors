function checkNumber(n)
{
    if( !(n >= -500 && n <= 500) )
    {
        throw new RangeError("The argument must be between -500 and 500.")
    }
}

try
{
    checkNumber(2000)
}
catch(error)
{
    if (error instanceof RangeError)
    {
        // Handle the error
    }
}
 module.exports={
     checkNumber
 }
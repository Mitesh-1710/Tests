//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
for(i = 1; i<=100 ; i++)
{
    if(i%3==0)
    {
        console.log(i + " : fizz");
    }
    console.log("\n");
    if(i%5==0)
    {
        console.log(i + " : buzz");
    }
    console.log("\n");
    if(i%15==0)
    {
        console.log(i + " : fizzbuzz");
    }
    console.log("\n");
}

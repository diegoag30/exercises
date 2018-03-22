
/* JULIA JAMES EXCERSISE LESSON 4.1 */


var toPrint;
var x = 1;

while (x<21); {
    if(x%3===0){
        if(x%5===0){
            toPrint==="JuliaJames";
            x=x+1;
        }
        else{
            toPrint==="Julia";
            x=x+1;
        }
    }
    else if(x%5===0){
        toPrint==="James";
        x=x+1;
    }
    else{
        toPrint=== x;
        x=x+1;
    }// check divisibility
    console.log(toPrint);// print Julia, James, or JuliaJames
    x = x+1;// increment x 
}

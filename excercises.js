
/* JULIA JAMES EXCERSISE LESSON 4.1 */


var toPrint;
var x = 1;

while (x<21) {
    toPrint = (x%3===0) ? ((x%5===0) ? "JuliaJames": "Julia"):((x%5===0) ? "James" : x ); 
    console.log(toPrint);// print Julia, James, or JuliaJames
    x = x+1;// increment x 
}

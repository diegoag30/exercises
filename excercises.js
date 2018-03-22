
/* JULIA JAMES EXCERSISE LESSON 4.1 */


var toPrint;
var x = 1;

while (x<21) {
    toPrint = (x%3===0) ? ((x%5===0) ? "JuliaJames": "Julia"):((x%5===0) ? "James" : x ); 
    console.log(toPrint);// print Julia, James, or JuliaJames
    x = x+1;// increment x 
}

/* Song Excercise 5 */

var num = 99;
var bottle;
var song;

while (num >=0) {
    bottle = (num !=1 ?" bottles": " bottle");
    song = num + bottle + " of juice on the wall! " + num + bottle +
    "  of juice! Take one down, pass it around " + num + bottle +"  of juice on the wall!"; // check value of num
    console.log(song);// print lyrics using num
    num = num-1;// decrement num
}

/* Exercise lesson 11 */

for (var x = 9; x >=1; x = x-1){
	console.log("hello " + x);
}

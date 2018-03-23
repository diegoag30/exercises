
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

/* Exercise lesson 14 */
var solution = 1;

for(var x = 12; x > 0; x = x-1) {
	solution = solution *x;
}
console.log(solution);

/* Exercise lesson 14 */

for (var row = 0; row < 26; row++){
	for (var seat = 0; seat < 100; seat++) {
		console.log(row+ "-" + seat)
		
	}
}

/* Exercise lesson 5.6 */

veces ="";

function laugh(num){
	for (var numero = num;numero > 0; numero= numero -1) {
		veces = veces + "ha";
	}
	(num>0)? veces = veces +"!":veces ;
	return veces;
}

console.log(laugh(3));

/* Exercise lesson 5.16 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(num){
	var line = "";
	for (var x = 1; x<= num; x++) {
		line += makeLine(x);
	}
	return line
}


// Complete function padIt, which accepts 2 parameters:

// str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// n: a number indicating how many times to pad the string.
// Behaviour
// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

// Finally, return the padded string.

// failed attempt, i suck at loops
function padIt(str, n) {
	let stars = 0;
	while (stars <= n) {
		stars = stars + n;
	}
}

//p- a string and an int 1+
//r-return padded string
//e-("a",1),"*a");
// ("a",2),"*a*");
// ("a",3),"**a*");
// ("a",4),"**a**");

function padIt(str, n) {
	while (n > 0) {
		if (n % 2 === 0) {
			str = str + "*";
		} else {
			str = "*" + str;
		}
		n--;
	}
	return str;
}

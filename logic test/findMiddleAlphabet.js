/*

Given variable string contains of all alphabet from A to Z
”ABCDEFGHIJKLMNOPQRSTUVWXYZ”

Build first function that receive two paramters: first letter and last letter.
That will do to find middle letter between of the specified letter.
Example: 

- The middle between Q and U is **S**
- The middle between R and U is **ST**
- The middle between T and Z is **W**
- The middle between Q and Z is **UV**

*/



let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function middleAlphabet(first, last) {
	let first1 = alphabets.indexOf(first);
	let last1 = alphabets.indexOf(last);
	let mid = (first1 + last1) / 2;
	let position = 0;

	if (mid % 2 == 0.5) {
		position = 2;
	} else {
		position = 1;
	}

	let middle_alfabet = alphabets.substring(mid, mid + position);

	console.log( middle_alfabet);
}

middleAlphabet('Q', 'U');
middleAlphabet('R', 'U');
middleAlphabet('T', 'Z');
middleAlphabet('Q', 'Z');



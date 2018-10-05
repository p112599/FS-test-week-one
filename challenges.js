/*------------------
1)
Create a function that takes a grid
as an argument and adds all the numbers
in that grid together.

Examples:
const y = [[[1], [2]]];
console.log(addGridItems(y)); // 3

const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
console.log(addGridItems(x)); // 50
------------------*/

function addGridItems(grid) {

}

/*------------------
2)
Create a function that turns a string into a
file name: all letters are lowercase, spaces are
swapped for underscores, and it includes a
file extension. 

This function should take two parameters: the string, 
and the type of file it is (so you know what file
extension to add). You only need to cover
the extensions below:
- PDF: .pdf
- image: .png
- JSON: .json

Examples:
console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"
------------------*/

function createFileName() {

}

/*------------------
3)
Write a function that determines
if a number is a palindrome. A number is a
palindrome if it reads the same forwards and
backwards. 

Note:
- All negative numbers should return false.
- Single numbers should return true.

Test cases:
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(-12321)); // false
console.log(isPalindrome(1)); // true
console.log(isPalindrome(84146)); // false
console.log(isPalindrome(12)); // false
------------------*/

function isPalindrome(num) {

}

/*------------------
4)
Write a function that generates a chessboard.
This function should take one parameter,
a number representing the size of the chessboard.
The result will be a single string that prints
on multiple lines (see below).

Test case:
console.log(createBoard(8));

This should print an 8 x 8 board.
Notice how the spaces and hashes
alternate each row.

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

Hints:
- Use a loop within a loop.
- "\n" gives you a new line in a string
------------------*/



/*------------------
5)
You are given a string that contains the
characters "(", ")", "{", "}", "[" and "]".

Write a function that returns true or false
if the input string is valid.

An input string is valid if:
- Open brackets are closed by the same type of brackets.
- Open brackets are closed in the correct order.

Note:
- An empty string should return true.

Test cases:
console.log(validParens("")); // true
console.log(validParens("[]")); // true
console.log(validParens("[](){}")); // true
console.log(validParens("({)}")); // false
console.log(validParens("{[]}")); // true
console.log(validParens("](")); // false
------------------*/

function validParens(str) {
  const parenPairs = {
    "[": "]",
    "(": ")",
    "{": "}"
  }

  // your code here
}

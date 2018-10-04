/*------------------
1)
Write a function that determines
if a number is a palindrome. A number is a
palindrome if it reads the same forwards and
backwards. 

Note:
- All negative numbers should return false.
- Single numbers should return true.

Examples:
isPalindrome(12321); // true
isPalindrome(-12321); // false
isPalindrome(1); // true
isPalindrome(84146); // false
isPalindrome(12); // false
------------------*/

function isPalindrome(num) {

}

/*------------------
2)
Create a function that takes a grid
as an argument and adds all the numbers
in that grid together.

Examples:
const y = [[[1], [2]]];
addGridItems(y); // 3

const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
addGridItems(x); // 50
------------------*/

function addGridItems(grid) {

}

/*------------------
3)
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
createFileName("Sofia Engineering Resume", "PDF"); // "sofia_engineering_resume.pdf"
createFileName("Sofia Profile Photo", "image"); // "sofia_profile_photo.png"
createFileName("Data from Pokemon API", "JSON"); // "data_from_pokemon_api.json"
------------------*/

function createFileName() {

}


/*------------------
4)
Write a function that generates a chessboard.
This function should take one parameter,
a number representing the size of the chessboard.

Example: createBoard(8) should print an 8 x 8 board/
Notice how the spaces and hashes alternate each row.

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

Hint: to accomplish this, use a loop within a loop.
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

Examples:
validParens(""); // true
validParens("[]"); // true
validParens("[](){}"); // true
validParens("({)}"); // false
validParens("{[]}"); // true
validParens("]("); // false
------------------*/

function validParens(str) {
  const parenPairs = {
    "[": "]",
    "(": ")",
    "{": "}"
  }

  // your code here
}

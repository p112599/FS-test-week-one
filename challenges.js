/*------------------
1) done 
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

function isPalindrome(num){
    let number = 1;
    while (num/ number > 10){
        number *=10;
    }
    while (num){
        let first= Math.floor(num/number);
        let last = num % 10;
        if (first != last){
            return false;
        }
    num = Math.floor((num % number) / 10);
    number = number / 100;
    }
    return true;
}

console.log(isPalindrome(12321)); // true
console.log(isPalindrome(-12321)); // false
console.log(isPalindrome(1)); // true
console.log(isPalindrome(84146)); // false
console.log(isPalindrome(12)); // false


/*------------------
2)
Create a function that takes a grid
as an argument and adds all the numbers
in that grid together.
// Examples:
// const y = [[[1], [2]]];
// console.log(addGridItems(y)); // 3
// const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
// console.log(addGridItems(x)); // 50
// ------------------*/

// function addGridItems(grid) {
//     let currentSum = grid;



// function addGridItems(grid) {
//     let sum=0;
//     for (let number of grid){
//         sum+= number;
//     }
//     return sum
// }


// const y = [[[1], [2]]];
// console.log(addGridItems(y)); // 3
// const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
// console.log(addGridItems(x)); // 50



// let sum= "";
// function addGridItems(grid) {
//     for(let i = 0; i< grid.length; i++){
//         for(let j=0; j<grid[i].length; j++){
//             for(let k=0; k<grid[i][j].length; k++){
//                 return sum =+ grid[i][j][k]; 
//             }
//         }
//     }

// }



// console.log(addGridItems(y)); // 3
// console.log(addGridItems(x)); // 50

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
console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"
------------------*/

// function createFileName() {
//     const string1="Sofia Engineering Resume";
//     const string2= "Sofia Profile Photo"
//     const string3= "Data from Pokemon API"
// }


// console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
// console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
// console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"

/*------------------
4) Print the following pattern
99 96 93 90 88
99 96 93 90
99 96 93
99 96
99
Hints:
- Use a loop within a loop.
------------------*/
// let grid = [
//     [99,96,93,90,88],
//     [99,96,93,90],
//     [99,96,93],
//     [99,96],
//     [99],
// ];

// console.log(grid)

// for (var i = 5; i >= 1; i--) {
//     var str = "";
//     for (var j = i; j <= 5; j++) {
//     str += "99";
//        }
//    console.log(str);
//   }


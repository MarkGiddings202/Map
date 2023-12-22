/*
    1. Create an array called "numbers" with the following values:
         0  1   2   3   4   5   6    7  8
       [10, 20, 15, 30, 15, 20, 35, 60, 10]

       10 was found at index 0, 10's dup was found at index 8
       20 

    2. Find the first duplicate value in "numbers" and print
       out the INDEX of that value as well as the INDEX
       of where it was first found in "numbers"

    3. In this case, we will print:
       4 2

       (4 is where the duplicate index was)
       (2 is where the first pair of that duplicate was, as an index)

    HINT: Use a Map to keep track of number->index pairs

    *This is very challenging and is a common interview question
*/

let numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

let duplicate = new Map();


// Can iterate over arrays and use Map() as you iterate through some values.
for (let i = 0; i < numbers.length; i++) {
  // Checks if the element is in the Map, if it is we can log out the index we're on as well as the duplicate we've found
  if (duplicate.has(numbers[i])) {
    // logs out the index & duplicate when because it HAS the duplicate.
    console.log(i, numbers[i]);
  } else {
    // else we add it to the Map()
    duplicate.set(numbers[i], i);
  }
}
console.log(duplicate);

/*
This problem left me with this understanding of broader thinking, identifying what the problem is Literally asking of me slowly.
There was definietly a lot of bouncing around in my head.

*/
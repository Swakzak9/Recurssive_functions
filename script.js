//Using Age to determine the price for cinema viewer

let userAge = 16;
if (userAge > 0 && userAge < 13) {
  console.log("$10");
} else if (userAge >= 13 && userAge <= 17) {
  console.log("$15");
} else {
  console.log("$20");
}

//temperature to check
let temperature = 35;

if (temperature < 0 && temperature <= 20) {
  console.log(
    "It's Winter, the temperature is freezing. Ensure that when you come out wear very thick clothing"
  );
} else if (temperature > 20 && temperature <= 29) {
  console.log(
    "It's Autumn, the temperature is cool. Ensure that when you come wear out semi-thick clothing"
  );
} else if (temperature > 29 && temperature <= 32) {
  console.log(
    "It's Spring, the temperature is lukewarm. Ensure that when you come out wear semi-thick clothing"
  );
} else {
  console.log(
    "It's Summer, the temperature is very hot. Ensure that when you come out wearing very thin clothing"
  );
}

//Implement a recursive function to generate the nth Fibonacci number.
//  The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//Create a recursive function to check if a  string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Base case: if the string has 0 or 1 character, it's a palindrome
  if (str.length <= 1) {
    return true;
  }

  // Check if the first and last characters are equal
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  // Recursively check the substring excluding the first and last characters
  return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("Hello World"));

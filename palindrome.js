
var word = "race car";

word_no_spaces = word.replace(" ", "");
word_rev = word_no_spaces.split("").reverse().join("");

if (word_rev === word_no_spaces) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is not a palindrome");
}


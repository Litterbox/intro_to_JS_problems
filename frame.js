
var phrase = "Hello and welcome to javascript";

var phrase_arr = phrase.split(" ");

var max_len = phrase_arr[0].length;
for (var i = 0; i < phrase_arr.length; i++) {
  if (phrase_arr[i].length > max_len) {
    max_len = phrase_arr[i].length
  }
}


// The top and bottom need 4 additional '*' to account
// for the side border and the white space characters
var buffer = 4;

// The boarder's size is max_length of the word, plus the buffer.
// We also need to add 1 in order for the join trick to work.
var top_bottom_border = Array(max_len + buffer + 1).join('*');

console.log(top_bottom_border);

for (var i = 0; i < phrase_arr.length; i++) {
  var num_spaces = max_len - phrase_arr[i].length;
  var spaces = Array(num_spaces + 1).join(" ");
  console.log("* " + phrase_arr[i] + spaces + " *");
}

console.log(top_bottom_border);

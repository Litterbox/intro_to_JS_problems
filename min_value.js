var arr = [99,3.5,8,22.8,0,-21,10,1];

var min = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log("The min value in the array is " + min);

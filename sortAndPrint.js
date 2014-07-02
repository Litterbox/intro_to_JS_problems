
var arr = [9,1,3,0,7,5];

var arr_sorted = arr.sort();
var middle = arr.length / 2;

if (arr.length % 2 === 0) {
  console.log(arr[middle - 1] + ',' + arr[middle]);
} else {
  console.log(arr[Math.floor(middle)]);
}


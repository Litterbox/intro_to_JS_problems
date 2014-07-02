var count = 15;

for (var i = 0; i < count; i++) {
  if ((i + 1) % 7 === 0) {
    console.log("Z");
  } else if (i % 2 === 0) {
    console.log("X");
  } else {
    console.log("O");
  }

}


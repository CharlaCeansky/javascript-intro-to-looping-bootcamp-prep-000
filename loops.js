function forLoop(array){
  for (let i=0; i < 25; i++){
    if (i ==1){
      array.push(`I am ${i} strangeloops.`)
    }
  }
  return (array)
}

function whileloop(number){
  while(number > 0){
    console.log(number);
    number--;
  }
  return "done"
}

function doWhileLoop(array){
  function maybeTrue(i) {
    var i=10
    do {
      return console.log(i);
        i--;
  }
    while(maybeTrue(i >= 0.5));
    return (array)
    }
      }
//remove elements from the array until the array is empty or until `maybeTrue()` returns `false`.
//(Your condition might look something like `array.length > 0 && maybeTrue()`.) Finally, return the array.

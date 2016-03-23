function processData(input) {
    input = input.split('\n')
    var length = input[0] - 2;
    input = input[1].split(' ');
    var key = input[input.length - 1 ]
      for(var i = input.length - 2 ; input[i] > key ; i -= 1) {
          input[i+1] = input[i];
          console.log(input.join(" "))
       }
       input[i + 1] = key;
       console.log(input.join(" "));
}

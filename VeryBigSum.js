function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var total = arr.reduce(function(a, b) {return a + b;});
    console.log(total);
}

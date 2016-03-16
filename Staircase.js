function main() {
    var n = parseInt(readLine());
    var space = " ";
    var sCount = n - 1;
    var print = "";

    for (var i = 0; i < n - 1; i++) {
        print += space;
    }

    print += "#";
    console.log(print);

    for (var i = n - 2; i >= 0; i--) {
        print = print.substr(0, i) + "#" + print.substr(i + 1);
        console.log(print);
    }
}

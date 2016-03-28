function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var height = 1

        for (var i = 1; i <= n; i++) {
            i % 2 == 0 ?  height += 1 : height *= 2;
        }
       console.log(height)
    }
}

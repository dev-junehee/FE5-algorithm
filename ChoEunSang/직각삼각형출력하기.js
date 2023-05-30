const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let star = '';
    for(i=1; i <= Number(input[0]); i++) {
        for(j=1; j <= i; j++ ) {
            star+='*'
        }
        star+='\n'
    }
    console.log(star);
});
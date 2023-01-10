var fs=require('fs');
var data=fs.readFileSync('input.txt');
console.log(data.toString());
console.log('end program');

console.log('----------------');

var data_1=fs.readFile('input.txt',function(err,data_2){
console.log(data_2.toString());
});

console.log('end program');
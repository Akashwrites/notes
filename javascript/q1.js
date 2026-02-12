let count=prompt(' enter the number of elements');
let arr=[]
for(let i=0;i< count;i++){
    let val1=prompt('enter the value');
    arr.push( val1);
}

let num='2';
console.log('the final array without the number mentioned is');
for(let j=0;j<arr.length;j++){
    arr.pop(num);
}
console.log(arr);
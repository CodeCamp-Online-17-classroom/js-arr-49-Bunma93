// write code here
let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john,jo,jin];


function getAverageAge(arr) {
    let total = 0;
    for(let age of arr){
        total += age.age;
    }
    return (total/(arr.length)).toFixed(2);
}

console.log(getAverageAge(arr));
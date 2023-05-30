const double = num => 5*2;
const result = double(5);
console.log(result);

const add = (x , y) => x + y;
const result2 = add(30 , 50);
console.log(result2);

const doMath = (x,y) => {
    const sum = x + y;
    const diff = x -y;
    const result = sum * diff;
    return result;
}
const output = doMath(7 ,5);
console.log(output);
const person = { name : 'Ashik', age : 23, address : 'thakurgaon' , phone : '498492492',blood : 'A+', friends : ['abul' , 'kabul','habul']};

const bondhu = ['kala' ,'dhola' ,'manik', 'jadu'];
const [puranf, ...sotof] = bondhu;
// const {phone , age, friends} = person;
// console.log(phone ,age , friends);

console.log(puranf ,sotof);
const complexObj = {
    name :'Ashik',
    info : {
        address : 'tkg',
        phone : '32352525'
    }
}
const {phone} = complexObj.info;
console.log(phone);
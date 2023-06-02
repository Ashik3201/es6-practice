class Parents{
    constructor(){
        this.fatherName = "omuk bin tomuk";
    }
}

class Child extends Parents{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.fatherName + " " + this.name;
    }
}
const baby = new Child('kaga');
console.log(baby.getFullName());
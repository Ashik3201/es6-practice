class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "tgbhs";
    }
}

const student = new Student(12, 'Ashik');
const student2 = new Student(22, "Kaga");
const student3 = new Student(33, "bap[py");
console.log(student , student2, student3);
console.log(student.name , student2.name);
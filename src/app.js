//ES6
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){
        console.log("İsim:" + this.name + "Yaş:" + this.age + "Maaş" + this.salary);

    }

}
const emp=new Employee("Ertan",20,3000);
emp.showInfos();
console.log(emp);
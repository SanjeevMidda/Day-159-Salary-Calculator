// Researched mdn for objects, and object classes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Employee{
    constructor(salary, salesTarget, salesMade, hoursWorked){
        this.salary = salary;
        this.salesTarget = salesTarget;
        this.salesMade = salesMade;
        this.hoursWorked = hoursWorked;
    }
    calculateSalary(){

    }
}

class Salaried extends Employee{
    constructor(salary, salesTarget, salesMade, hoursWorked){
        super(salary, salesTarget, salesMade, hoursWorked);
    }
}

class Hourly extends Employee(){
    constructor(salary, salesTarget, salesMade, hoursWorked){
        super(salary, salesTarget, salesMade, hoursWorked);
    }
}

class Hybrid extends Employee(){
    constructor(salary, salesTarget, salesMade, hoursWorked){
        super(salary, salesTarget, salesMade, hoursWorked);
    }
}

let salariedEmployeeOne = new Employee(1500, 100, 130);
let salariedEmployeeTwo = new Employee(1600, 90, 70);

let hourlyEmployeeOne = new Employee(11, 70, 85, 160);
let hourlyEmployeeTwo = new Employee(12.50, 60, 45, 150);

let hybridyEmployeeOne = new Employee(1650, 110, 135, 5);
let hybridyEmployeeTwo = new Employee(1458, 126, 120, 0);

console.log(salariedEmployeeOne);

/*
    Thinking
        1. 

        salary = basic flat rate, and paid per hour
        salary in the child - create array, and function to iterate over
        The object should do the calculation - you pass in the values from the instance
*/
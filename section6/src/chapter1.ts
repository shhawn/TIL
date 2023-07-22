/** 
 * 타입스크립트의 클래스
 */

class Employee {
  name: string;
  age: number;
  position: string;
  
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log('일함');
  }
}

const employeeA = new Employee('김승환', 30, 'developer');
console.log(employeeA);

// 클래스를 타입으로도 쓸 수 있음
const employeeB: Employee = {
  name: '',
  age: 0,
  position: '',
  work() {}
}

class ExcutiveOfficer extends Employee {
  officeNumber: number;

  constructor (name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

}
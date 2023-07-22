/**
 * 클래스
 */

let studentA = {
  name: '김승환',
  age: 30,
  grade: 'A+',
  sayHi() {
    console.log('Hi!');
  }
}

// 만약 학생 수가 여러 명이라면? 저 객체들을 일일이 다 만들어줘야함 => 귀찮음

class Student {
  // 필드
  name;
  age;
  grade;

  // 생성자
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // 메서드
  sayHi() {
    console.log('Hi');
  }

  introduce() {
    console.log(`My name is ${this.name}`);
  }
}

// 클래스를 이용해서 만든 객체 = 인스턴스
// 스튜던트 인스턴스라고 부름 (Student 클래스를 이용해서 만들었기 때문)
let studentB = new Student('홍길동', 30, 'A+');
console.log(studentB);

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor (name, age, grade, favoriteSkill) {
    super(name, age, grade); // 부모 클래스의 생성자가 호출됨
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`My favorite Skill is ${this.favoriteSkill}`);
  }
}
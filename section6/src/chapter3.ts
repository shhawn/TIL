/** 
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// 인터페이스는 설계도 역할을 한다. 설계도에 맞춰서 구현한다는 뜻.
class Character implements CharacterInterface {
  // name;
  // moveSpeed;

  // 무조건 public만 가능하다.
  constructor (public name: string, public moveSpeed: number) {
    // this.name = name;
    // this.moveSpeed = moveSpeed;
  }

  move() {
    console.log(`My Speed is ${this.moveSpeed}`);
  }
}


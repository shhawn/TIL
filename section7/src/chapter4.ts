/** 
 * 제네릭 클래스
 */

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// 생성자의 인수로 전달하는 값을 기준으로 타입을 추론함.
const numberList: List<number> = new List([1, 2, 3]);
const stringList: List<string> = new List(['1', '2', '3']);
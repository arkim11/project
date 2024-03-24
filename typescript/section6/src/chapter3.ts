/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

class Character implements CharacterInterface {
    //interface로 정의하는 필드들은 무조건 public만 가능, private필드가 필요하면 별도 정의
    constructor(
        public name: string,
        public moveSpeed: number,
        private extra: string
    ) {}

    move(): void {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}

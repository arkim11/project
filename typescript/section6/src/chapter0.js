/**
 * 클래스
 */
let studentA = {
    name: "김아름",
    grade: "C",
    age: 27,
    study() {
        console.log("공부함");
    },
    introduce() {
        console.log("안녕하세요");
    },
};
class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("공부함");
    }

    introduce() {
        console.log(`${this.name}입니다.`);
    }
}

class StudenetDeveloper extends Student {
    //필드
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age); // Student 클래스에서 가져와야함
        this.favoriteSkill = favoriteSkill;
    }

    // 메서드

    progamming() {
        console.log(`${this.favoriteSkill}로 프로그래밍함`);
    }
}

//클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("김아름", "A", 32);
studentB.study();
studentB.introduce();

const studenetDeveloper = new StudenetDeveloper(
    "김아름",
    "A",
    27,
    "TypeScript"
);
console.log(studenetDeveloper);
studenetDeveloper.progamming();

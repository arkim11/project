/**
 * 접근제어자
 * access modifier
 * => public private protected
 * public : 필드의 기본값 (접근해서 수정할 수 있음)
 * private : class 안에서만 접근할 수 있음 (파생 클래스에서도 접근 불가능)
 * proteced : 파생 클래스안에서는 접근 가능
 */

class Employee {
    ////필드
    // private name: string;
    // protected age: number;
    // position: string;

    ////생성자
    // constructor(name: string, age: number, position: string) {
    //     this.name = name;
    //     this.age = age;
    //     this.position = position;
    // }

    //constructor안에서 제어자를 선언해주면 필드나 this를 따로 쓸 필요가 없음
    constructor(
        private name: string,
        protected age: number,
        public position: string
    ) {}

    //메서드
    work() {
        console.log(`${this.name} 일함`);
    }
}

class ExecutiveOfficer extends Employee {
    //필드
    officeNumber: number;

    //생성자
    constructor(
        name: string,
        age: number,
        position: string,
        officeNumber: number
    ) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    // 메서드
    func() {
        this.age;
        //this.name; //private이기때문에 접근 불가능
    }
}

const employee = new Employee("김아름", 27, "개발자");

//employee.name = "홍길동"; //private이기때문에 접근 불가능
//employee.age = 32; //proteced이기때문에 접근 불가능
employee.position = "디자이너";

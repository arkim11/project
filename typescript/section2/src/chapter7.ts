// void : 아무것도 없음을 의미하는 타입
function func1(): string {
    return "hello";
}

function fun2(): void {
    console.log("hello");
    // 함수 타입을 undefined or null로 할 경우 반드시 return을 써줘야 하므로 void 사용
}

// never : 불가능한 타입
function func3(): never {
    while (true) {}
}

function fun4(): never {
    throw new Error();
}

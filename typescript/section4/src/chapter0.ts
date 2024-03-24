/**
 * 함수 타입 정의
 */
function func(a: number, b: number) {
    return a + b;
}

/**
 * 화살표 함수
 */
const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 * 선택적 매개변수는 맨 뒤에 있어야 함
 */
function introduce(name = "김아름", age: number, tall?: number) {
    console.log(`name: ${name}`);
    if (typeof tall === "number") {
        console.log(`tall: ${tall + 10}`);
    }
    //console.log(`tall: ${tall + 10}`); //tall이 undefined일 수도 있어서 연산이 안 됨
}
introduce("보솜", 9, 20);
introduce("보솜", 9);

function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
}
getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);

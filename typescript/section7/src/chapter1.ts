/**
 * 1. 매개변수가 서로 다른 타입일 경우에는 T, U 처럼 다르게 선언
 */
function swap<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 2. 매개변수에 배열이 올 경우 T[]로 선언 (처음에 unknown으로 추론하기 때문에 배열에는 사용할 수 없음)
 */
function returnFirstValue<T>(data: [T, ...unknown[]]) {
    return data[0];
}
let num = returnFirstValue([0, 1, 2]);
let str = returnFirstValue([1, "hello", "mynameis"]);

/**
 * 3.
 */
function getLength<T extends { length: number }>(data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });
let var4 = getLength(10);

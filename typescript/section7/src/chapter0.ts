/**
 * 제네릭
 * value값에 따라 타입이 바뀜
 */

//제네릭 함수
function func<T>(value: T): T {
    return value;
}

let num = func(10);

let bool = func(true);

let str = func("string");

let arr = func([1, 2, 3]);
let arr_tuple = func([1, 2, 3] as [number, number, number]);
let arr_tuple2 = func<[number, number, number]>([1, 2, 3]);

/**
 * map 메서드
 * T : 매개변수는 string, number 등 다양한 타입의 배열이 올 수 있음
 * U : 매개변수에 string이 오더라도 결과값은 number값이 될 수 있어야 하므로 이와 같이 선언
 */
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);

function map<T, U>(arr: T[], callback: (item: T) => U) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

map(arr, (it) => it * 2);
map(["hi", "hello"], (it) => parseInt(it));

/**
 * forEach
 */
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

forEach(arr2, (it) => {
    console.log(it.toFixed());
});

forEach(["123", "456"], (it) => {
    it;
});

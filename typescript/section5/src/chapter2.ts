/**
 * 선언 합침
 */
interface Person {
    name: string;
}
interface Person {
    age: number;
}
const person: Person = {
    name: "",
    age: 27,
};

/**
 * 모듈 보강
 */
// 기존 모듈
interface Lib {
    a: number;
    b: number;
}
// 추가하고 싶은 모듈
interface Lib {
    c: string;
}
const lib = {
    a: 1,
    b: 2,
    c: "hello",
};

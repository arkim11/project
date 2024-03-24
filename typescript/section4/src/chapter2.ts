/**
 * 함수 타입 호환성
 */

// 1.반환값의 타입이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
//b = a; //다운캐스팅이므로 안됨

// 2.매개변수의 타입이 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d; //매개변수는 다운캐스팅만 됨
d = c; //매개변수는 업캐스팅이 안됨

// 2-2. 개수가 다를 떄
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; //매개변수 개수 func1 > func2이므로 됨. 단, 타입이 같아야함
func2 = func1; //매개변수 개수 func2 < func1 이므로 안됨

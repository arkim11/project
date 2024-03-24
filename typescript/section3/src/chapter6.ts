/**
 * 타입 단언
 */
type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "김아름";
person.age = 27;

type Dog = {
    name: string;
    color: string;
};
let dog = {
    name: "보솜",
    color: "white",
    breed: "말티즈",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

//let num3 = 10 as string;

/**
 * const 단언
 */
let num4 = 10 as const;
let cat = {
    name: "야옹",
    color: "yellow",
} as const; //readonly를 붙여줄 필요가 없음

/**
 * Non Null 단언
 */
type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글",
    author: "김아름",
};

const len: number = post.author!.length;

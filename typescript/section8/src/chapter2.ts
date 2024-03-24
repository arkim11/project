/**
 * keyof 연산자
 */

interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: "김아름",
    age: 32,
};
getPropertyKey(person, "name");

/**
 * keyof typeof
 * 위와 같은 결과
 */
type Person2 = typeof person2;

function getPropertyKey2(person: Person2, key: keyof typeof person2) {
    return person2[key];
}

const person2 = {
    name: "김아름",
    age: 32,
};

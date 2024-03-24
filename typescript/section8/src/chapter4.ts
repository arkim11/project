/**
 * 템플릿 리터럴 타입
 */

type Color = "rad" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal: ColoredAnimal = "black-cat";

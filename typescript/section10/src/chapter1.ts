/**
 * Partial<T>
 * 부분적인, 일부분의
 * 특정 객체 타입의 모든 프로퍼티를 -> 선택적 프로퍼티로
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Partial<T> = {
    [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
    title: "제목 임시",
    content: "초안",
};

/**
 * Tequired<T>
 * 특정 객체 타입의 모든 프로퍼티 -> 필수 프로퍼티로
 */

type Required<T> = {
    [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
    title: "제목 임시",
    tags: ["ts"],
    content: "초안",
    thumbnailURL: "http://...",
};

/**
 * Readonly<T>
 */

type Readonly<T> = {
    readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
    title: "보호된 게시글",
    tags: [],
    content: "",
};

//readonlyPost.content = "readonly 변경 불가능";

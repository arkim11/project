/**
 * 인덱스드 엑세스 타입
 */

type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    };
}[];

function printAuthorInfo(author: PostList[number]["author"]) {
    console.log(`${author.name}-${author.id}`);
}

const post: PostList[number] = {
    title: "제목",
    content: "내용",
    author: {
        id: 1,
        name: "김아름",
    },
};

printAuthorInfo(post.author);

type Tup = [number, number, number];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
//type Tup3 = Tup[3]; //4번째는 없으므로 에러
type TupNum = Tup[number];

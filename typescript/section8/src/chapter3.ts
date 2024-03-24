/**
 * 맵드 타입
 * interface에서 사용 불가능하므로 type으로 사용해야함
 */

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
    //[key in "id" | "name" | "age"]: boolean;
    [kek in keyof User]: boolean;
};

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
};

//한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
    return {
        id: 1,
        name: "김아름",
        age: 32,
    };
}

//한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {}

updateUser({
    age: 25,
});

const user = fetchUser();
//user.id = 1; //fetchUser를 readonly 타입으로 선언해서 변경 불가능

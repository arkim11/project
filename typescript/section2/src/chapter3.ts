// object
let user: {
    id?: number; // ? : 선택적 optional 프로퍼티
    name: string;
} = {
    id: 1,
    name: "김아름",
};

let dog: {
    name: string;
    color: string;
} = {
    name: "보솜",
    color: "white",
};

user.id;
dog.name;

let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY",
};

//config.apiKey = "hacked"; //readonly 이기 때문에 변경 불가능

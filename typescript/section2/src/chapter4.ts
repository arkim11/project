// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "김아름",
    nickname: "areum",
    birth: "1993.04.11",
    bio: "하이",
    location: "서울시",
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
};
let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitiedState: "us",
    UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [key: string]: number;
};

let countryNUmberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitiedState: 840,
    UnitedKingdom: 826,
};

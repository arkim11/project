/**
 * Unknown 타입
 */

function unknownExam() {
    //업캐스팅 O
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unkownVar: unknown;

    //다운캐스팅 X
    //let num: number = unkownVar;
    //let str: number = unkownVar;
}

/**
 * Never 타입
 */
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

/**
 * Void 타입
 */
function voidExam() {
    function voidFunc(): void {
        console.log("hi");
    }

    let voideVar: void = undefined;
}

/**
 * any 타입
 */
function anyExam() {
    let unkownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unkownVar;
    undefinedVar = anyVar;
    //neverVar = anyVar;
}

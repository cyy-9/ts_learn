let a1: number;
let a2: string;
let a3: boolean;

// 也可以使用字面量作为类型
let b: 10;
b = 10;     // 正确的
// b = 11;     // 这句会报错，因为值是错误的

// 可以使用 | 连接多个类型 (联合类型)
// c的值可以是 man也可以是 woman
let c: "man" | "woman";
c = "man";
c = "woman";
// c = "men";  // 这句会报错
let d: number | string;
d = 1;
d = "123";

// any类型，表示任意类型
// 只声明变量，不赋值，那么此变量的类型默认为 any
let e: any;
e = 10;
e = "123";

// unknown 表示未知类型的值
let g: unknown;
g = 100;
g = false;
g = "123";  // 都不会报错


let g1: string;
// g1 = g;     // 会报错，因为 g是 unknown类型，g1是 string类型

// 一个 any类型的变量可以赋值给一个任意类型的变量
let f1: any;
f1 = 100;
let f2: string;
f2 = f1;    // 不会报错

// 类型断言。可以用来告诉解析器变量的实际类型
// 断言的两种写法，告诉解析器变量 g是 string类型
g1 = g as string;
g1 = <string>g;

// 当一个函数没有返回值时，这个函数就默认是 void类型
// void类型的变量的值可以是 null或 undefined
function foo(): void {
}
let h: void;
h = undefined;
h = null;

// never类型表示不能是任何值
let i: never;
// i = null;    // 都会报错
// i = undefined;

// object类型
let j: object;
j = {};
// 限制对象的属性
// k中必须有name属性且为字符串属性值
let k: {name: string};
// k = {};  // k中没有string类型的name属性
k = {       // 不报错
    name: '123',
}

// 属性名后面加 ？ 表示可选属性
let l: {name?: string}
// 对象中的任意属性名和属性值
// 表示m对象中属性名是字符串类型，属性值任意类型
let m: {[props: string]: any};
m = {   // 不会报错
    name: '123',
    age: 20,
};

// 数组类型
// 定义一个数字数组
let n: number[];
n = [1, 2, 34];
// 定义一个字符串数组
let o: string[];
o = ['1', '2', '3'];
// 另一种写法
let p: Array<number>;
p = [1, 2, 3];

// 元组类型 tuple 固定长度的数组
// 定义一个元组类型
let q: [string, string];
q = ['123', '123'];

// 枚举类型 enum，适合在几个固定值之间选择时使用
enum Gender {
    male,
    female,
}
let r: {name: string, gender: Gender};
r = {
    name: '123',
    gender: Gender.male,
}

// 类型别名
type s = string;
let t: s;
t = '123';


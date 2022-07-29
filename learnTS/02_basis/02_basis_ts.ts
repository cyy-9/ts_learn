// 声明一个 number类型的变量 a
let a:number;

a = 10;
a = 10.1;
// a = 'hello world'; // 会报错

// 声明和赋值同时进行
let bool:boolean = true;
// 简写形式，ts自动进行类型检查
let bool1 = true;
// bool1 = 123;    // 还是会报错

// 为函数的参数和返回值指定类型
function sum(a: number, b: number): number {
    return a + b;
}

sum(123, 123);

// sum(123, "123");     // 参数类型错误

// sum(213, 123, 213);  // 参数个数错误

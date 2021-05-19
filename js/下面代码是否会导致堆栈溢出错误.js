function foo() {
  setTimeout(foo, 0);
}
foo();
// 是否存在堆栈溢出错误

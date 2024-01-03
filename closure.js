function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();

//if we put a=4 before calling of y the value of a is 4

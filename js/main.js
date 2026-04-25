let input = document.getElementById("clac-result");

// الأرقام
let zero = document.getElementById("zero");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");

// العمليات
let plus = document.getElementById("+");
let minus = document.getElementById("-");
let multiply = document.getElementById("x");
let divide = document.getElementById("/");

// أزرار خاصة
let del = document.getElementById("Del");
let reset = document.getElementById("reset");
let equal = document.getElementById("equal");
let dot = document.getElementById("dot");

function getCalc() {

  // أرقام
  zero.onclick = () => input.value += "0";
  one.onclick = () => input.value += "1";
  two.onclick = () => input.value += "2";
  three.onclick = () => input.value += "3";
  four.onclick = () => input.value += "4";
  five.onclick = () => input.value += "5";
  six.onclick = () => input.value += "6";
  seven.onclick = () => input.value += "7";
  eight.onclick = () => input.value += "8";
  nine.onclick = () => input.value += "9";

  // عمليات
  plus.onclick = () => input.value += "+";
  minus.onclick = () => input.value += "-";
  multiply.onclick = () => input.value += "*";
  divide.onclick = () => input.value += "/";

  // نقطة
  dot.onclick = () => input.value += ".";

  // delete
  del.onclick = () => input.value = input.value.slice(0, -1);

  // reset
  reset.onclick = () => input.value = "";

  // =
  equal.onclick = () => {
    try {
      input.value = eval(input.value);
    } catch {
      input.value = "Error";
    }
  };
}

getCalc();
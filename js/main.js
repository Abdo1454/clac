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
let divide = document.getElementById("divide");

// أزرار خاصة
let del = document.getElementById("Del");
let reset = document.getElementById("reset");
let equal = document.getElementById("equal");
let dot = document.getElementById("dot");

// ------------------ functions ------------------

// إضافة رقم
function addNumber(num) {
  input.value += num;
}

// إضافة عملية مع منع التكرار
function addOperator(op) {
  if (input.value === "") return;

  let last = input.value.slice(-1);
  if ("+-*/".includes(last)) return;

  input.value += op;
}

// النقطة
function addDot() {
  let parts = input.value.split(/[\+\-\*\/]/);
  let lastPart = parts[parts.length - 1];

  if (lastPart.includes(".")) return;

  input.value += ".";
}
// حذف
function delLast() {
  input.value = input.value.slice(0, -1);
}

// ريست
function clearAll() {
  input.value = "";
}

// حساب
function calculate() {
  try {
    let exp = input.value;

    if (exp === "") return;

    // منع انتهاء بـ operator
    if (/[+\-*/.]$/.test(exp)) {
      input.value = "Error";
      return;
    }
    input.value="";
    input.value = eval(exp);
  } catch {
    input.value = "Error";
  }
}

// ------------------ events ------------------

// أرقام
zero.onclick = () => addNumber("0");
one.onclick = () => addNumber("1");
two.onclick = () => addNumber("2");
three.onclick = () => addNumber("3");
four.onclick = () => addNumber("4");
five.onclick = () => addNumber("5");
six.onclick = () => addNumber("6");
seven.onclick = () => addNumber("7");
eight.onclick = () => addNumber("8");
nine.onclick = () => addNumber("9");
dot.onclick = () =>addNumber(".");
// عمليات
plus.onclick = () => addOperator("+");
minus.onclick = () => addOperator("-");
multiply.onclick = () => addOperator("*");
divide.onclick = () => addOperator("/");

// نقطة
dot.onclick = addDot;

del.addEventListener("click", delLast);
reset.addEventListener("click", clearAll);
equal.addEventListener("click", calculate);
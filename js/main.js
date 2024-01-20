
function сложить() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("результат").innerText = "Результат: " + (num1 + num2);
  }
  
  function вычесть() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("результат").innerText = "Результат: " + (num1 - num2);
  }
  
  function умножить() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("результат").innerText = "Результат: " + (num1 * num2);
  }
  
  function разделить() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
      document.getElementById("результат").innerText = "Результат: " + (num1 / num2);
    } else {
      document.getElementById("результат").innerText = "На ноль делить нельзя";
    }
  }
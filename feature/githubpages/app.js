function add(a, b) {
    return a + b;
  }

  function calculateSum() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById("result").textContent = add(num1, num2);
    } else {
        document.getElementById("result").textContent = "Entrée invalide";
    }
}
  
  module.exports = { add };
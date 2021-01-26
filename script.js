var cuenton = document.querySelector("#cuenta");
var laPropina = document.querySelector("#tip-amount");
var sub = document.querySelector("#submit");
var tuPropina = document.querySelector("#your-tip");
var verdaderoTotal = document.querySelector("#new-total");
function propina(cuenton, percTip) {
  return cuenton * percTip;
};
function calcularCuenta(cuenta, lo) {
  return parseFloat(cuenta) + parseFloat(lo);
};
sub.addEventListener("click", function(event) {
  event.preventDefault();
  var percTip = tuPropina.value * 0.01;
  var cuenta = cuenton.value;
 var lo = propina(cuenta, percTip);
   var ya = calcularCuenta(lo, cuenta);
verdaderoTotal.textContent = ya;
  laPropina.textContent= lo;
  });

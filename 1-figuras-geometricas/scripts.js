// Código del cuadrado
console.group("Cuadrados");

function perimetroCudrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base
}

function areaTrianglo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd();

// Código del circulo
console.group("Círculos");

const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

// Interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCudrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularAlturaTriangulo() {
  const lado1 = document.getElementById("InputLado1").value;
  const lado2 = document.getElementById("InputLado2").value;
  const base = document.getElementById("Base").value;

  if (lado1 !== lado2) {
    return alert("Los triángulos isósceles tienen dos lados iguales. Inténtalo de nuevo.");
  } else {
    const altura = Math.sqrt((4 * lado1 * lado1) - (base * base)) / 2;
    alert(altura);
  }
}
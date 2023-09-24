function areaTriangle(a, b, c) {
  let S = (1 / 2) * (a + b + c); // Semiarea
  let A = Math.sqrt(S * (S - a) * (S - b) * (S - c))
  console.log(A);
}

areaTriangle(2, 3.5, 4);

areaTriangle(3, 5.5, 4);

const valorConstante = "Valor que não pode ser alterado.";
let valorAlteravel = 100;
valorAlteravel = 10;

// Tipos de valor / Tipo primitivo
// number, boolean, string
let a = 10;
let b = a;
b = 19;

// Tipos de Referência
// object -> array, date, Math, class ...
let refA = [1, 2, 3, 4];
let refB = [refA[0], refA[1], refA[2], refA[3]];
let refC = refA;
let refD = refA;
refB[1] = 55;

refD = ["a", "b", "c"];
// Funções

{
  /* <p>{refA[1]}</p>
      <p>{refB[1]}</p>
      <p>{refC[1]}</p>
      <p>{refD[1]}</p>
      <p>{a}</p>
      <p>{b}</p> */
}

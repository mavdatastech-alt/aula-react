/* function imprimirNoConsole() {
  console.log("Função executada.");
}

async function imprimirNoConsoleAsync() {
  setTimeout(() => console.log("Função Assíncrona Executada"), 3000);
} 

// imprimirNoConsole();
imprimirNoConsoleAsync();
imprimirNoConsole();
imprimirNoConsole();
imprimirNoConsole();

*/

function carregarDadosUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Nikola Tesla"), 5000);
  });
}

function carregarDadosProduto() {
  return new Promise((resolve) => {
    //... qualquer processamento que demanda recursos
    setTimeout(() => resolve("Caderno"), 4000);
  });
}

async function exibirDados() {
  // const usuario = await carregarDadosUsuario();
  const produto = await carregarDadosProduto();
  // console.log(usuario);
  console.log(produto);
}

exibirDados();
console.log("Não estou esperando...");

const outroUsuario = carregarDadosUsuario(); // Promise
// Não é execução, isso é configuração.
outroUsuario.then((res) => {
  console.log("Nome: " + res);
});

carregarDadosUsuario().then((res) => console.log("Nome: " + res));

console.log("Não estou esperando...");

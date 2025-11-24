import "./styles.css";

function App() {
  // Lógica

  const produtos = [];

  const carregarDadosExternos = async () => {
    /* 
      fetch("/api/produtos.json")
        .then((response) => {})
        .catch((error) => {})
        .finally(() => {});
    */

    try {
      const response = await fetch("/api/produtos.json"); // Promise<Response>
      const produtos = await response.json(); // Promise<any>
      console.log(produtos);
    } catch (error) {
    } finally {
    }
  };

  carregarDadosExternos();

  const gerarTotalProduto = function (produto) {
    return produto.preco * produto.quantidade;
  };

  const gerarTotalCompra = () => {
    produtos.reduce((acc, cvalue) => {
      return (acc += gerarTotalProduto(cvalue));
    }, 0.0);
  };

  const exibirProdutos = () => {
    return produtos.map(function (produto) {
      return `Produto ${produto.nome} (R\$${produto.preco})`;
    });
  };

  // Visualização
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <h2>Etapa 02</h2>
      <p>Introdução e Funções</p>
      <p>{exibirProdutos}</p>
      <p>Total: R$ {gerarTotalCompra()}</p>
    </div>
  );
}

export default App;

// const codigoHtml = "<div></div>";

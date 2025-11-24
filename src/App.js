import "./styles.css";
import ProdutosListaPage from "./pages/ProdutosLista/ProdutosListaPage";
import Cabecalho from "./components/Cabecalho";
import { useState } from "react";
import ProdutosCarrinhoPage from "./pages/ProdutosCarrinho/ProdutosCarrinhoPage";

function App() {
  const produtosLista = (
    <ProdutosListaPage
      addProdutoCarrinho={addProdutoCarrinho}
      atualizarTotal={atualizarTotalProdutos}
    />
  );
  const [pagina, setPagina] = useState(produtosLista);
  const [carrinho, setCarrinho] = useState([]);
  const [totalProdutos, setTotalProdutos] = useState(0);

  const produtosCarrinho = <ProdutosCarrinhoPage carrinho={carrinho} />;

  function atualizarTotalProdutos(total) {
    setTotalProdutos(total);
  }

  function addProdutoCarrinho(prod) {
    const carr = [...carrinho, prod];
    setCarrinho(carr);
  }

  function navigate(pagina) {
    switch (pagina) {
      case "produtos-lista":
        setPagina(produtosLista);
        break;
      case "produtos-carrinho":
        setPagina(produtosCarrinho); // TODO: inicializar componente de página correspondente
        break;
      default:
        setPagina(produtosLista);
    }
  }

  return (
    <>
      {/* <button
        onClick={() =>
          addProdutoCarrinho({
            nome: "Arroz 5kg",
            preco: 24.9,
            quantidade: 100,
          })
        }
      >
        Add
      </button> */}
      <Cabecalho navigate={navigate} total={totalProdutos} />
      {pagina}
    </>
  );
}

export default App;

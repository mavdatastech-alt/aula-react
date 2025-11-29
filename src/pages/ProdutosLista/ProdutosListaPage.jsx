import "./ProdutosLista.css";

import { useState } from "react";
import CardCarregando from "../../components/CardCarregando";
import ProdutoItem from "../../components/ProdutoItem";
import Message from "../../components/Message";
import ProdutosListaMessage from "../../components/ProdutosListaMessage";

function ProdutosListaPage({ atualizarTotal, addProdutoCarrinho }) {
  const [produtos, setProdutos] = useState(null);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [produtosFiltro, setProdutosFiltro] = useState(null);
  const [exibirFiltro, setExibirFiltro] = useState(false);
  const [filtro, setFiltro] = useState("");
  const [selectOption, setSelectOption] = useState("");

  if (isLoading) {
    fetch("/api/produtos.json")
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
      })
      .catch((error) => {
        setMessage(`Erro: ${error.message}`);
        setMessageType(1);
      })
      .finally(() => setLoading(false));
  }

  if (produtos?.length > 0 && produtosFiltro == null) {
    atualizarTotal(produtos.length);
    setProdutosFiltro(produtos);
  }

  function acaoAplicarFiltro() {
    let produtosCp = [...produtos];
    if (selectOption) {
      produtosCp = produtos.sort((prodA, prodB) => {
        if (prodA[selectOption] > prodB[selectOption]) return 1;
        else if (prodA[selectOption] == prodB[selectOption]) return 0;
        else if (prodA[selectOption] < prodB[selectOption]) return -1;
      });
    }
    if (filtro.trim()) {
      let termo = filtro.toLowerCase();
      produtosCp = produtosCp.filter((prod) => {
        const nome = prod.nome.toLowerCase();
        const quant = prod.quantidade;
        return nome.includes(termo) || quant == filtro;
      });
    }
    setProdutosFiltro(produtosCp);
  }

  function atualizarSeletor(event) {
    const value = event.target.value;
    setSelectOption(value);
  }

  function ProdutosListaFilter() {
    return (
      <section>
        <div>
          <h4>Filtro e Ordenação</h4>
          <button onClick={() => setExibirFiltro(!exibirFiltro)}>Exibir</button>
        </div>
        {exibirFiltro && (
          <>
            <div>
              <input
                type="text"
                placeholder="Filtrar lista de produtos..."
                value={filtro}
                onChange={(event) => setFiltro(event.target.value)}
              />
            </div>
            <div>
              <select value={selectOption} onChange={atualizarSeletor}>
                <option value="" disabled selected>
                  Ordernar...
                </option>
                <option value="nome">Nome</option>
                <option value="preco">Preço</option>
                <option value="quantidade">Quantidade</option>
              </select>
              <button onClick={acaoAplicarFiltro}>Aplicar</button>
            </div>
          </>
        )}
      </section>
    );
  }

  return (
    <>
      <h3 className="">Lista de Produtos</h3>
      {isLoading && <Message message={"Carregando..."} type={0} />}
      {!isLoading && (
        <ProdutosListaMessage
          message={message}
          type={messageType}
          itemsLength={produtos?.length}
        />
      )}
      {!isLoading && produtos?.length > 0 && (
        <>
          {<ProdutosListaFilter key={"produtolistafilter"} />}
          {produtosFiltro?.map((prod, index) => (
            <ProdutoItem
              key={`produtoitem_${index}`}
              addProdutoCarrinho={addProdutoCarrinho}
              produto={prod}
              metricas={{
                medio: 100.69,
                maximo: 100.69,
                minimo: 100.69,
              }}
            />
          ))}
        </>
      )}
    </>
  );
}

export default ProdutosListaPage;

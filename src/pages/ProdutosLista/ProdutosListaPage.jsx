import "./ProdutosLista.css";

import { useState } from "react";
import CardCarregando from "../../components/CardCarregando";
import ProdutoItem from "../../components/ProdutoItem";
import Message from "../../components/Message";

function ProdutosListaPage({ atualizarTotal, addProdutoCarrinho }) {
  const [produtos, setProdutos] = useState(null);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [produtosFiltro, setProdutosFiltro] = useState(null);
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
    // TODO: Aplicar Filtro
    atualizarTotal(produtos.length);
    setProdutosFiltro(produtos);
  }

  function acaoAplicarFiltro() {
    if (selectOption) {
      const produtosCp = produtos.sort((prodA, prodB) => {
        if (prodA[selectOption] > prodB[selectOption]) return 1;
        else if (prodA[selectOption] == prodB[selectOption]) return 0;
        else if (prodA[selectOption] < prodB[selectOption]) return -1;
      });
      setProdutosFiltro(produtosCp);
    }
  }

  function atualizarSeletor(event) {
    const value = event.target.value;
    setSelectOption(value);
  }

  if (isLoading) {
    return (
      <>
        <h2>Lista de Produtos</h2>
        <CardCarregando mensagem="Dados de Produtos." cor="#8ac926" />
      </>
    );
  } else if (!isLoading && message?.trim() && messageType == 1) {
    return (
      <>
        <h2>Lista de Produtos</h2>
        <Message type={messageType} message={message} />
      </>
    );
  } else if (!isLoading && produtos?.length == 0) {
    return (
      <>
        <h2>Lista de Produtos</h2>
        <Message type={0} message="Nenhum Produto Encontrado!" />
      </>
    );
  } else if (!isLoading && produtos?.length > 0) {
    return (
      <>
        <h2 className="">Lista de Produtos</h2>
        {/* <Message message={"Olá"} type={1} /> */}
        <section>
          <select value={selectOption} onChange={atualizarSeletor}>
            <option value="" disabled selected>
              Ordernar...
            </option>
            <option value="nome">Nome</option>
            <option value="preco">Preço</option>
            <option value="quantidade">Quantidade</option>
          </select>
          <button onClick={acaoAplicarFiltro}>Aplicar</button>
        </section>
        <Message type={messageType} message={message} />
        {produtosFiltro?.map((prod) => (
          <div onClick={() => addProdutoCarrinho(prod)}>
            <ProdutoItem
              // addProdutoCarrinho={addProdutoCarrinho}
              produto={prod}
              metricas={{
                medio: 100.69,
                maximo: 100.69,
                minimo: 100.69,
              }}
            />
          </div>
        ))}
      </>
    );
  }
}

export default ProdutosListaPage;

/* 

  if (dados.isLoading) {
    return (
      <>
        <h2>Lista de Produtos</h2>
        <CardCarregando mensagem="Dados de Produtos." cor="#8ac926" />
      </>
    );
  } else if (
    !dados.isLoading &&
    dados.message?.trim() &&
    dados.messageType == 1
  ) {
    return (
      <>
        <h2>Lista de Produtos</h2>
        <Message type={dados.messageType} message={dados.message} />
      </>
    );
  } else if (!dados.isLoading && dados.produtos?.length == 0) {
    return (
      <>
        <h2>Lista de Produtos</h2>
        <Message type={0} message="Nenhum Produto Encontrado!" />
      </>
    );
  } else if (!dados.isLoading && dados.produtos?.length > 0) {
    /* const produtosStr = dados.produtos.map((prod) => {
      return `
        { 
            nome: ${prod.nome}, 
            preco: ${prod.preco}, 
            quant:  ${prod.quantidade},
            subtotal: ${(prod.preco * prod.quantidade).toFixed(2)}
        }`;
    }); /
    /* css
    .classe_de_estilo {
      background-color: valor;
      padding: 1px 1px 2px 4px;
      ...
    }

    /
    /* const produtosStr = dados.produtos.map((prod) => {
      return (
        <ProdutoItem className="card_prod_conteiner" produto={prod} />
        // <ProdutoItem
        //   nome={prod.nome}
        //   preco={prod.preco}
        //   quantidade={prod.quantidade}
        // />
      );
    }); 
    /* const produtosStr = dados.produtos.map((prod) => (
      <ProdutoItem produto={prod} />
    ));

    return (
      <>
        <h2 className="">Lista de Produtos</h2>
        <Message type={dados.messageType} message={dados.message} />
        {produtosStr}
      </>
    );

    return (
      <>
        <h2 className="">Lista de Produtos</h2>
        <Message message={"Olá"} type={1} />
        <Message type={dados.messageType} message={dados.message} />
        {dados.produtos.map((prod) => (
          <ProdutoItem
            produto={prod}
            metricas={{
              medio: 100.69,
              maximo: 100.69,
              minimo: 100.69,
            }}
          />
        ))}
      </>
    );
  }

  */

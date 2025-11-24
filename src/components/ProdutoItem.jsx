import { useState } from "react";
import ControleQuantidade from "./ControleQuantidade";

export default function ProdutoItem({ produto, metricas, addProdutoCarrinho }) {
  const nome = produto.nome ?? "Nome não identificado";
  const preco = produto.preco ?? 0.0;
  const quantidade = produto.quantidade ?? 1;

  const [precoControle, setPrecoControle] = useState(preco);
  const [quantControle, setQuantControle] = useState(quantidade);

  const cor = quantidade >= 50 ? "#ffba08" : "#a8dadc";

  const cardProdutoConteiner = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: cor,
    padding: "10px 6px",
    margin: "10px",
    borderRadius: "5px",
    border: "1px solid rgba(202, 240, 248, 0.6)",
  };

  function alterarPrecoControle(event) {
    const { value } = event.target;
    setPrecoControle(value);
  }

  const incrementarQuantidade = () => setQuantControle(quantControle + 1);
  const decrementarQuantidade = () => {
    if (quantControle > 1) setQuantControle(quantControle - 1);
  };

  return (
    <>
      <div style={cardProdutoConteiner}>
        <div>
          <p className="paragrafo_produto_card">{nome}</p>{" "}
          {/* <span>R$ {precoControle.toFixed(2)}</span> */}
          <input
            type="number"
            value={precoControle}
            onChange={alterarPrecoControle}
          />
        </div>
        <div className="card_rodape_conteiner">
          <ControleQuantidade
            quantidade={quantControle}
            preco={precoControle}
            acaoIncrementar={incrementarQuantidade}
            acaoDecrementar={decrementarQuantidade}
          />
          {/* <ControleQuantidade {...produto} /> */}
        </div>
        <div>
          <button onClick={() => addProdutoCarrinho(produto)}>
            Add Carrinho
          </button>
        </div>
      </div>
    </>
  );
}

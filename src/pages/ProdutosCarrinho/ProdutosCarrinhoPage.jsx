function ProdutosCarrinhoPage({ carrinho }) {
  return (
    <>
      <h3>Produtos do Carrinho</h3>
      <p>{carrinho[0].nome}</p>
    </>
  );
}

export default ProdutosCarrinhoPage;

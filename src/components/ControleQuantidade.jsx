export default function ControleQuantidade({
  quantidade,
  preco,
  acaoIncrementar,
  acaoDecrementar,
}) {
  // const quantidade = props.quantidade;
  // const preco = props.preco;

  return (
    <div
      style={{
        border: "1px solid black",
      }}
    >
      <button onClick={acaoIncrementar}>+</button>
      <span>{quantidade}</span>
      <button onClick={acaoDecrementar}>-</button>
      <p>
        Subtotal:
        <span>R$ {(preco * quantidade).toFixed(2)}</span>
      </p>
    </div>
  );
}

function CardCarregando(props) {
  const mensagem = props.mensagem ?? "";
  const cor = props.cor ?? "#8ecae6";

  const cardConteiner = {
    backgroundColor: cor,
  };

  return (
    <div style={cardConteiner}>
      <h3>{mensagem}</h3>
      <p>Carregando dados...</p>
    </div>
  );
}

export default CardCarregando;

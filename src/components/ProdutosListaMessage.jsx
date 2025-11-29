import Message from "./Message";

export default function ProdutosListaMessage(props) {
  let message = props.message || "";
  const type = props.type;
  const itemsLength = props.itemsLength;

  if (itemsLength == 0) message = "Nenhum Produto Encontrado!";

  message = message?.trim();

  return <>{message && <Message type={type} message={message} />}</>;
}

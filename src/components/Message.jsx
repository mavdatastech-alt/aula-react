// <Message message="" type="" />;

/*
  const props = {
    message: String,
    type: String,
  }
*/
export default function Message({ message, type }) {
  // const mensagem = props.message;
  // const { message } = props;
  // const type = props.type;
  // const { type } = props;
  // const { message, type } = props;

  let cor = "#e5e5e5";

  switch (type) {
    case 0:
      cor = "#90e0ef";
      break;
    case 1:
      cor = "#faa307";
      break;
    case 2:
      cor = "#8ac926";
      break;
  }

  const cardMessageConteiner = {
    backgroundColor: cor,
    padding: "2px 10px",
  };

  return (
    <div style={cardMessageConteiner}>
      <h3>Mensagem</h3>
      <p>{message}</p>
    </div>
  );
}

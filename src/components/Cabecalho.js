import styles from "./Cabecalho.module.css";

function Cabecalho({ total, navigate }) {
  const quant = 0;

  return (
    <header style={headerConteiner}>
      <h1 className={styles.cabecalho_nivel_1}>Fundamentos do React</h1>
      <h2 className={styles.cabecalho_nivel_2}>Etapa 04</h2>

      <nav style={navConteiner}>
        <a onClick={() => navigate("produtos-lista")} style={navItem}>
          Produtos {total}
        </a>
        <a onClick={() => navigate("produtos-carrinho")} style={navItem}>
          Carrinho {quant}
        </a>
      </nav>
    </header>
  );
}

const headerConteiner = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

const navConteiner = {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  margin: "10px 0px",
};

const navItem = {
  cursor: "pointer",
};

export default Cabecalho;

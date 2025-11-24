import "./styles.css";
import { useState } from "react";

import Cabecalho from "./components/Cabecalho";

function Contador() {
  // criar estado
  /* 
    const initialState = {
      contador: 0,
    };
    const appState = useState(initialState); // undefined
    const estado = appState[0];
    const setEstado = appState[1]; 
  */

  const [estado, setEstado] = useState({
    contador: 0,
    quantInteracoes: 0,
  });

  const decrementar = () => {
    setEstado({
      contador: estado.contador - 1,
      quantInteracoes: estado.quantInteracoes + 1,
    });
  };
  const incrementar = () => {
    setEstado({
      contador: estado.contador + 1,
      quantInteracoes: estado.quantInteracoes + 1,
    });
  };

  return (
    <>
      <div className="App">
        {/* <Cabecalho /> */}
        <button onClick={decrementar}>-</button>
        <p>{estado.contador}</p>
        <p>{estado.quantInteracoes}</p>
        <button onClick={incrementar}>+</button>
      </div>
    </>
  );
}

export default App;

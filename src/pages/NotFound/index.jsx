import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  // useState retorna um par de valores: o estado atual e uma função que atualiza o estado
  const [counter, setCounter] = useState(5);

  // useNavigate retorna uma função que permite navegar programaticamente
  const navigate = useNavigate();

  // useEffect permite executar efeitos colaterais (será executada após a primeira renderização do componente e quando alguma dependência for atualizada)
  // useEffect(() => {
  //   const timeoutID =
  //     counter > 0 ? setTimeout(() => setCounter((t) => t - 1), 1000) : navigate("/home");

  //   // Função de limpeza (cancela um timeout previamente estabelecido pela função setTimeout())
  //   return () => clearTimeout(timeoutID);
  // }, [counter, navigate]);

  // useEffect permite executar efeitos colaterais (será executada após a primeira renderização do componente e quando alguma dependência for atualizada)
  useEffect(() => {
    let timeoutID = 0;

    if (counter > 0) {
      timeoutID = setTimeout(() => setCounter((t) => t - 1), 1000);
    } else {
      // O usuário será redirecionado para a página inicial após 5s
      navigate("/home");
    }

    // Função de limpeza (cancela um timeout previamente estabelecido pela função setTimeout())
    return () => clearTimeout(timeoutID);
  }, [counter, navigate]);

  return (
    <>
      <h1>
        Página não encontrada. Redirecionado para a página inicial em {counter}
        s.
      </h1>
    </>
  );
};

export default NotFound;

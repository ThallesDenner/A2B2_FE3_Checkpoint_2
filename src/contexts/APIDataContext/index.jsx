import { createContext, useReducer, useContext, useRef } from "react";
import { getTokenFromLocalStorage, hasToken } from "../../services/local-storage";
import { getDentistsFromSessionStorage, getPatientsFromSessionStorage } from "../../services/session-storage";

import { buildActions } from "./build-actions";
import reducer from "./reducer";

// Estado inicial
const initialState = {
  isLogged: hasToken(),
  token: getTokenFromLocalStorage(),
  dentists: getDentistsFromSessionStorage(),
  patients: getPatientsFromSessionStorage(),
}

// Criação de um objeto de contexto
const APIDataContext = createContext();

// Provedor de contexto (esse componente fornece um contexto para seus filhos, netos e demais componentes da árvore genealógica)
export const APIDataContextProvider = ({ children }) => {
  // Variável de estado e função que dispara ações (dispatch)
  const [state, dispatch] = useReducer(reducer, initialState);

  // useRef retorna um objeto no qual o valor da propriedade current é uma referência imutável para a função buildActions
  const actions = useRef(buildActions(dispatch));

  return (
    // A propriedade value contém o que os componentes filhos, netos e demais componentes da árvore genealógica podem acessar de APIDataContext
    <APIDataContext.Provider value={{...state, ...actions.current}}>
      {children}
    </APIDataContext.Provider>
  );
};

// Hook personalizado
export const useAPIDataContext = () => {
  // useContext() retorna um objeto de contexto (esse objeto contém o que foi passado para o atributo value em APIDataContext.Provider)
  const context = useContext(APIDataContext);

  // Um erro será lançado se o hook useAPIDataContext for usado fora do componente <APIDataContextProvider />
  if (typeof context === "undefined") {
    throw new Error(
      "Você tem que usar o hook useAPIDataContext dentro do componente <APIDataContextProvider />"
    );
  }

  return {...context};
};

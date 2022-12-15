import { useEffect } from "react";
import { createContext, useState, useContext } from "react";

import {
  getThemeFromLocalStorage,
  saveThemeInLocalStorage,
} from "../../services/local-storage";

// Criação de um objeto de contexto
const ThemeContext = createContext();

// Provedor de contexto (esse componente fornece um contexto para seus filhos, netos e demais componentes da árvore genealógica)
export const ThemeContextProvider = ({ children }) => {
  // useState retorna um par de valores: o estado atual e uma função que atualiza o estado
  // O valor inicial da variável de estado theme é o valor da chave theme no localStorage
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const isLightMode = theme === "light" || false;

  // A função changeTheme muda o tema da aplicação
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // useEffect permite executar efeitos colaterais (será executada após a primeira renderização do componente e quando alguma dependência for atualizada)
  useEffect(() => saveThemeInLocalStorage(theme), [theme]);

  return (
    // A propriedade value contém o que os componentes filhos, netos e demais componentes da árvore genealógica podem acessar de ThemeContext
    <ThemeContext.Provider value={{theme, isLightMode, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado
export const useThemeContext = () => {
  // useContext() retorna um objeto de contexto (esse objeto contém o que foi passado para o atributo value em ThemeContext.Provider)
  const context = useContext(ThemeContext);

  // Um erro será lançado se o hook useThemeContext for usado fora do componente <ThemeContextProvider />
  if (typeof context === "undefined") {
    throw new Error(
      "Você tem que usar o hook useThemeContext dentro do componente <ThemeContextProvider />"
    );
  }

  return {...context};
};

import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useThemeContext } from "./contexts/ThemeContext";

function App() {
  // useThemeContext retorna um objeto contendo o tema atual, uma flag e uma função que atualiza o tema
  const { theme } = useThemeContext();

  // useLocation retorna o objeto de localização atual (rota para o componente App)
  const location = useLocation();

  // useNavigate retorna uma função que permite navegar programaticamente
  const navigate = useNavigate();

  // useEffect permite executar efeitos colaterais (será executada toda vez que o componente for renderizado)
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/login");
    }
  });

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={theme}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

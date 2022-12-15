import { Link, useNavigate } from "react-router-dom";
import { useAPIDataContext } from "../../contexts/APIDataContext";
import { useThemeContext } from "../../contexts/ThemeContext";
import styles from "./styles.module.css";

const Navbar = () => {
  // useThemeContext retorna um objeto contendo o tema atual, uma flag e uma função que atualiza o tema
  const { theme, isLightMode, changeTheme } = useThemeContext();

  // useAPIDataContext retorna um objeto que contém variáveis de estado e funções que atualizam parte do objeto de estado
  const { isLogged, logOut } = useAPIDataContext();

  // useNavigate retorna uma função que permite navegar programaticamente
  const navigate = useNavigate();

  return (
    <header className="sticky-top">
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar navbar-dark bg-dark ou navbar-light bg-light*/}
      <nav
        className={`navbar navbar-expand-sm navbar-${theme} bg-${theme}`}
        aria-label="Third navbar example"
      >
        <div className="container">
          {/* Redireciona para a página inicial */}
          <Link className={`navbar-brand ${styles.navbarBrand}`} to="/home">
            DH Odonto
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              {isLogged ? (
                <>
                  <li className={`nav-item ${styles.navBarLink}`}>
                    {/* Redireciona para a página inicial */}
                    <Link className="nav-link" to="/home">
                      Dentistas
                    </Link>
                  </li>
                  <li className={`nav-item ${styles.navBarLink}`}>
                    {/* Redireciona para a página de favoritos */}
                    <Link className="nav-link" to="/favorites">
                      Favoritos
                    </Link>
                  </li>
                </>
              ) : null}
              <li className={`nav-item ${styles.navBarLink}`}>
                {/* Redireciona para a página de contato */}
                <Link className="nav-link" to="/contact">
                  Contato
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                {isLogged ? (
                  <button
                    className={`btn ${isLightMode ? "btn-dark" : "btn-light"} ${
                      styles.btnStyle
                    }`}
                    onClick={() => {
                      logOut();
                      navigate("/login");
                    }}
                  >
                    Sair
                  </button>
                ) : (
                  <Link className="nav-link" to="/login">
                    Entrar
                  </Link>
                )}
                {/* O botão de logout deverá ser testado darkmode
                se sim, btn-dark, se não, btn-light */}
                {/* Redireciona para a página de login */}
              </li>
              <li className={`nav-item`}>
                {/* Na linha seguinte deverá ser feito um teste se a aplicação
                 está em dark mode e deverá utilizar o icone ☀ ou 🌙 e btn-dark ou btn-light*/}
                <button
                  className={`btn ${isLightMode ? "btn-dark" : "btn-light"} ${
                    styles.btnStyle
                  }`}
                  onClick={changeTheme}
                >
                  {isLightMode ? "🌙" : "☀"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

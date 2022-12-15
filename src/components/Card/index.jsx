import { useState } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../contexts/ThemeContext";
import {
  addToFavorites,
  isIncludedInFavorites,
  removeFromFavorites,
} from "../../services/local-storage";
import styles from "./styles.module.css";

const Card = ({ dentist, updateFavoritesList }) => {
  // Desestruturação do objeto dentist
  const { nome, sobrenome, matricula, usuario } = dentist;

  // useThemeContext retorna um objeto contendo o tema atual, uma flag e uma função que atualiza o tema
  const { isLightMode } = useThemeContext();

  // useState retorna um par de valores: o estado atual e uma função que atualiza o estado
  const [isFavorite, setIsFacorite] = useState(
    isIncludedInFavorites(matricula)
  );

  // Função de manipulação do evento onClick
  const handleClick = () => {
    if (isFavorite) {
      removeFromFavorites(matricula);
      setIsFacorite(!isFavorite);
    } else {
      addToFavorites(dentist);
      setIsFacorite(!isFavorite);
    }

    // A lista de dentistas favoritos aprensentada na página de favoritos será atualizada quando essa condição for satisfeita
    if (updateFavoritesList) {
      updateFavoritesList();
    }
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card ${isLightMode ? "" : styles.cardDark}`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.cardBody}`}>
          {/* Redireciona para a página de detalhes */}
          <Link to={`/dentist/${matricula}`}>
            <h5 className={`card-title ${styles.title}`}>
              {`${nome} ${sobrenome}`}
            </h5>
          </Link>
          <br />
          <button
            className={`btn ${isLightMode ? "btn-dark" : "btn-light"} ${
              styles.favButton
            }`}
            onClick={handleClick}
          >
            {isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;

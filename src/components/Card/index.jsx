import { useState } from "react";
import { Link } from "react-router-dom";
import {
  addToFavorites,
  isIncludedInFavorites,
  removeFromFavorite,
} from "../../services/local-storage";
import styles from "./styles.module.css";

const Card = ({ dentist, updateFavoritesList }) => {
  // Desestruturação do objeto dentist
  const { nome, sobrenome, matricula, usuario } = dentist;

  // useState retorna um par de valores: o estado atual e uma função que atualiza o estado
  const [isFavorite, setIsFacorite] = useState(
    isIncludedInFavorites(matricula)
  );

  // Função de manipulação do evento onClick
  const handleClick = () => {
    if (isFavorite) {
      removeFromFavorite(matricula);
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
      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Redireciona para a página de detalhes */}
          <Link to={`/dentist/${matricula}`}>
            <h5 className={`card-title ${styles.title}`}>
              {`${nome} ${sobrenome}`}
            </h5>
          </Link>
          <br />
          <button
            className={`btn btn-light ${styles.favButton}`}
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

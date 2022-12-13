import { useState } from "react";
import Card from "../../components/Card";
import { getFavoritesFromLocalStorage } from "../../services/local-storage";

const Favorites = () => {
  // useState retorna um par de valores: o estado atual e uma função que atualiza o estado
  const [dentists, setDentists] = useState(getFavoritesFromLocalStorage());

  // Função para atualizar a lista de dentistas favoritos
  const updateFavoritesList = () => {
    setDentists(getFavoritesFromLocalStorage());
  };

  return (
    <>
      <h1>Favoritos</h1>
      <div className="card-grid container">
        {dentists.map((dentist) => (
          <Card
            key={dentist.matricula}
            dentist={dentist}
            updateFavoritesList={updateFavoritesList}
          />
        ))}
      </div>
    </>
  );
};

export default Favorites;

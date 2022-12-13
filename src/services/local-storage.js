// Função para obter os dentistas favoritos a partir do localStorage
export const getFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

// Função para armazenar os dentistas favoritos no localStorage
export const saveFavoritesInLocalStorage = (favorites) =>
  localStorage.setItem("favorites", JSON.stringify(favorites));

// Função para adicionar dentistas no array de favoritos
export const addToFavorites = (dentist) => {
  const favorites = getFavoritesFromLocalStorage();
  favorites.push(dentist);
  saveFavoritesInLocalStorage(favorites);
};

// Função para remover dentistas do array de favoritos
// export const removeFromFavorite = (matricula) => {
//   const favorites = getFavoritesFromLocalStorage();
//   favorites.find((dentist, index) =>
//     dentist.matricula === matricula ? favorites.splice(index, 1) : false
//   );
//   saveFavoritesInLocalStorage(favorites);
// };

export const removeFromFavorite = (matricula) => {
  const favorites = getFavoritesFromLocalStorage();
  saveFavoritesInLocalStorage(
    favorites.filter((dentist) => dentist.matricula !== matricula)
  );
};

// Função para verificar se um determinado dentista está no array de favoritos
export const isIncludedInFavorites = (matricula) => {
  const favorites = getFavoritesFromLocalStorage();
  for (const favorite of favorites) {
    if (favorite.matricula === matricula) {
      return true;
    }
  }
  return false;
}

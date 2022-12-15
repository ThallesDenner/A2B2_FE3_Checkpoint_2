// Função para obter os dentistas favoritos a partir do localStorage
export const getFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

// Função para salvar os dentistas favoritos no localStorage
export const saveFavoritesInLocalStorage = (favorites) =>
  localStorage.setItem("favorites", JSON.stringify(favorites));

// Função para adicionar dentistas no array de favoritos
export const addToFavorites = (dentist) => {
  const favorites = getFavoritesFromLocalStorage();
  favorites.push(dentist);
  saveFavoritesInLocalStorage(favorites);
};

// Função para remover dentistas do array de favoritos
// export const removeFromFavorites = (matricula) => {
//   const favorites = getFavoritesFromLocalStorage();
//   favorites.find((dentist, index) =>
//     dentist.matricula === matricula ? favorites.splice(index, 1) : false
//   );
//   saveFavoritesInLocalStorage(favorites);
// };

export const removeFromFavorites = (matricula) => {
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
};

// Função para obter o tema a partir do localStorage
export const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme");
  return theme ? JSON.parse(theme) : "light";
};

// Função para salvar o tema no localStorage
export const saveThemeInLocalStorage = (theme) =>
  localStorage.setItem("theme", JSON.stringify(theme));

// Função para obter o token a partir do localStorage
export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  return token ? JSON.parse(token) : "";
};

// Função para salvar o token no localStorage
export const saveTokenInLocalStorage = (token) =>
  localStorage.setItem("token", JSON.stringify(token));

// Função para remover o token do localStorage
export const removeTokenFromLocalStorage = () =>
  localStorage.removeItem("token");

// Função para verificar se tem token salvo no localStorage
// export const hasToken = () => Boolean(getTokenFromLocalStorage());
export const hasToken = () => !!getTokenFromLocalStorage();

import actionTypes from "./action-types";

// Função de mudança do estado (é chamada quando a função dispatch é disparada e sempre retorna um estado)
// O parâmetro state recebe o estado e o parâmetro action recebe o objeto passado para a função dispatch
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return {...state, isLogged: true, token: action.payload};

    case actionTypes.LOG_OUT:
      return {...state, isLogged: false};

    case actionTypes.GET_ALL_DENTISTS:
      return {...state, dentists: action.payload};

    case actionTypes.GET_ALL_PATIENTS:
      return {...state, patients: action.payload};

    default:
      return state;
  }
};

export default reducer;

import api from "../../services/api";
import {
  removeDentistsAndPatientsFromSessionStorage,
  removeTokenFromSessionStorage,
  saveDentistsInSessionStorage,
  savePatientsInSessionStorage,
  saveTokenInSessionStorage,
} from "../../services/session-storage";
import actionTypes from "./action-types";

// Factory
export const buildActions = (dispatch) => {
  return {
    logIn: (token) => logIn({ token, dispatch }),
    logOut: () => logOut(dispatch),
    getAllDentists: () => getAllDentists(dispatch),
    getAllPatients: () => getAllPatients(dispatch),
  };
};

const logIn = ({ token, dispatch }) => {
  dispatch({ type: actionTypes.LOG_IN, payload: token });
  saveTokenInSessionStorage(token);
};

const logOut = (dispatch) => {
  dispatch({ type: actionTypes.LOG_OUT });
  removeTokenFromSessionStorage();
  removeDentistsAndPatientsFromSessionStorage();
};

const getAllDentists = async (dispatch) => {
  try {
    const response = await api.get("/dentista");
    // console.log("response.data de getAllDentists(): ", response.data);
    dispatch({ type: actionTypes.GET_ALL_DENTISTS, payload: response.data });
    saveDentistsInSessionStorage(response.data);
  } catch (error) {
    // console.log(error);
    alert("Ocorreu um erro ao buscar todos os dentistas.");
  }
};

const getAllPatients = async (dispatch) => {
  try {
    const response = await api.get("/paciente");
    // console.log("response.data de getAllPatients(): ", response.data);
    dispatch({ type: actionTypes.GET_ALL_PATIENTS, payload: response.data.body });
    savePatientsInSessionStorage(response.data.body);
  } catch (error) {
    // console.log(error);
    alert("Ocorreu um erro ao buscar todos os pacientes.");
  }
};

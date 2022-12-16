// Função para obter o token a partir do sessionStorage
export const getTokenFromSessionStorage = () => {
  const token = sessionStorage.getItem("token");
  return token ? JSON.parse(token) : "";
};

// Função para salvar o token no sessionStorage
export const saveTokenInSessionStorage = (token) =>
  sessionStorage.setItem("token", JSON.stringify(token));

// Função para remover o token do sessionStorage
export const removeTokenFromSessionStorage = () =>
  sessionStorage.removeItem("token");

// Função para verificar se tem token salvo no sessionStorage
// export const hasToken = () => Boolean(getTokenFromSessionStorage());
export const hasToken = () => !!getTokenFromSessionStorage();

// Função para obter os dentistas a partir do sessionStorage
export const getDentistsFromSessionStorage = () => {
  const dentists = sessionStorage.getItem("dentists");
  return dentists ? JSON.parse(dentists) : [];
};

// Função para salvar os dentistas no sessionStorage
export const saveDentistsInSessionStorage = (dentists) =>
  sessionStorage.setItem("dentists", JSON.stringify(dentists));

// Função para obter os pacientes a partir do sessionStorage
export const getPatientsFromSessionStorage = () => {
  const patients = sessionStorage.getItem("patients");
  return patients ? JSON.parse(patients) : [];
};

// Função para salvar os pacientes no sessionStorage
export const savePatientsInSessionStorage = (patients) =>
  sessionStorage.setItem("patients", JSON.stringify(patients));

// Função para remover os arrays de dentistas e pacientes do sessionStorage
export const removeDentistsAndPatientsFromSessionStorage = () => {
  sessionStorage.removeItem("dentists");
  sessionStorage.removeItem("patients");
}
  
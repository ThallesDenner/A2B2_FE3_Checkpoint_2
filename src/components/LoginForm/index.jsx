import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAPIDataContext } from "../../contexts/APIDataContext";
import { useThemeContext } from "../../contexts/ThemeContext";
import api from "../../services/api";
import styles from "./styles.module.css";

const LoginForm = () => {
  // useAPIDataContext retorna um objeto que contém variáveis de estado e funções que atualizam parte do objeto de estado 
  const { logIn, getAllDentists, getAllPatients } = useAPIDataContext();

  // useThemeContext retorna um objeto contendo o tema atual, uma flag e uma função que atualiza o tema
  const { isLightMode } = useThemeContext();

  // useState retorna um par de valores: o estado atual e uma função que atualiza o estado
  const [formData, setFormData] = useState({});

  // useNavigate retorna uma função que permite navegar programaticamente
  const navigate = useNavigate();

  // Função de manipulação do evento onChange
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função assíncrona para obter o token
  const getAuthorization = async () => {
    try {
      const response = await api.post("/auth", formData);
      // console.log("response.data de getAuthorization(): ", response.data);
      logIn(response.data.token);
      navigate("/home");
    } catch (error) {
      // console.log(error);
      alert("Ocorreu um erro ao entrar no sistema.");
    }
  };

  // Função de manipulação do evento onSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    getAuthorization();
    getAllDentists();
    getAllPatients();
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card} ${
          isLightMode ? "" : styles.cardDark
        }`}
      >
        <div className={`card-body`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Usuário"
              name="username"
              required
              onChange={handleChange}
              // onChange={(event) => setFormData({...formData, username: event.target.value})}
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Senha"
              name="password"
              type="password"
              required
              onChange={handleChange}
              // onChange={(event) => setFormData({...formData, password: event.target.value})}
            />
            <button
              className={`btn ${isLightMode ? "btn-dark" : "btn-light"}`}
              type="submit"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

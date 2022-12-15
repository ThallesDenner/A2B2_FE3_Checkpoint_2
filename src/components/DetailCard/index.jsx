import { useThemeContext } from "../../contexts/ThemeContext";
import ScheduleFormModal from "../SchedulingFormModal";
import styles from "./styles.module.css";

const DetailCard = ({ nome, sobrenome, matricula, usuario }) => {
  // useThemeContext retorna um objeto contendo o tema atual, uma flag e uma função que atualiza o tema
  const { isLightMode } = useThemeContext();

  return (
    <>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div className={`card-body row ${isLightMode ? '' : styles.cardDark}`}>
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {nome}</li>
              <li className="list-group-item">
                Sobrenome: {sobrenome}
              </li>
              <li className="list-group-item">
                Usuário: {usuario.username}
              </li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn ${isLightMode ? 'btn-dark' : 'btn-light'} ${styles.button}`}
              >
                Agendar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;

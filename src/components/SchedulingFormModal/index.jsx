import { useThemeContext } from "../../contexts/ThemeContext";
import SchedulingForm from "../SchedulingForm";

import styles from "./styles.module.css";

const ScheduleFormModal = () => {
  // useThemeContext retorna um objeto contendo o tema atual, uma flag e uma função que atualiza o tema
  const { isLightMode } = useThemeContext();

  return (
    <div
      className={`modal fade`}
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div className={`modal-content ${isLightMode ? "" : styles.modalDark}`}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Selecione dentista, paciente, data e hora 
            </h1>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
            // está em dark mode e deverá utilizado o css correto */}
            <button
              type="button"
              className={`btn-close ${isLightMode ? '' : styles.closeButtonDark}`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <SchedulingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleFormModal;

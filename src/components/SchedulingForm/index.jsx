import { useState } from "react";
import { useAPIDataContext } from "../../contexts/APIDataContext";
import { useThemeContext } from "../../contexts/ThemeContext";
import api from "../../services/api";

import styles from "./styles.module.css";

const SchedulingForm = () => {
  // useThemeContext retorna um objeto contendo o tema atual, uma flag e uma função que atualiza o tema
  const { isLightMode } = useThemeContext();

  // useAPIDataContext retorna um objeto que contém variáveis de estado e funções que atualizam parte do objeto de estado
  const { dentists, patients, token } = useAPIDataContext();

  // useState retorna um par de valores: o estado atual e uma função que atualiza o estado
  const [formData, setFormData] = useState({});

  // Função de manipulação do evento onChange
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função assíncrona para agendar consulta
  const scheduleAppointment = async () => {
    try {
      const request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          dentista: {
            matricula: formData.dentist,
          },
          paciente: {
            matricula: formData.patient,
          },
          dataHoraAgendamento: formData.appointmentDate,
        }),
      };

      // const request = {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      //   body: {
      //     paciente: {
      //       matricula: formData.patient,
      //     },
      //     dentista: {
      //       matricula: formData.dentist,
      //     },
      //     dataHoraAgendamento: formData.appointmentDate,
      //   },
      // };

      const response = await api.post("/consulta", request);
      // console.log("response.data de scheduleAppointment(): ", response.data);

      if (response.ok) {
        alert("Consulta marcada com sucesso!");
      }
    } catch (error) {
      // console.log(error);
      alert(
        "Ocorreu um erro ao agendar a consulta. Confira o preenchimento dos campos. Caso o erro persista, tente mais tarde :("
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    scheduleAppointment();
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center container ${
          isLightMode ? "" : styles.cardDark
        }`}
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentista
              </label>
              <select
                className="form-select"
                name="dentist"
                id="dentist"
                onChange={handleChange}
              >
                {dentists.length > 0
                  ? dentists.map((dentist) => (
                      <option key={dentist.matricula} value={dentist.matricula}>
                        {`${dentist.nome} ${dentist.sobrenome}`}
                      </option>
                    ))
                  : ""}
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Paciente
              </label>
              <select
                className="form-select"
                name="patient"
                id="patient"
                onChange={handleChange}
              >
                {patients.length > 0
                  ? patients.map((patients) => (
                      <option
                        key={patients.matricula}
                        value={patients.matricula}
                      >
                        {`${patients.nome} ${patients.sobrenome}`}
                      </option>
                    ))
                  : ""}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Data e Hora
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={`btn ${isLightMode ? "btn-dark" : "btn-light"} ${
                styles.button
              }`}
              type="submit"
            >
              Agendar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SchedulingForm;

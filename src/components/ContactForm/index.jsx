import { useState } from "react";
import checkFormData from "../../utils/validations";
import styles from "./styles.module.css";

// Estado inicial do formulário de contato
const initialState = {
  name: "",
  email: "",
}

const ContactForm = () => {
  // useState retorna um par de valores: o estado atual e uma função que atualiza o estado
  const [formData, setFormData] = useState(initialState);
  const [formDataError, setFormDataError] = useState({});

  // Função de manipulação do evento onChange
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função de manipulação do evento onSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    const dataStatus = checkFormData(formData);

    for (const key in dataStatus) {
      if (dataStatus[key] !== "") {
        setFormDataError(dataStatus);
        return;
      }
    }

    setFormData(initialState);
    setFormDataError({});

    alert(`Obrigado ${formData.name}, entraremos em contato com você em breve.`);
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`text-center card container ${styles.card}`}>
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              className={`form-control ${styles.inputSpacing}`}
              name="name"
              value={formData.name}
              placeholder="Nome completo"
              required
              onChange={handleChange}
              // onChange={(event) => setFormData({...formData, name: event.target.value})}
            />
            <p className={styles.error} aria-live="polite">
              {formDataError.nameError}
            </p>
            <input
              type="email"
              className={`form-control ${styles.inputSpacing}`}
              name="email"
              value={formData.email}
              placeholder="Email"
              required
              onChange={handleChange}
              // onChange={(event) => setFormData({...formData, email: event.target.value})}
            />
            <p className={styles.error} aria-live="polite">
              {formDataError.emailError}
            </p>
            <textarea
              className="form-control"
              name="comment"
              rows="3"
              placeholder="Comentário"
            />
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

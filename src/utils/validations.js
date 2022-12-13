// Função para verificar se o campo do formulário está vazio
const isEmpty = (field) => {
  return field.trim() === "";
};

// Função para verificar se os dados inseridos no formulário de cadastro estão corretos
const checkFormData = (formData) => {
  const { name, email } = formData;

  // Condição para que o nome esteja correto
  const regexName = /^[a-zA-Zà-úÀ-Ú\s]{5,50}$/;
  const nameCondition = !isEmpty(name) && regexName.test(name);

  // Condição para que o email esteja correto
  const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const emailCondidion = !isEmpty(email) && regexEmail.test(email);

  return {
    nameError: nameCondition ? "" : "Nome deve ter entre 5 a 50 caracteres.",
    emailError: emailCondidion ? "" : "Email inválido.",
  };
};

export default checkFormData;

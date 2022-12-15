import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import DetailCard from "../../components/DetailCard";

const Details = () => {
  // useState retorna um par de valores: o estado atual e uma função que atualiza o estado
  const [dentist, setDentist] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // useParams retorna um objeto contendo os parâmetros da rota atual (rota para o componente Details)
  const { id } = useParams();

  // useNavigate retorna uma função que permite navegar programaticamente
  const navigate = useNavigate();

  // useEffect permite executar efeitos colaterais (será executada após a primeira renderização do componente e quando alguma dependência for atualizada)
  useEffect(() => {
    // Função assíncrona para buscar um dentista com um determinado id
    const getDentist = async () => {
      try {
        const response = await api.get(`/dentista?matricula=${id}`);
        // console.log("response.data de getDentist(): ", response.data);
        setDentist(response.data);
        setIsLoading(false);
      } catch (error) {
        // console.log(error);
        alert(`Ocorreu um erro ao buscar o dentista com id = ${id}.`);
        navigate("/home");
      }
    };

    getDentist();
  }, [id, navigate]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <h1>Agendar consulta com {`${dentist.nome} ${dentist.sobrenome}`} </h1>
      <DetailCard {...dentist} />
    </>
  );
};

export default Details;

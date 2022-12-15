import Card from "../../components/Card";
import { useAPIDataContext } from "../../contexts/APIDataContext";

const Home = () => {
  // // useState retorna um par de valores: o estado atual e uma função que atualiza o estado
  // const [dentists, setDentists] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // // useEffect permite executar efeitos colaterais (será executada apenas 1x após a primeira renderização do componente)
  // useEffect(() => {
  //   // Função assíncrona para buscar todos os dentistas
  //   const getAllDentists = async () => {
  //     try {
  //       const response = await api.get("/dentista");
  //       // console.log("response.data de getAllDentists(): ", response.data);
  //       setDentists(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       // console.log(error);
  //       alert("Ocorreu um erro ao buscar todos os dentistas.");
  //     }
  //   };

  //   getAllDentists();
  // }, []);

  // if (isLoading) {
  //   return <div>Carregando...</div>;
  // }

  // const { dentists, getAllDentists } = useAPIDataContext();

  // useEffect(() => {
  //   getAllDentists();
  // }, []);

  // useAPIDataContext retorna um objeto que contém variáveis de estado e funções que atualizam parte do objeto de estado 
  const { dentists } = useAPIDataContext();

  if (dentists.length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <h1>Escolha um dentista</h1>
      <div className="card-grid container">
        {dentists.map((dentist) => (
          <Card key={dentist.matricula} dentist={dentist} />
        ))}
      </div>
    </>
  );
};

export default Home;

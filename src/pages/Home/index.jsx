import { useEffect } from "react";
import Card from "../../components/Card";

const Home = () => {
  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  }, []);

  return (
    <>
      <h1>Início</h1>
      <div className="card-grid container">
        <Card />
      </div>
    </>
  );
};

export default Home;

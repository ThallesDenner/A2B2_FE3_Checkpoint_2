import { render, screen } from "@testing-library/react";
import Card from ".";
import { APIDataContextProvider } from "../../contexts/APIDataContext";
import { ThemeContextProvider } from "../../contexts/ThemeContext";

describe("<Card />", () => {
  test("Verificar se o componente Card está sendo renderizado com a passagem de props.", () => {
    const dentist = {
      nome: "Andressa",
      sobrenome: "Lima",
      matricula: "123456789",
      usuario: "DressaLim",
    };
    render(
      <APIDataContextProvider>
        <ThemeContextProvider>
          <Card dentist={dentist} />
        </ThemeContextProvider>
      </APIDataContextProvider>
    );
    const nomeCompleto = screen.getByText(
      `${dentist.nome} ${dentist.sobrenome}`
    );
    expect(nomeCompleto).toBeInTheDocument();
  });
});

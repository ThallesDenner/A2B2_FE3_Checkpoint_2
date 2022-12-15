import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./index.css";

import App from "./App";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { APIDataContextProvider } from "./contexts/APIDataContext";
import ProtectedRoute from "./components/ProtectedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* O componente APIDataContextProvider fornece o contexto APIDataContext para seus filhos, netos e demais componentes da árvore genealógica */}
    <APIDataContextProvider>
      {/* O componente ThemeContextProvider fornece o contexto ThemeContext para seus filhos, netos e demais componentes da árvore genealógica */}
      <ThemeContextProvider>
        {/* Configuração das rotas */}
        <BrowserRouter>
          <Routes>
            {/* Os componentes associados com as rotas filhas são renderizados no lugar do componente <Outlet /> dentro de App.jsx */}
            <Route path="/" element={<App />}>
              <Route element={<ProtectedRoute />}>
                <Route path="/home" element={<Home />} />
                <Route path="/dentist/:id" element={<Details />} />
                <Route path="/favorites" element={<Favorites />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Route>
            {/* O componente <NotFound /> será renderizado em qualquer rota que não for uma das anteriores */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </APIDataContextProvider>
  </React.StrictMode>
);

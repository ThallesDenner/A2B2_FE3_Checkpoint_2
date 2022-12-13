import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Configuração das rotas */}
    <BrowserRouter>
      <Routes>
        {/* Os componentes associados com as rotas filhas são renderizados no lugar do componente <Outlet /> dentro de App.jsx */}
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dentist/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Route>
        {/* O componente <NotFound /> será renderizado em qualquer rota que não for uma das anteriores */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

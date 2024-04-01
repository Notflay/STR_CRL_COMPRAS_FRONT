import React, { Component, useRef } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../node_modules/primeflex/primeflex.css";
import "../node_modules/primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import Login from "./components/content/Login/Login";

import Bienvenida from "./components/content/Inicio/Bienvenida";
import { Componente } from "./components/Componente";

export default function MyApp() {
  const toast = useRef(null);
  const ruta = "/react-project"; // Servidor"/react-project";
  return (
    <>
      <Toast ref={toast} />
      <Router>
        <main>
          <Routes>
            <Route path={ruta + "/login"} element={<Login />} />
            <Route
            path={ruta + "/"}
              element={
                <Componente>
                  
                  <Bienvenida />{" "}

                </Componente>
              }



            />

          </Routes>
        </main>
      </Router>
    </>
  );
}

import React, { useState, useRef, createContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../node_modules/primeflex/primeflex.css";
import "../node_modules/primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import Login from "./components/content/Login/Login";
import Bienvenida from "./components/content/Inicio/Bienvenida";
import { Componente } from "./components/Componente";
import BodySL from "./components/content/Solicitudes/BodySL";
import { BodyRD } from "./components/content/Rendiciones/BodyRD";
import FormularioSA from "./components/content/Solicitudes/Componentes/FormularioSA";

export const AppContext = createContext(null);

export default function MyApp() {

  const refCup = useRef(null);

  const [config, setConfig] = useState({});
  const [usuario, setUsuario] = useState({
    usuarioId: null,
    nombres: "",
    apellidos: "",
    email: "",
    username: "",
    password: "",
    rol: null,
    filial: null,

  });
  const toast = useRef(null);
  const ruta = "/shopping"; 

  const showError = (detalle) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: detalle,
      life: 3000,
    });
  };

  return (
    <AppContext.Provider
      value={{
        usuario,
      
        setUsuario,
        showError,
        config: config[0],
        ruta,
      }}
    >
      <Toast ref={toast} />
      <Router>
        <main>
          <Routes>
            <Route path={ruta + "/login"} element={<Login />} />
            <Route
              index
              element={
                <Componente>
                  <Bienvenida />{" "}
                </Componente>
              }
            />
            <Route
              path={ruta + "/"}
              element={
                <Componente>
                  <Bienvenida />{" "}
                </Componente>
              }
            />
            <Route
              path={ruta + "/home"}
              element={
                <Componente>
                  <Bienvenida />{" "}
                </Componente>
              }
            />
            <Route
              path={ruta + "/Inicio"}
              element={

                <Componente>
                  <Bienvenida />{" "}
                </Componente>

              }
            />
            <Route
              path={ruta + "/solicitudes"}
              element={
                <Componente>
                  <BodySL />
                </Componente>
              }
            />

            <Route
              path={ruta + "/solicitudes/agregar"}
              element={
                <Componente>
                  <FormularioSA/>
                </Componente>
              }
            />
            <Route
              path={ruta + "/rendiciones"}
              element={
                <Componente>
                  <BodyRD />{" "}
                </Componente>
              }
            />
          </Routes>
        </main>
      </Router>
    </AppContext.Provider>
  );
}

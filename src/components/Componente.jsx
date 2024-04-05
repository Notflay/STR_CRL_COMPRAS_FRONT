import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./partials/Header";
import Modulos from "./partials/Subpartials/Modulos";
import Layout from "./partials/Subpartials/Layout";
import { AppContext } from "../App";

export function Componente({ children }) {
  const [ windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { usuario, showError, ruta } = useContext(AppContext);
  const [SideBarActive, setSideBarActive] = useState(true);
  const navigate = useNavigate();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    //setSideBarActive(window.innerWidth >= 992);
  };

  const responsiveSize = () => {
    return window.innerWidth < 992;
  };

  const responsiveSizeMobile = () => {
    return window.innerWidth < 400;
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if ((usuario == null) | (usuario?.usuarioId == null)) {
      navigate(ruta + "/login", { replace: true });
    } else {
      console.log(usuario);
    }
  }, []);


  return (
    <>
      <Header
        setSideBarActive={setSideBarActive}
        SideBarActive={SideBarActive}
        responsiveSize={responsiveSize()}
        responsiveSizeMobile={responsiveSizeMobile()}
        usuario={usuario}
      />
      <Modulos
        responsiveSize={responsiveSize()}
        SideBarActive={SideBarActive}
        setSideBarActive={setSideBarActive}
        responsiveSizeMobile={responsiveSizeMobile()}
      />
      <Layout
        SideBarActive={SideBarActive}
        responsiveSizeMobile={responsiveSizeMobile()}
      >
        {children}
      </Layout>
    </>
  );
}

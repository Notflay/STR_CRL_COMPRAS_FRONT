import { Button } from 'primereact/button';
import React, { useState } from 'react'
import { Divider } from "primereact/divider";
import { AppContext } from "../../../App";
import HeaderRD from './Componentes/HeaderRD';
import Rendiciones from './Componentes/Rendiciones';
export function BodyRD() {
    const [estados, setEstados] = useState([]);
    const [rendiciones, setRendiciones] = useState([]);
    // const [primeraCarga, setPrimeraCarga] = useState(true);
    // const { usuario } = useContext(AppContext);
    // const navigate = useNavigate();
    const header = (
        <>
          <div className="flex justify-content-between flex-wrap">
            <div className="flex text-2xl align-items-center">
              Lista de Rendiciones
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <Button
                icon="pi pi-refresh"
                // onClick={() => {
                //   setFiltrado((prevFiltrado) => ({
                //     ...prevFiltrado,
                //   }));
                // }}
                severity="secondary"
              />
              <Button
                icon="pi pi-eraser"
                // onClick={() => {
                //   setFiltrado({
                //     rangoFecha: [new Date(now.getFullYear(), 0, 1), new Date()],
                //     nrRendicion: null,
                //     estados: null,
                //   });
                // }}
                severity="secondary"
              />
              <Button
                label="Exportar"
                icon="pi pi-upload"
                severity="secondary"
                style={{ backgroundColor: "black" }}
                // onClick={() => {
                //   exportExcel();
                // }}
              />
            </div>
          </div>
          <Divider />
          {/* <Filtrado
            estados={estados}
            setEstados={setEstados}
            filtrado={filtrado}
            setFiltrado={setFiltrado}
          /> */}
        </>
      );
    return (
        <>
        <div className="card">
          <HeaderRD
            estados={estados}
            setEstados={setEstados}
            // filtrado={filtrado}
            // setFiltrado={setFiltrado}
            header={header}
          />
          <Rendiciones
            header={header}
            rendiciones={rendiciones}
            setRendiciones={setRendiciones}
            // filtrado={filtrado}
            estados={estados}
          />
        </div>
      </>
    )
}

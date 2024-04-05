import { Button } from 'primereact/button';
import React, { useContext, useState } from 'react'
import { AppContext } from "../../../App";
import { Divider } from "primereact/divider";
import { useNavigate } from 'react-router-dom';
import HeaderSL from './HeaderSL';
import Solicitudes from './Solicitudes';
import FormRegistro from './Componentes/Subcomponentes/FormRegistro';


function BodySL({ responsiveSizeMobile }) {

    const [estados, setEstados] = useState([]);
    const [solicitudes, setSolicitudes] = useState([]);
    const { usuario, ruta } = useContext(AppContext);

    const navigate = useNavigate();

    const header = (
        <>
            <div className="flex justify-content-between flex-wrap">
                <div
                    className={`flex ${responsiveSizeMobile ? `text-xl` : `text-2xl`
                        } align-items-center`}> 
                       Lista de Solicitudes
                </div>
                <div div className="flex flex-row flex-wrap gap-2">
                    <Button
                        icon="pi pi-refresh"
                        onClick={() => {
                         setFiltrado((prevFiltrado) => ({
                            ...prevFiltrado,
                   }));
                    }}
                        severity="secondary"
                    />
                    <Button
                        icon="pi pi-eraser"
                        onClick={() => {
                             setFiltrado({
                                rangoFecha: [new Date(now.getFullYear(), 0, 1), new Date()],
                                nrRendicion: null,
                               estados: null,
                        });
                        }}
                        severity="secondary"
                    />
                    <Button
                        label="Agregar"
                        icon="pi pi-plus"
                        severity="success"
                        onClick={() => {
                            navigate(ruta + "/solicitudes/agregar");
                        }}
                        // disabled={usuario.TipoUsuario != 1}
                    />
                    <Button
                        label="Exportar"
                        icon="pi pi-upload"
                        severity="secondary"
                        style={{ backgroundColor: "black" }}
                        onClick={() => {
                            exportExcel();
                        }}
                    />

                </div>
            </div>
            <Divider />
            {/* <FormRegistro>

            </FormRegistro> */}
        </>
    );
    return (
        <>
            <div className="card">
                <HeaderSL
                    estados={estados}
                    setEstados={setEstados}
                    // filtrado={filtrado}
                    // setFiltrado={setFiltrado}
                    header={header}
                />
                <Solicitudes
                    responsiveSizeMobile={responsiveSizeMobile}
                    header={header}
                    estados={estados}
                    setEstados={setEstados}
                    // filtrado={filtrado}
                    // setFiltrado={setFiltrado}
                    solicitudes={solicitudes}
                    setSolicitudes={setSolicitudes}
                />
            </div> 
        </>
    );


}

export default BodySL

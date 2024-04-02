import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "primereact/button";
import {
  obtenerEmpleados,
  obtenerEstados,
} from "../../../../../services/axios.service";
import { AppContext } from "../../../../../App";
import { Dropdown } from "primereact/dropdown";

export default function Filtrado({
  estados,
  
  filtrado,
  setFiltrado,
}) {
  const { usuario } = useContext(AppContext);


  const [empleados, setEmpleados] = useState([]);

  const selectedOptionTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const complementoOptionTemplate = (option) => {
    return (
      <div className="flex">
        <div>{option.name}</div>
      </div>
    );
  };

  async function obtenerEmpleadosLocal() {
    await obtenerEmpleados()
      .then((response) => {
        const listEmpleados = response.data.Result.map((e) => ({
          id: e.empID,
          name: e.Nombres,
        }));
        setEmpleados(listEmpleados);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        console.log("Termino de obtener Empleados");
      });
  }

  useEffect(() => {
    //obtenerEstadosLocal();
    if (usuario.TipoUsuario != 1) {
      obtenerEmpleadosLocal();
    }
  }, []);

  function changeEstadoFilt(value) {
    setFiltrado((prevFiltrado) => ({
      ...prevFiltrado,
      estado: value,
    }));
  }


  return (
    <>
      <div className="grid mt-5">
        <div className="col-12 md:col-6 lg:col-3 ">
          <div className="mb-3 flex flex-column gap-2 justify-content-center">
            {" "}
            <Calendar
              value={filtrado.rangoFecha}
              onChange={(e) =>
                setFiltrado((prevFiltrado) => ({
                  ...prevFiltrado,
                  rangoFecha: e.value,
                }))
              }
              placeholder="Rango de Fechas"
              selectionMode="range"
              readOnlyInput
              dateFormat="dd/mm/yy"
              locale="es"
            />
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <div className="mb-3 flex flex-column gap-2 justify-content-center">
            <InputText
              value={filtrado.nrRendicion}
              onChange={(e) =>
                setFiltrado((prevFiltrado) => ({
                  ...prevFiltrado,
                  nrRendicion: e.target.value,
                }))
              }
              placeholder="N° de Rendición"
            />
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <div className="mb-3 flex flex-column gap-2 justify-content-center">
            {" "}
            <MultiSelect
              value={
                // usuario.TipoUsuario == 2 && filtrado.estados == null
                //   ? [estados[1]]
                //   :
                filtrado.estados
              }
              options={estados}
              onChange={(e) =>
                setFiltrado((prevFiltrado) => ({
                  ...prevFiltrado,
                  estados: e.value,
                }))
              }
              optionLabel="Nombre"
              placeholder="Estado"
              className="p-column-filter"
              maxSelectedLabels={1}
              style={{ minWidth: "10rem" }}
            />
          </div>
        </div>
        {/*
         <div className="col-12 md:col-6 lg:col-3">
          <div className="mb-3 flex flex-column gap-2 align-items-center">
            {" "}
            <Button
              icon="pi pi-times"
              rounded
              severity="secondary"
              aria-label="Search"
              onClick={() => {
                setFiltrado({
                  rangoFecha: [],
                  nrRendicion: null,
                  estados: null,
                });
              }}
              style={{ backgroundColor: "black" }}
            />
          </div>
        </div>
        */}

        {/* <div className="col-12 md:col-6 lg:col-3">
          <div className="mb-3 flex flex-column gap-2 align-items-center">
            {" "}
            <Button
              icon="pi pi-times"
              rounded
              severity="secondary"
              aria-label="Search"
              onClick={() => {
                setFiltrado({
                  rangoFecha: [],
                  nrRendicion: null,
                  estados: null,
                });
              }}
              style={{ backgroundColor: "black" }}
            />
          </div>
        </div> */}
      </div>
      {usuario.TipoUsuario != 1 && (
        <div className="grid ">
          <div className="col-12 md:col-6 lg:col-3">
            <div className="mb-3 flex flex-column gap-2 justify-content-center">
              <Dropdown
                value={filtrado.empleadoAsig}
                onChange={(e) =>
                  setFiltrado((prevSolicitudRD) => ({
                    ...prevSolicitudRD,
                    empleadoAsig: e.target.value,
                  }))
                }
                options={empleados}
                optionLabel="name"
                placeholder="Selecciona Empleado"
                filter
                valueTemplate={selectedOptionTemplate}
                itemTemplate={complementoOptionTemplate}
                className="w-full md:w-14rem"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

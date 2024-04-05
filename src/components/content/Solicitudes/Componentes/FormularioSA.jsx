import { ConfirmDialog } from 'primereact/confirmdialog';
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { AppContext } from "../../../../App";
import { Toast } from 'primereact/toast';
import { Divider } from 'primereact/divider';
import FormRegistro from './Subcomponentes/FormRegistro';

import { TableComprs } from './Subcomponentes/TableComprs';
import AnexoSP from './Subcomponentes/AnexoSP';
import { obtenerCondicion, obtenerProveedores, obtenerUbicacion } from '../../../../services/axios.service';
import FormDetalle from './Subcomponentes/FormDetalle';


function FormularioSA() {
  const { ruta } = useContext(AppContext);
  const toast = useRef(null);
  const navigate = useNavigate();

  const [proveedores, setProveedores] = useState([]);
  const [ubicaciones, setUbicacion] = useState([]);
  const [condiciones, setCondicion] = useState([]);

  const obtnerCondicio = async () => {
    const response = await obtenerCondicion();
    if (response.status === 200) {
      setCondicion(response.data.Result);
      console.log(response.data.Result);
    }
    else {

      console.error("no se encontro")
    }
  }

  const obtenerDireccion = async () => {
    const response = await obtenerUbicacion();

    if (response.status === 200) {
      setUbicacion(response.data.Result);
      console.log(response.data.Result)
    }

    else {
      console.error('Error al obtener proveedores:', response.statusText);
    }

  };


  const obtenerDatosProveedores = async () => {
    try {
      const response = await obtenerProveedores();

      if (response.status === 200) {
        console.log(response.data.Result)
        setProveedores(response.data.Result);
      } else {
        console.error('Error al obtener proveedores:', response.statusText);
      }
    } catch (error) {
      console.error('Error al obtener proveedores:', error.message);
    }
  };

  useEffect(() => {
    obtenerDatosProveedores();
    obtenerDireccion();
    obtnerCondicio();
  }, []);

  return (
    <>
      <div>
        <Toast ref={toast} />
        <ConfirmDialog />
        <div className="flex flex-wrap gap-2">
          <i className="pi pi-chevron-left cursor-pointer"
            onClick={() => {
              navigate(ruta + "/solicitudes")
            }}
          ></i>
          <div>
            Solicitud de Compras
          </div>
        </div>

        <Divider />
        <FormRegistro
          proveedores={proveedores}
          ubicaciones={ubicaciones}
          condiciones={condiciones}


        >

        </FormRegistro>

        <Divider />

        <TableComprs></TableComprs>

        <Divider />
        <AnexoSP></AnexoSP>
        <FormDetalle
          // setDetalle={setDetalle}
          // setDetalles={setDetalles}
          // setProductDialog={setProductDialog}
          // setDeleteProductDialog={setDeleteProductDialog}
        ></FormDetalle>




      </div>
    </>
  )
}

export default FormularioSA;
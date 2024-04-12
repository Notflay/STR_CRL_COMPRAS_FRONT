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
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from 'primereact/button';
import Solicitudes from '../Solicitudes';

// se agrego Usuario

function FormularioSA() {
  const { usuario, setUsuario, ruta } = useContext(AppContext);
  const toast = useRef(null);

  const navigate = useNavigate();
  // DropDowns usestate
  const [proveedores, setProveedores] = useState([]);
  const [ubicaciones, setUbicacion] = useState([]);
  const [condiciones, setCondicion] = useState([
  ]);

  const [solicitudes, setSolicitudes] = useState({

    DocDate: new Date(),
    requester: null,
    requestingArea: null,
    address: null,
    supplier: null,
    paymentCondition: null,
    agreementNumber: null,
    manager: null,
    productType: null,

    justification: null
  });
  function obtienedatsoaregistrar() {
    let body = {
      STRFECHA: formData.fecha.toLocaleDateString("es-PE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      STR_SOlicitante: formData.solicitante,
      STR_AREASOLICITANTE: formData.areaSolicitante,
      STR_DIRECCION: formData.direccion,
      STR_PROVEEDOR: formData.proveedor,
      STR_CONDICIONPAGO: formData.condicionPago,
      STR_NUMEROACUERDO: formData.numeroAcuerdo,
      STR_ENCARGADO: formData.encargado,
      STR_TIPOPRODUCTO: formData.tipoProducto,
      STR_JUSTIFICACION: formData.justificacion,
    };
    console.log(body); // Puedes mostrar el objeto JSON en la consola para verificar que esté correctamente formado
    return body;
  }



  //--------------------------------------------------------------------------
  const [loadingTemplate, setLoadingTemplate] = useState(false);

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

    // SetDropDowns();
  }, []);

  if (loadingTemplate) {
    return (
      <div className="card flex justify-content-center">
        <Toast ref={toast} />
        <ProgressSpinner />

      </div>
    )
  }

  const showError = (mensaje) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: mensaje,
      life: 3000,
    });
  };

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
          usuario={usuario}
          setSolicitudes={setSolicitudes}
          solicitudes={solicitudes}
          ubicaciones={ubicaciones}
          condiciones={condiciones}
        // showError={showError}
        // items={items}
        />
        <Divider />

        <TableComprs>

        </TableComprs>

        <Divider />
        <AnexoSP>

        </AnexoSP>



        <div className="col-12 md:col-8 lg:col-2">

          <div className="mb-3 flex flex-column gap-2 justify-content-center">
            <Button
              icon="pi pi-trash"
              label="GUARDAR"
              onClick={() => {
                const dataToSend = obtienedatsoaregistrar();
                // Aquí puedes enviar `dataToSend` a través de una solicitud HTTP o realizar cualquier acción necesaria con los datos
              }}

            />
          </div>
        </div>






      </div>
    </>
  )
}

export default FormularioSA;
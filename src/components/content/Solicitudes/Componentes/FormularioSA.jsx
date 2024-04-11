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

// se agrego Usuario

function FormularioSA() {
  const { usuario, ruta } = useContext(AppContext);
  const toast = useRef(null);
  const navigate = useNavigate();
  // DropDowns usestate
  const [proveedores, setProveedores] = useState([]);
  const [ubicaciones, setUbicacion] = useState([]);
  const [condiciones, setCondicion] = useState([
  ]);
  const [solicitudRD, SetSolicitudRD] = useState({
    Fec: null,

  })

  // function obtieneJsonAregistrar(){
  //    let body= {
  //     CRL_Fecha: usuario
  //    }
  // }


  // const [items, setItems] = useState([]);
  //--------------------------------------------------------------------------
  const [loadingTemplate, setLoadingTemplate] = useState(false);
  // const esModoRegistrar = location.pathname.includes("agregar");
  //  nueva constante ///
  //  async function  SetDropDowns(){
  //   setLoadingTemplate(true);
  //    try{
  //     const responses = await Promise.all ([
  //       obtenerCondicion(),
  //       obtenerUbicacion(),
  //       obtenerProveedores(),

  //     ]);
  //      responses.forEach((response, index)=>{
  //       const{CodRespuesta,DescRespuesta,Result}= response.data;
  //       if (CodRespuesta!== 99){
  //         switch(index){
  //           case 0 :
  //             setItems(Result);
  //             console.log(setItems)
  //             break;
  //           case 1:
  //             setCondicion(Result);
  //             console.log(setCondicion)
  //             break;
  //           case 2:
  //             setUbicacion(Result);
  //             console.log(setUbicacion)
  //             break;
  //           case 3:
  //             setProveedores(Result);
  //             console.log(setProveedores)
  //             break;
  //           default:
  //             break;
  //         }
  //       } else{
  //         console.log ( response, index);
  //         showError(DescRespuesta);
  //       }
  //      });
  //    }catch (error) {
  //     console.log(error);
  //     showError("Error en el servidor");
  //   } finally {
  //     if (esModoRegistrar) setLoadingTemplate(false);
  //     //setLoadingTemplate(false);
  //   }

  //  }
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
          ubicaciones={ubicaciones}
          condiciones={condiciones}
        // showError={showError}
        // items={items}


        >

        </FormRegistro>

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

              />
          </div>
        </div>






      </div>
    </>
  )
}

export default FormularioSA;
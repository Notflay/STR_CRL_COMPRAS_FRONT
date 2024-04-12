import API from "./axios.config";

export const iniciaSesion = (body) => {
  return API.post("/sesion/login", body, {
    validateStatus: function (status) {
      return status < 500;
    },
  });
};

export const obtenerProveedores = () => {
  return API.get("/proveedor", {
    validateStatus: function (status) {
      return status < 500;
    },
  });
};
  export const obtenerUbicacion = () => {
    return API.get("/ubicacion", {
      validateStatus: function (status) {
        return status < 500;
      },
    });
  
};

export const obtenerCondicion= () => {
  return API.get("/condicion", {
    validateStatus: function (status) {
      return status < 500;
    },
  });

  

};

export const ObtenerItems = (tipo, id) => {
  return API.get(`/item/${tipo}?area=${id}`, {
    validateStatus: function (status) {
      return status < 500;
    },
  });
};

export const ObtenerDimensiones = (id) => {
  return API.get(`/dimension/${id}`, {
    validateStatus: function (status) {
      return status < 500;
    },
  });
};
// export const obtnerArticulos=()=>{
//   return API.get("/item",{
//     validateStatus:function(status){
//       return status<500;
//     }
//   });
// }
export const obtenerProyecto=()=>{
 return API.get("/dimension/project",{
validateStatus:function(status){
   return status<500;
  }
 });
}
// export const obtenerLineaNegocio=()=>{
//   return API.get("/dimension/1",{
//     validateStatus:function(status){
//       return status<500;
//     }
//   });
// }

// export const obtenerSucursal=()=>{
//   return API.get("/dimension/2",{
//     validateStatus:function(status){
//       return status<500;
//     }
//   });
// }
// export const obtenerArea=()=>{
//   return API.get("/dimension/4",{
//     validateStatus:function(status){
//       return status<500;
//     }
//   });
// }

// export const obtenerCentroCosto=()=>{
//   return API.get("/dimension/5",{
//     validateStatus:function(status){
//       return status<500;
//     }
//   });
// }
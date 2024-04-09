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

export const obtnerArticulos=()=>{
  return API.get("/item",{
    validateStatus:function(status){
      return status<500;
    }
  });
}


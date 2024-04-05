import { FileUpload } from 'primereact/fileupload';
import React, { useRef, useState } from 'react'

function AnexoSP({
    solicitudRD,
    setSolicitudRD,
    adjuntos,
    setAdjuntos,
    children,
    fileUploadRef,
    changeFileTitle,
    solicitando,
    showError,
    estadosEditables,
    showSuccess,
    usuario,
})

{

    const [loadingSkeleton, setLoadingSkeleton] = useState(false);
    const toast = useRef(null);
  return (
    <div className='card'>
       <small className="p-error">Adjunto es requerido</small>

       <FileUpload
        // files={adjuntos}
        name="demo[]"
        ref={fileUploadRef}
        // onDoubleClick={() => {
        //   console.log("dobleclick");
        //   if (adjuntos.length > 0) {
        //     descargarAdjuntos();
        //   }
        // }}
        // itemTemplate={(file) => (
        //   <Card eliminarAdjunto={eliminarAdjunto} file={file} />
        // )}
        className="fileSL"
        multiple
        accept="*"
        //maxFileSize={1000000}
        emptyTemplate={
          <p className="m-0">Arrastre y suelte archivos aquí para cargarlos.</p>
        }
        on
        // onSelect={(e) => {
        //   setAdjuntos(e.files);
        //   console.log(e.files);
        // }}
        // onRemove={(e) => {
        //   let adjs = adjuntos.filter((ad) => ad != e.file);
        //   setAdjuntos(adjs);
        //   updateListUpload();
        // }}
        // onClear={(e) => {
        //   setAdjuntos([]);
        //   setSolicitudRD((prevSolicitudRD) => ({
        //     ...prevSolicitudRD,
        //     rutaAnexo: [],
        //   }));
        // }}
        // uploadLabel="Cargar"
        // chooseLabel="Agregar"
        // cancelLabel="Cancelar"
        // customUpload
        // uploadHandler={handleUpload}
        // // disabled={
        // //   !estadosEditables.includes(solicitudRD.estado) |
        // //   (usuario.TipoUsuario != 1) |
        // //   loadingSkeleton
        // // }
        // uploading={true}
      ></FileUpload>
    </div>
  )
}

export default AnexoSP

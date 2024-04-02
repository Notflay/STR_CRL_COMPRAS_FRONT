import { DataTable } from "primereact/datatable";
import { Column } from 'primereact/column'
import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { AppContext } from "../../../../App";
function Rendiciones({
    header,
    rendiciones,
    setRendiciones,
    filtrado,
    estados,
})

{
const navigate = useNavigate();
const { usuario } = useContext(AppContext);
const toast = useRef(null);
const [loading, setLoading] = useState(false);
const [loadingBtn, setLoadingBtn] = useState(false);
const { ruta } = useContext(AppContext);
const [primerCarga, setPrimerCarga] = useState(true);
const primerCargaRef = useRef(true);
  return (
    <div>
    <Toast ref={toast} />
    <ConfirmDialog />
    <DataTable
      value={rendiciones}
      sortMode="multiple"
      paginator
      rows={5}
      rowsPerPageOptions={[5, 10, 25, 50]}
      tableStyle={{ minWidth: "12rem" }}
      header={header}
      loading={loading}
    >
      <Column
        header="#"
        headerStyle={{ width: "3rem" }}
        // body={(data, options) => options.rowIndex + 1}
      ></Column>
      <Column
        field="ID"
        header="Código"
        style={{ width: "3rem" }}
        className="font-bold"
      ></Column>
      <Column
        field="STR_NRRENDICION"
        header="N° Rendición"
        style={{ minWidth: "12rem" }}
      ></Column>
      <Column
        field="STR_ESTADO_INFO"
        header="Estado"
        style={{ minWidth: "8rem" }}
        // body={statusBodyTemplate}
      ></Column>
      <Column
        field="STR_EMPLDASIG"
        header="Emp. Asignado"
        style={{ minWidth: "5rem" }}
      ></Column>
      <Column
        field="STR_SOLICITUD"
        header="N° de la SR"
        style={{ minWidth: "8rem" }}
      ></Column>
      <Column
        field="STR_FECHAREGIS"
        header="Fecha de Solicitud"
        style={{ minWidth: "10rem" }}
        // body={fecBodyTemplate}
      ></Column>
      <Column
        field="STR_TOTALRENDIDO"
        // body={priceBodyTemplate}
        header="Monto Rendido"
        style={{ minWidth: "12rem" }}
      ></Column>
      <Column
        field="STR_FECHAREGIS"
        header="Fecha RD"
        style={{ minWidth: "10rem" }}
        // body={fecBodyTemplate}
      ></Column>
      <Column
        field="STR_NRCARGA"
        header="Carga Docs"
        style={{ minWidth: "7rem" }}
      ></Column>
      <Column
        field="STR_DOCENTRY"
        header="DocEntry"
        style={{ minWidth: "7rem" }}
      ></Column>
      <Column
        header="Acciones"
        // body={actionBodyTemplate}
        exportable={false}
        style={{ minWidth: "10rem" }}
        frozen
        alignFrozen="right"
      ></Column>
      <Column
        field="STR_MOTIVOMIGR"
        header="Mensaje de Migración"
        style={{ minWidth: "20rem" }}
      ></Column>
    </DataTable>
  </div>
  )
}

export default Rendiciones

import { Toast } from 'primereact/toast'
import { DataTable } from "primereact/datatable";
import React, { useRef, useState } from 'react'
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Column } from 'primereact/column';
function Solicitudes({
    header,
    filtrado,
    solicitudes,
    setSolicitudes,
}) {
    const toast = useRef(null);
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <Toast ref={toast} />
            <ConfirmDialog />
            <DataTable
                value={solicitudes}
                sortMode="multiple"
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                tableStyle={{ minWidth: "12rem" }}
                header={header}
                loading={loading}
                emptyMessage="No se encontraron Solicitudes"

            >
                {/* <Column
                    header="#"
                    headerStyle={{ width: "3rem" }}
                //   body={( options) => options.rowIndex + 1}
                ></Column> */}
                <Column
                    // field="ID"
                    header="N° de req"
                    style={{ width: "7rem" }}
                    className="font-bold"
                ></Column>
                <Column
                    // field="STR_NRRENDICION"
                    header="Fecha"
                    style={{ minWidth: "7rem" }}
                ></Column>
                <Column
                    // field="STR_ESTADO_INFO"
                    header="Area"
                    style={{ minWidth: "7rem" }}
                    // body={statusBodyTemplate}
                ></Column>
                <Column
                   
                    header="Proveedor"
                    style={{ minWidth: "8rem" }}
                ></Column>
                <Column
                    // field="STR_FECHAREGIS"
                    header="Condicion de Pago "
                    style={{ minWidth: "12rem" }}
                    // body={fecBodyTemplate}
                ></Column>
                <Column
                    // field="STR_TOTALSOLICITADO"
                    // body={priceBodyTemplate}
                    header="Estado"
                    style={{ minWidth: "7rem" }}
                ></Column>
                <Column
                    // field="STR_DOCENTRY"
                    header="Sap DocNum"
                    style={{ minWidth: "10rem" }}
                ></Column>

                <Column
                    header="Acciones"
                    // body={actionBodyTemplate}
                    exportable={false}
                    style={{ minWidth: "10rem" }}
                // frozen={true}
                // alignFrozen="right"
                ></Column>


            </DataTable>
        </div>
    )
}

export default Solicitudes

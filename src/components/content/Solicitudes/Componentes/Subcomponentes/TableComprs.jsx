import { Column } from 'primereact/column';
import { ConfirmDialog } from 'primereact/confirmdialog'
import { DataTable } from 'primereact/datatable';
import { Toast } from 'primereact/toast'
import React, { useRef, useState } from 'react'

export function TableComprs({
    header
}) {
    
    const [loading, setLoading] = useState(false);
    const toast = useRef(null);
    return (
        <>
            <div>
                <Toast ref={toast} />
                <ConfirmDialog />
                <DataTable
                    
                    sortMode="multiple"
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: "12rem" }}
                    header={header}
                    loading={loading}
                    emptyMessage="No se encontraron Solicitudes"
                // scrollable
                // scrollHeight="400px"
                >
                    {/* {responsiveSizeMobile ? (
          <></>
        ) : (
          <> */}
                    <Column
                        header="N°"
                        headerStyle={{ width: "3rem" }}
                        body={(data, options) => options.rowIndex + 1}
                    ></Column>
                    <Column
                        // field="ID"
                        header="Cod.Producto"
                        style={{ width: "10rem" }}
                        className="font-bold"
                    ></Column>
                    <Column
                        // field="STR_NRRENDICION"
                        header="Descripción"
                        style={{ minWidth: "10rem" }}
                    ></Column>
                    <Column
                        // field="STR_ESTADO_INFO"
                        header="Almacen"
                        style={{ minWidth: "10rem" }}
                        // body={statusBodyTemplate}
                    ></Column>
                    <Column
                        // field="STR_EMPLDASIG"
                        header="Stock"
                        style={{ minWidth: "10rem" }}
                    ></Column>
                    <Column
                        // field="STR_NRSOLICITUD"
                        header="Cantidad Necesaria"
                        style={{ minWidth: "10rem" }}
                    ></Column>
                    <Column
                        // field="STR_FECHAREGIS"
                        header="Precio"
                        style={{ minWidth: "10rem" }}
                        // body={fecBodyTemplate}
                    ></Column>
                    <Column
                        // field="STR_TOTALSOLICITADO"
                        // body={priceBodyTemplate}
                        header="Fecha Necesaria"
                        style={{ minWidth: "10rem" }}
                    ></Column>
                    <Column
                        // field="STR_DOCENTRY"
                        header="Preveedor"
                        style={{ minWidth: "10rem" }}

                    ></Column>
                    <Column
                        // field="STR_CARGADOCS"
                        header="Proyecto"
                        style={{ minWidth: "10rem" }}

                    ></Column>
                    <Column
                        header="Linea de negocio"
                        style={{ minWidth: "10rem" }}

                    ></Column>

<Column
                        header="Sucursal"
                        style={{ minWidth: "10rem" }}

                    ></Column>
                                        <Column
                        header="Area"
                        style={{ minWidth: "10rem" }}

                    ></Column>
                    <Column
                        header="Centro de Costo"
                        style={{ minWidth: "10rem" }}

                    ></Column>
                                        <Column
                        header="Comentario"
                        style={{ minWidth: "10rem" }}

                    ></Column>

<Column
                        header="Acciones"
                        style={{ minWidth: "10rem" }}

                    ></Column>
                    {/* </>
        )} */}
                </DataTable>
            </div>

        </>
    )
}

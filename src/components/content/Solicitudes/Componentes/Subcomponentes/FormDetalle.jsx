import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import React from 'react'

function FormDetalle({
    setDetalle,
    detalles,
}) {
    return (
        <>
        <input type="text" />

    <button>holamundo</button>
            {/* <Dialog

                //    visible={productDialog}
                //style={{ width: "32rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Agregar Concepto"
                modal
                className="p-fluid xl:max-w-30rem w-full max-w-20rem"
            //    footer={productDialogFooter}
            //    onHide={hideDialog}
            >
                <div className="field">
                    <label htmlFor="name" className='font-bold'>
                        Articulo
                    </label>
                    <div className="card flex">
                        <Dropdown
                            // options={items}
                            optionLabel="name"
                            placeholder="Articulo"
                            filter
                            // valueTemplate={selectedOptionDefault}
                            // itemTemplate={complementoOptionDefault}
                            className="w-full md:w-14rem"
                            // disabled={editable}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="name"className='font-bold'>
                            seleccionar Proyecto
                        </label>
                        <div className="card flex">
                            <Dropdown
                            //  value={detalle.STR_PROYECTO}
                            //  onChange={(e) =>
                            //    setDetalle((prevDetalle) => ({
                            //      ...prevDetalle,
                            //      STR_PROYECTO: e.target.value,
                            //    }))
                            //  }
                            //  options={proyectos}
                             optionLabel="name"
                             placeholder="Proyecto"
                             valueTemplate={selectedOptionDefault}
                             itemTemplate={complementoOptionDefault}
                             className="w-full md:w-14rem"
                             disabled={editable}
                           
                            />


                        </div>
                    </div>
                </div>

            </Dialog> */}

        </>
    )
}

export default FormDetalle

import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import React, { useRef } from 'react'

function FormDetalle({
    setDetalle,
    detalles,
    productDialog,
    setProductDialog
}) {
    // const refCup = useRef(null);
    const hideDialog = () => {
        // setSubmitted(false);
        setProductDialog(false);
        //   setDetalle(emptyProduct);
    };
    return (
        <>
            <Dialog
                visible={productDialog}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Agregar Concepto"
                modal
                className="p-fluid xl:max-w-30rem max-w-20rem"
                // footer={productDialogFooter}
                onHide={hideDialog}
            >
                <div className="fied">
                    <label htmlFor="name" className='font-bold'>
                        Árticulo

                    </label>
                    <div className="card flex">
                        <Dropdown
                            // value={detalle.articulo}
                            // onChange={(e) => changeItemFrm(e.target.value)}
                            // options={items}
                            optionLabel="name"
                            placeholder="Articulo"
                            filter
                            // valueTemplate={selectedOptionTemplate}
                            // itemTemplate={complementoOptionTemplate}
                            className="w-full md:w-14rem"
                            // disabled={
                            //     !estadosEditables.includes(estado) | (usuario.TipoUsuario != 1)
                            // }
                        />
                    </div>
                    {/* {submitted && detalle.articulo.id == null && ( */}
            <small className="p-error">Articulo es requerido</small>
          {/* )} */}
                </div>
                <div className=""></div>
            </Dialog>



        </>
    )
}

export default FormDetalle

import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import React, { useRef } from 'react'

function FormDetalle({
    setDetalle,
    detalles,
    setProductDialog
}) {
    // const refCup = useRef(null);
    const hideDialog = () => {
    //   setSubmitted(false);
    setProductDialog(false);
    //   setDetalle(emptyProduct);
    };
    return (
        <>
        <Dialog header="Header" visible={setProductDialog} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            <p className="m-0">
                <input type="text" />
            
            </p>
        </Dialog>

             

        </>
    )
}

export default FormDetalle

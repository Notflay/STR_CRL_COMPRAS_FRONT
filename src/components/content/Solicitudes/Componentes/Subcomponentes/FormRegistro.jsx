import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea';
import { classNames } from 'primereact/utils';
import React, { useState } from 'react'
import FormDetalle from './FormDetalle';


function FormRegistro({
    ubicaciones,
    proveedores,
    condiciones,
    editable

}) {
    const [date, setDate] = useState(null);

    const [value, setValue] = useState('');
    const [ubicacion, setSelectUbicacion] = useState(null);
    const [proveedor, handleChangeProveedor] = useState(null);
    const [condicion, setSelectedCondicion] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const products = [
        { name: 'Producto', code: "serveProducto" },

    ];


    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
    };
    // variables de proveedores
    const selectedOptionTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div className="">
                        <div className="">{option.CardName}</div>
                    </div>
                </div>
            )
        }
        return <span>{props.placeholder}</span>;
    }



    const complementoOptionTemplate = (option) => {
        return (
            <div className="flex">
                <div>
                    {option.LicTradNum} - {option.CardName}
                </div>
            </div>
        );
    };



    //----------------------------------------------------
    const selectedOptionUbicacion = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div>
                        <div>{option.PrcName}</div>
                    </div>
                </div>
            );
        }
        return <span>{props.placeholder}</span>;
    };

    const complementoOptionUbicacion = (option) => {
        return (
            <div className="flex">
                <div>
                    {option.PrcName}
                </div>
            </div>
        );
    };


    const selectedOptionCondiciones = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div className="">
                        <div className="">{option.name}</div>
                    </div>
                </div>
            );
        }
        return <span>{props.placeholder}</span>;
    };

    const complementoOptionCondiciones = (option) => {
        return (
            <div className="flex">
                <div>{option.name}</div>
            </div>
        );
    };


    return (
        <>
            <div className="grid mt-5">

                <div className="col-12 md:col-6 lg:col-3">
                    <div className="mb-3 flex flex-column gap-2 justify-content-center">
                        <label htmlFor="buttondisplay" className="font-bold block mb-2">
                            Fecha:
                        </label>

                        <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
                    </div>

                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <label htmlFor="texSolicitante" className="font-bold block mb-3">
                        Solicitante:
                    </label>

                    <div className="mb-3 flex flex-column gap-2 justify-content-center">
                        <InputText
                            placeholder=""
                            disabled
                        >

                        </InputText>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <label htmlFor="texSolicitante" className="font-bold block mb-3">
                        Área Solicitante:
                    </label>

                    <div className="mb-3 flex flex-column gap-2 justify-content-center">
                        <InputText
                            placeholder=""
                            disabled
                        >

                        </InputText>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <label htmlFor="texSolicitante" className="font-bold block mb-3">
                        Dirección:
                    </label>

                    <div className="mb-3 flex flex-column gap-2 justify-content-center">

                        <Dropdown
                            value={ubicacion}
                            onChange={(e) => setSelectUbicacion(e.value)}
                            options={ubicaciones}
                            optionLabel="PrcName"
                            placeholder="Seleccionar ..."
                            className="w-full md:w-14rem"
                            valueTemplate={selectedOptionUbicacion}
                            itemTemplate={complementoOptionUbicacion}





                        />


                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-4">
                    <label htmlFor="texSolicitante" className="font-bold block mb-3">
                        Proveedor:
                    </label>

                    <div className="mb-3 flex flex-column gap-2 justify-content-center">
                        <Dropdown
                            value={proveedor}
                            onChange={(e) => handleChangeProveedor(e.value)}
                            options={proveedores}
                            optionLabel="CardName"
                            placeholder="Seleccionar..."
                            filter
                            filterBy="CardName,LicTradNum"
                            filterMatchMode="contains" // Puedes ajustar el modo de filtrado según tus necesidades
                            valueTemplate={selectedOptionTemplate}
                            itemTemplate={complementoOptionTemplate}
                            className="w-4rem md:w-20rem"
                            disabled={editable}
                        // loading={proveedores.length < 1}
                        />
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <label htmlFor="texSolicitante" className="font-bold block mb-3">
                        Condición de Pago:
                    </label>

                    <div className="mb-3 flex flex-column gap-2 justify-content-center">
                        <Dropdown
                            value={condicion}
                            onChange={(e) => setSelectedCondicion(e.value)}
                            options={condiciones}
                            optionLabel="PrcName"
                            placeholder="Seleccionar Condición"
                            className="w-full md:w-14rem"
                            valueTemplate={selectedOptionCondiciones}
                            itemTemplate={complementoOptionCondiciones} />

                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <label htmlFor="texSolicitante" className="font-bold block mb-3">
                        Nro de acuerdo visado:
                    </label>

                    <div className="mb-3 flex flex-column gap-2 justify-content-center">
                        <InputText
                            placeholder=""

                        >

                        </InputText>
                    </div>
                </div>


                <div className="col-12 md:col-6 lg:col-3">
                    <label htmlFor="texSolicitante" className="font-bold block mb-3">
                        Encargado:
                    </label>

                    <div className="mb-3 flex flex-column gap-2 justify-content-center">
                        <InputText
                            placeholder=""
                            disabled

                        >

                        </InputText>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <label htmlFor="texSolicitante" className="font-bold block mb-3">
                        Tipo de Producto:
                    </label>

                    <div className="mb-3 flex flex-column gap-2 justify-content-center">
                        <Dropdown value={selectedProduct}
                            onChange={(e) => setSelectedProduct(e.value)}
                            options={products} optionLabel="name"
                            editable placeholder="Select a Product" className="w-full md:w-14rem" />
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-5">
                    <label htmlFor="texSolicitante" className="font-bold block mb-3">
                        Justificacion:
                    </label>

                    <div className="mb-3 flex flex-column gap-2 justify-content-center">
                        <InputTextarea autoResize
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            rows={5} cols={30} />
                    </div>
                </div>

            </div>
            <div className="grid mt-5">
                <div className="mb-3 flex flex-column gap-2 justify-content-center">
                    <Button
                        icon="pi pi-plus"
                        label="AGREGAR DETALLE"
                        severity="success"
                        onClick={toggleFormulario}
                    />
                    {mostrarFormulario && <FormDetalle />}
                </div>
                <div className="col-12 md:col-8 lg:col-2">

                    <div className="mb-3 flex flex-column gap-2 justify-content-center">
                        <Button
                            icon="pi pi-trash"
                            label="ELIMINAR"
                            severity="success"
                            raised />
                    </div>
                </div>
            </div>


        </>
    )
}

export default FormRegistro

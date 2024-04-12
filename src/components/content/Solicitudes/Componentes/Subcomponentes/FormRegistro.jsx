import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea';
import { classNames } from 'primereact/utils';
import React, { useEffect, useState } from 'react'
import FormDetalle from './FormDetalle';
import { ObtenerDimensiones, ObtenerItems, obtenerProveedores } from '../../../../../services/axios.service';

function FormRegistro({
    ubicaciones,
    usuario,
    condiciones,
    editable,
    solicitud,
    setSolicitudes



}) {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [dim1, setDim1] = useState([]);
    const [dim2, setDim2] = useState([]);
    const [dim4, setDim4] = useState([]);
    const [dim5, setDim5] = useState([]);
    const [proveedores, setProveedores] = useState([]);
    // const [sucursalop, setSucursal] = useState([]);
    // const [areas, setArea] = useState([]);
    const [proyectoss, setProyectos] = useState([]);
    // const [articulo, setArticulos] = useState([]);
    // const [lnegocios, setlnegocio] = useState([]);
    const [productDialog, setProductDialog] = useState(false);

    // const [centros, setcentros] = useState(null);

    const [value, setValue] = useState('');
    const [ubicacion, setSelectUbicacion] = useState(null);
    const [proveedor, handleChangeProveedor] = useState(null);
    const [condicion, setSelectedCondicion] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const products = [
        { name: 'Producto', code: "serveProducto" },
    ];


    const [visible, setVisible] = useState(false);


    const openNew = () => {
        // setDetalle(emptyProduct);
        // obtenerCentroCostoLocal();
        // setSubmitted(false);
        setProductDialog(true);
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

    // form detalle
    async function SetDropDowns() {
        try {
            const responses = await Promise.all([
                ObtenerItems("art", usuario.filial.U_ST_Filial),
                ObtenerDimensiones(1), // Unidad de Negocio
                ObtenerDimensiones(2), // Filial
                ObtenerDimensiones(4), // AREA
                ObtenerDimensiones(5), // Centro de Costo
            ]);
            responses.forEach((response, index) => {
                const { CodRespuesta, DescRespuesta, Result } = response.data;
                if (CodRespuesta !== "99") {
                    switch (index) {
                        case 0:
                            setItems(Result);
                            break;
                        case 1:
                            setDim1(Result);
                            break;
                        case 2:
                            setDim2(Result);
                            break;
                        case 3:
                            setDim4(Result);
                            break;
                        case 4:
                            setDim5(Result);
                            break;

                    }
                } else {
                    console.log(response, index);
                    showError(DescRespuesta);
                }
            });

        } catch (error) {
            console.log(error);
            showError("Error en el servidor");
        } finally {
            //if (esModoRegistrar) setLoadingTemplate(false);
            //setLoadingTemplate(false);
        }
    }

    // centros
    // const obtnerdatoscentro = async () => {
    //     const response = await obtenerCentroCosto();

    //     if (response.status === 200) {
    //         console.log(response.data.Result)
    //         setcentros(response.data.Result)
    //     }
    // }
    // //Area
    // const obtnerdatosArea = async () => {
    //     const response = await obtenerArea();

    //     if (response.status === 200) {
    //         console.log(response.data.Result)
    //         setArea(response.data.Result)
    //     }
    // }
    // //Proyectos
    const obtnerdatosProyectos = async () => {
        const response = await obtenerProyecto();

        if (response.status === 200) {
            console.log(response.data.Result)
            setProyectos(response.data.Result)
        }
    }
    // // LNegocios
    // const obtnerDtaosLNegocios = async () => {
    //     const response = await obtenerLineaNegocio();
    //     if (response.status === 200) {
    //         console.log(response.data.Result)
    //         setlnegocio(response.data.Result)
    //     }
    //     else {
    //         console.error(' Error al obtener los datos del articulo')
    //     }

    // }
    // //-------------
    // //Articulos
    // const obtnerDatosArticulos = async () => {
    //     const response = await obtnerArticulos();


    //     if (response.status === 200) {
    //         console.log(response.data.Result)
    //         setArticulos(response.data.Result);
    //     }
    //     else {
    //         console.error('Error al obtener los datos del articulo')
    //     }
    // }


    const obtenerDatosProveedores = async () => {
        try {
            const response = await obtenerProveedores();

            if (response.status === 200) {
                console.log(response.data.Result)
                setProveedores(response.data.Result);
            } else {
                console.error('Error al obtener proveedores:', response.statusText);
            }
        } catch (error) {
            console.error('Error al obtener proveedores:', error.message);
        }
    };

    // // sucursal 
    // const obtnerdatosSucursal = async () => {
    //     try {
    //         const response = await obtenerSucursal();
    //         if (response.status === 200) {
    //             console.log(response.data.Result)
    //             setSucursal(response.data.Result)
    //         }
    //     }
    //     catch (error) {
    //         console.error('Error al obtener  Proveedores', error.message);
    //     }
    // }

    useEffect(() => {
        // obtnerDatosArticulos();
        obtenerDatosProveedores();
        obtnerdatosProyectos();
        // obtnerDtaosLNegocios();
        // obtnerdatosSucursal();
        // obtnerdatosArea();
        // obtnerdatoscentro();
        SetDropDowns()
    }, [])



    //------------------------------------------------------------------------------------

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
                        <label htmlFor="date" className="font-bold block mb-2">
                            Fecha:
                        </label>

                        <Calendar
                            // value={solicitud.DocDate}
                            onChange={(e) => {
                                setSolicitudes((prevRequerimiento) => ({
                                    ...solicitud,
                                    Date: e.target.value,
                                }));
                            }}
                            showIcon />
                    </div>

                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <label htmlFor="requester" className="font-bold block mb-3">
                        Solicitante:
                    </label>

                    <div className="mb-3 flex flex-column gap-2 justify-content-center">
                        <InputText
                            value={usuario.nombres + usuario.apellidos}
                            plceholder=""
                            disabled
                        >

                        </InputText>
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <label htmlFor="requestingArea" className="font-bold block mb-3">
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
                    <label htmlFor="address" className="font-bold block mb-3">
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
                <div className="col-12 md:col-6 lg:col-3">
                    <label htmlFor="supplier" className="font-bold block mb-3">
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
                            className="w-4rem md:w-14rem"
                            disabled={editable}
                        // loading={proveedores.length < 1}
                        />
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <label htmlFor="paymentCondition" className="font-bold block mb-3">
                        Condición de Pago:
                    </label>

                    <div className="mb-3 flex flex-column gap-2 justify-content-center">
                        <Dropdown
                            value={condicion}
                            onChange={(e) => setSelectedCondicion(e.value)}
                            options={condiciones}
                            optionLabel="PrcName"
                            placeholder="Seleccionar Condición"
                            className="w-full md:w-19rem"
                            valueTemplate={selectedOptionCondiciones}
                            itemTemplate={complementoOptionCondiciones} />

                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <label htmlFor="agreementNumber" className="font-bold block mb-3">
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
                    <label htmlFor="manager" className="font-bold block mb-3">
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
                    <label htmlFor="productType" className="font-bold block mb-3">
                        Tipo de Producto:
                    </label>

                    <div className="mb-3 flex flex-column gap-2 justify-content-center">
                        <Dropdown value={selectedProduct}
                            onChange={(e) => setSelectedProduct(e.value)}
                            options={products} optionLabel="name"
                            editable placeholder="Select a Product" className="w-full md:w-14rem" />
                    </div>
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                    <label htmlFor="justification" className="font-bold block mb-3">
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
                        onClick={openNew}
                    />

                    {visible && <FormDetalle setVisible={setVisible} />}
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
            <FormDetalle
                // articulo={articulo}
                // setDetalle={setDetalle}
                // setDetalles={setDetalles}
                setLoading={setLoading}
                productDialog={productDialog}
                proveedores={proveedores}
                proyectoss={proyectoss}
                // lnegocios={lnegocios}
                // sucursalop={sucursalop}
                // areas={areas}
                // centros={centros}

                items={items}
                dim1={dim1}
                dim2={dim2}
                dim4={dim4}
                dim5={dim5}

                setProductDialog={setProductDialog}
            // setDeleteProductDialog={setDeleteProductDialog}
            ></FormDetalle>

        </>
    )
}

export default FormRegistro

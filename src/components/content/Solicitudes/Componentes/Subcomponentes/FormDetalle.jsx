import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useRef, useState } from 'react'

function FormDetalle({
    setDetalle,
    detalles,
    proveedores,
    productDialog,
    setProductDialog,
    articulo,
    editable

}) {
    const [proveedor, handleChangeProveedor] = useState(null);
    const [value1, setValue1] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    // const items = useRef(Array.from({ length: 100000 }));
    const [loading, setLoading] = useState(false);
    const loadLazyTimeout = useRef();

    const [selectArticulo, setSelectArticulo] = useState(null);
    // const refCup = useRef(null);
    const hideDialog = () => {
        // setSubmitted(false);
        setProductDialog(false);
        //   setDetalle(emptyProduct);
    };


    // proveedor

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
    //---------------------------------------------------


    const ArticuloOptionTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div className="">
                        <div className="">{option.name}</div>
                    </div>
                </div>
            )
        }
        return <span>{props.placeholder}</span>;
    }

    const ArticulosOptionTemplate = (option) => {

        return (
            <div className="flex">
                <div>
                    {option.name}
                </div>
            </div>
        );

    }

    const onLazyLoad = (event) => {
        setLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        // Imitate delay of a backend call
        const timeoutId = setTimeout(() => {
            const { first, last } = event;
            const _items = [...articulo];

            for (let i = first; i < last; i++) {
                _items[i] = { label: `Item #${i}`, value: i };
            }

            articulo = _items;
            setLoading(false);
        }, Math.random() * 1000 + 250);

        return timeoutId;
    };

    const productDialogFooter = (
        <React.Fragment>
            <Button
                label="Cancelar"
                icon=" pi pi- times"
                outlined
                onClick={hideDialog}
            />
            <Button
                label="Guardar"
                icon="pi pi-check"
                // onClick={saveProduct}
                disabled={editable}
            //disabled={!estadosEditables.includes(estado)}
            />
        </React.Fragment>
    )
    return (
        <>
            <Dialog
                visible={productDialog}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Agregar Concepto"
                modal
                className="p-fluid lg:max-w-30rem w-full max-w-30rem"
                onHide={hideDialog}
                footer={productDialogFooter}
            >
                <div className="field ">
                    <label htmlFor="name" className='font-bold p-col-12 p-md-2'>
                        Cod. Producto:
                    </label>

                    <div className="card flex">
                        <Dropdown
                            value={selectArticulo}
                            onChange={(e) => setSelectArticulo(e.value)}
                            options={articulo}
                            placeholder="Articulo"
                            optionLabel='name'
                            valueTemplate={ArticuloOptionTemplate}
                            itemTemplate={ArticulosOptionTemplate}
                            className="w-full md:w-20rem"
                            virtualScrollerOptions={{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="font-bold p-col-12 p-md-2">Cantidad Necesaria:</label>
                    <div className="card flex">
                        <InputNumber inputId="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="font-bold p-col-12 p-md-2">Precio:</label>
                    <div className="card flex">
                        <InputNumber inputId="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="font-bold p-col-12 p-md-2">Fecha necesaria:</label>
                    <div className="card flex">
                    <Calendar id="buttondisplay" 
                    // value={date}
                    //  onChange={(e) => setDate(e.value)} 
                     showIcon />
                    </div>
                </div>
                <div className="field">
                    <label className="font-bold p-col-12 p-md-2">Preveedor:</label>
                    <div className="card flex">
                        <Dropdown
                            value={proveedor}
                            onChange={(e) => handleChangeProveedor(e.value)}
                            options={proveedores}
                            optionLabel="CardName"
                            placeholder="Selecciona Proveedor"
                            filter
                            filterBy="CardName,CardCode"
                            filterMatchMode="contains" // Puedes ajustar el modo de filtrado según tus necesidades
                            valueTemplate={selectedOptionTemplate}
                            itemTemplate={complementoOptionTemplate}
                            className="w-full md:w-20rem"
                            disabled={editable}
                        //loading={proveedores.length < 1}
                        />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="" className="font-bold p-col-12 p-md-2">Proyecto:</label>
                    <div className="card flex">
                        <Dropdown
                            // value={proveedor}
                            // onChange={handleChangeProveedor}
                            // options={proveedores}
                            // optionLabel="CardName"
                            placeholder="Selecciona Proyecto"
                            filter
                            filterBy="CardName,CardCode"
                            // filterMatchMode="contains" // Puedes ajustar el modo de filtrado según tus necesidades
                            // valueTemplate={selectedOptionTemplate}
                            // itemTemplate={complementoOptionTemplate}
                            className="w-full md:w-20rem"
                            disabled={editable}
                        //loading={proveedores.length < 1}
                        />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="" className="font-bold p-col-12 p-md-2">Linea de Negocio:</label>
                    <div className="card flex">
                        <Dropdown
                            // value={proveedor}
                            // onChange={handleChangeProveedor}
                            // options={proveedores}
                            // optionLabel="CardName"
                            placeholder="Seleccionar..."
                            filter
                            filterBy="CardName,CardCode"
                            // filterMatchMode="contains" // Puedes ajustar el modo de filtrado según tus necesidades
                            // valueTemplate={selectedOptionTemplate}
                            // itemTemplate={complementoOptionTemplate}
                            className="w-full md:w-20rem"
                            disabled={editable}
                        //loading={proveedores.length < 1}
                        />
                    </div>

                </div>
                <div className="field">
                    <label htmlFor="" className="font-bold p-col-12 p-md-2">Sucursal:</label>
                    <div className="card flex">
                        <Dropdown
                            // value={proveedor}
                            // onChange={handleChangeProveedor}
                            // options={proveedores}
                            // optionLabel="CardName"
                            placeholder="Seleccionar..."
                            filter
                            filterBy="CardName,CardCode"
                            // filterMatchMode="contains" // Puedes ajustar el modo de filtrado según tus necesidades
                            // valueTemplate={selectedOptionTemplate}
                            // itemTemplate={complementoOptionTemplate}
                            className="w-full md:w-20rem"
                            disabled={editable}
                        //loading={proveedores.length < 1}
                        />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="" className="font-bold p-col-12 p-md-2">Area:</label>
                    <div className="card flex">
                        <Dropdown
                            // value={proveedor}
                            // onChange={handleChangeProveedor}
                            // options={proveedores}
                            // optionLabel="CardName"
                            placeholder="Selecciona Area"
                            filter
                            filterBy="CardName,CardCode"
                            // filterMatchMode="contains" // Puedes ajustar el modo de filtrado según tus necesidades
                            // valueTemplate={selectedOptionTemplate}
                            // itemTemplate={complementoOptionTemplate}
                            className="w-full md:w-20rem"
                            disabled={editable}
                        //loading={proveedores.length < 1}
                        />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="" className="font-bold p-col-12 p-md-2">Centro Costo:</label>
                    <div className="card flex">


                        <Dropdown
                            // value={proveedor}
                            // onChange={handleChangeProveedor}
                            // options={proveedores}
                            // optionLabel="CardName"
                            placeholder="Selecciona Centro "
                            filter
                            filterBy="CardName,CardCode"
                            // filterMatchMode="contains" // Puedes ajustar el modo de filtrado según tus necesidades
                            // valueTemplate={selectedOptionTemplate}
                            // itemTemplate={complementoOptionTemplate}
                            className="w-full md:w-20rem"
                            disabled={editable}
                        //loading={proveedores.length < 1}
                        />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="" className="font-bold p-col-12 p-md-2">Comentario:</label>
                    <div className="card flex">
                        <InputTextarea autoResize
                            // value={value}
                            // onChange={(e) => setValue(e.target.value)}
                            rows={5} cols={30} />
                    </div>
                </div>

            </Dialog>



        </>
    )
}

export default FormDetalle

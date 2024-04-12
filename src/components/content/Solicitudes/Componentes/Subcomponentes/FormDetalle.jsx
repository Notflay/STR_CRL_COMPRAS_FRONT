import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useRef, useState } from 'react'

function FormDetalle({
  detalles,
  detalle,
  setDetalle,
  setDetalles,
    proveedores,
    // lnegocios,
    proyectoss,
    productDialog,
    setProductDialog,
    // articulo,
    // sucursalop,
    editable,
    // areas,
    // centros
    items,
    dim1,
    dim2,
    dim4,
    dim5,


}) {
    const [proveedor, handleChangeProveedor] = useState(null);
    const [lnegocio, setSelectlnegocio] = useState(null);
    const [proyecto, setSelectProyecto] = useState(null);
    const [sucursal, setselectSucursal] = useState(null);
    const [area, SetselectArea]= useState (null);
    const [centro,seSelectCentro]=useState(null);
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
    // centro
    const selectedCentroTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-item-center">
                    <div className="">
                        <div className="">{option.name}</div>
                    </div>
                </div>
            )
        }
        return <span>{props.placeholder}</span>
    }

    const complementoCentroTemplate = (option) => {
        return (
            <div className="flex">
                <div>
                    {option.name}
                </div>
            </div>
        );
    }
    //Area
    const selectedAreaTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-item-center">
                    <div className="">
                        <div className="">{option.name}</div>
                    </div>
                </div>
            )
        }
        return <span>{props.placeholder}</span>
    }

    const complementoAreaTemplate = (option) => {
        return (
            <div className="flex">
                <div>
                    {option.name}
                </div>
            </div>
        );
    }

    // proyecto 
    const selectProyectOptionTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-item-center">
                    <div className="">
                        <div className="">{option.name}</div>
                    </div>
                </div>
            )
        }
        return <span>{props.placeholder}</span>
    }

    const complementoProyectOptionTemplate = (option) => {
        return (
            <div className="flex">
                <div>
                    {option.name}
                </div>
            </div>
        );
    }

    // linea de negocio 
    const selectLNegocioTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-item-center">
                    <div>
                        <div className="">{option.name}</div>
                    </div>
                </div>
            )
        }
        return <span>{props.placeholder}</span>
    }




    const complementoLNegocioTemplate = (option) => {
        return (
            <div className="flex">
                <div>
                    {option.name}
                </div>
            </div>
        );
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

    //Sucursal
    const selectedSucursalTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-item-center">
                    <div className="">
                        <div className="">{option.name}</div>
                    </div>
                </div>
            )
        }  return <span>{props.placeholder}</span>
    }

    const complementoSucursalTemplate = (option) => {

        return (
            <div className="flex">
                <div>
                    {option.name}
                </div>
            </div>
        );

    }
    //------------------------------------------------------------------
    // nuevo metodo----------------------------------------------------
    const saveProduct = () => {
        setSubmitted(true);
    
        let _detalles = [...detalles];
        let _detalle = { ...detalle };
        console.log(_detalle);
        if (
          detalle.STR_ITEM.ItemCode != null
          //detalle.cantidad > 0
        ) {
          if (detalle.ID) {
            const index = _detalles.findIndex((p) => p.ID === detalle.ID);
    
            if (index !== -1) {
              _detalles[index] = _detalle;
    
              showSuccess("Concepto Actualizado");
            }
          } else {
            _detalle.ID = createId();
            _detalles.push({
              ..._detalle,
            });
    
            showSuccess("Concepto Agregado");
          }
    
          let STR_TOTALDOC = _detalles.reduce(
            (acumulador, detalle) => acumulador + (detalle.STR_SUBTOTAL || 0),
            0
          );
    

    
          setDetalle(_detalles);
          setProductDialog(false);
          setDetalle(emptyProduct);
        }
      };


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
                onClick={saveProduct}
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
                className="p-fluid max-w-30rem w-full max-w-30rem bg-white m-auto"
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
                            // onChange={(e) => setSelectArticulo(e.value)}
                            onChange={(e) => {
                                setDetalle((prevDetalle) => ({
                                  ...prevDetalle,
                                  STR_ITEM: e.target.value,
                                }));
                                
                              }}
                            options={items}
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
                            filterMatchMode="contains" 
                            valueTemplate={selectedOptionTemplate}
                            itemTemplate={complementoOptionTemplate}
                            className="w-full md:w-20rem"
                            disabled={editable}
                        loading={proveedores.length < 1}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="font-bold p-col-12 p-md-2">Proyecto:</label>
                    <div className="card flex">
                        <Dropdown
                            value={proyecto}
                            onChange={(e) => setSelectProyecto(e.value)}
                            options={proyectoss}
                            optionLabel="name"
                            placeholder="Selecciona Proyecto"
                            filter
                            filterBy="name"
                            filterMatchMode="contains" 
                            valueTemplate={selectProyectOptionTemplate}
                            itemTemplate={complementoProyectOptionTemplate}
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
                            value={lnegocio}
                            onChange={(e) => setSelectlnegocio(e.value)}
                            options={dim1}
                            optionLabel="name"
                            placeholder="Seleccionar..."
                            filter
                            filterBy="name"
                            filterMatchMode="contains" 
                            valueTemplate={selectLNegocioTemplate}
                            itemTemplate={complementoLNegocioTemplate}
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
                            value={sucursal}
                            onChange={(e)=>setselectSucursal(e.value)}
                            options={dim2}
                            optionLabel="name"
                            placeholder="Seleccionar..."
                            filter
                            filterBy="name"
                            filterMatchMode="contains" 
                            valueTemplate={selectedSucursalTemplate}
                            itemTemplate={complementoSucursalTemplate}
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
                            value={area}
                            onChange={(e)=> SetselectArea(e.value)}
                            options={dim4}
                            optionLabel="name"
                            placeholder="Selecciona Area"
                            filter
                            filterBy="id,name"
                            filterMatchMode="contains" 
                            valueTemplate={selectedAreaTemplate}
                            itemTemplate={complementoAreaTemplate}
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
                            value={centro}
                            onChange={(e)=>seSelectCentro(e.value)}
                            options={dim5}
                            optionLabel="name"
                            placeholder="Selecciona Centro "
                            filter
                            filterBy="name"
                            filterMatchMode="contains" 
                            valueTemplate={selectedCentroTemplate}
                            itemTemplate={complementoCentroTemplate}
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

import React, { useContext, useRef, useState } from 'react'
import { Image } from "primereact/image";
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';



export default function Formulario() {
    const toast = useRef(null)
    const buttonRef = useRef();

    return (
        <>
            <Toast ref={toast} />
            <div className="p-5">
                <form>
                    <div className="flex justify-content-center">
                        <Image
                            src="https://media.licdn.com/dms/image/D4E0BAQHXNK-UJQ81Gw/company-logo_200_200/0/1698942464169?e=2147483647&v=beta&t=5miWMzDnKFjQ19LtpGkDYaHpPavXmphP57WVyePWQh0"
                            alt="Image"
                            width="150"
                        />

                    </div>
                    <div className="flex justify-content-center">
                        <h2 className="text-gray-700">Bienvenido</h2>
                    </div>{" "}

                    <div className="flex justify-content-center">
                        <p className="text-gray-700" style={{ fontSize: "1.2em" }}>
                            Inicio de sesión: Acceda con sus credenciales
                        </p>
                    </div>
                    <div className="card flex flex-column align-items-center gap-3">
                        <div className="my-1">
                            <InputText
                                type="text"
                                className="p-inputtext-lg w-full"
                                placeholder="Ingrese usuario" />


                        </div>

                        <div className="my-1">
                            <Password
                                className="p-inputtext-lg w-full"
                                placeholder="Ingrese contraseña"
                            />

                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex card justify-content-center my-2">
                            <Dropdown
                                optionLabel="name"
                                placeholder=" Sociedad"
                                className="w-full md:w-14rem"
                            />


                        </div>
                        <div className="flex my-1">
                            <Button
                                className="w-full"
                                label="Olvido la contraseñas"
                            />
                        </div>
                    </div>

                    <div className="flex justify-content-center">
                        <Button 
                        ref={buttonRef}
                        severity="success" 
                        rounded
                        size="large"
                        event
                        className="w-2/3"

                        >
                            Iniciar sesión
                        </Button>

                    </div>


                </form>
            </div>

        </>
    )
}

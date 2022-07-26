import React, { useState } from 'react'
import { 
    BtCancel, 
    BtEdit, 
    CtButton, 
    CtForm, 
    CtPago, 
    CtTitlePrincipal, 
    CtTxt, 
    Form, 
    Input, 
    InputDescription, 
    Select, 
    TxtArea, 
    TxtPrincipal } from './FormCompra.styled';

function FormCompra() {

  return (

    <>
            <CtForm>
            <Form>
              <CtTitlePrincipal> 
            <TxtPrincipal>FORMULARIO DE COMPRA</TxtPrincipal>
            </CtTitlePrincipal>
              <CtTxt>Nombre y Apellidos</CtTxt>
                  <Input
                   className="nombre"
                   type="text"
                   placeholder="Escriba su nombre"
                  ></Input>
                <CtTxt>Dirección de envío</CtTxt>
                  <Input
                    className="dirección"
                    type="text"
                    placeholder="Escriba su direccion"
                  ></Input>
                {/* <CtTxt>Dirección de facturación</CtTxt>
                  <InputDescription
                   className="dirección"
                   type="text"
                   placeholder="Escriba su direccion de facturación"
                  ></InputDescription> */}
                  <CtTxt>Email de contacto</CtTxt>
                  <InputDescription
                   className="Correo"
                   type="text"
                   placeholder="Escriba su correo"
                  ></InputDescription>
                   <CtTxt>Codigo Postal</CtTxt>
                  <InputDescription
                   className="Correo"
                   type="text"
                   placeholder="Escriba su código postal"
                  ></InputDescription>
                   <CtTxt>Teléfono</CtTxt>
                  <InputDescription
                   className="Teléfono"
                   type="text"
                   placeholder="Escriba su teléfono"
                  ></InputDescription>
                
                <CtTxt>Formas de pago</CtTxt>

                <CtPago placeholder="Formas de Pago">
                    <option value="tarjeta">Tarjeta de débito o crédito</option> 
                    <option value="tarjeta">Paypal</option>
                    <option value="transferencia">Transferencia</option> 
                </CtPago>  
                {/* <TxtArea placeholder="Comentarios"></TxtArea> */}

                  <CtButton>
                    <BtEdit>PAGAR</BtEdit>
                    </CtButton>
                </Form>
                </CtForm>
            </>
          );
    }


export default FormCompra
import React, { useState } from 'react'
import { 
    BtCancel, 
    BtEdit, 
    CtButton, 
    CtForm, 
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
            <TxtPrincipal>CONTACTO</TxtPrincipal>
            </CtTitlePrincipal>
              <CtTxt>Title</CtTxt>
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
                <CtTxt>Dirección de facturación</CtTxt>
                  <InputDescription
                   className="dirección"
                   type="text"
                   placeholder="Escriba su direccion de facturación"
                  ></InputDescription>
                  <CtTxt>Correo</CtTxt>
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

                {/* <Select placeholder="Formas de Pago">
                    <option src= "https://www.paypal.com/us/signin"></option>
                    {/* <option value="tarjeta">Tarjeta de débito o crédito</option> */}
                    {/* <option value="transferencia">Transferencia</option> */}
                {/* </Select>  */}
                {/* <TxtArea placeholder="Comentarios"></TxtArea> */}

                  <CtButton>
                    <BtEdit src= "https://www.paypal.com/us/signin">ENVIAR</BtEdit>
                    </CtButton>
                </Form>
                </CtForm>
            </>
          );
    }


export default FormCompra
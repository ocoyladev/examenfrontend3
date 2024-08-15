import { useState } from "react";
import React from 'react'
import Card from "./Card";

const Form = () => {
    
    const [customer, setCustomer] = useState({
      name: "",
      color: "",
    });
    const [flag, setFlag] = useState(false);
    const [error, setError] = useState(false);
      
    const handleName = (e) => {
    setCustomer({ ...customer, name: e.target.value });
    };
    const handleColor = (e) => {
    setCustomer({ ...customer, color: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            customer.name.trim().length > 3 && customer.color.trim().length > 5
        ) {
            setError(false);
            setFlag(true);
            
        } else {
            setError(true);
        }

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleName} placeholder="Ingresa tu nombre"/>
                <input type="text" onChange={handleColor} placeholder="Ingresa tu color favorito (formato HEX)" />
                <button>ENVIAR</button>
            </form>
            {flag ? <Card name={customer.name} color={customer.color} /> : null}
            {error && (
            <h4 style={{ color: "red" }}>Por favor chequea que la información sea correcta</h4>
            )}

        </div>  
  )
}

export default Form
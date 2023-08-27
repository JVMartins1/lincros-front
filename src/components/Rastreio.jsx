import React from "react";
import { usarContexto } from "./Contexto";
import '../styles.css'

function Rastreio() {
    const { rastreio, setRastreio } = usarContexto();

    return (
        <>
            {rastreio && (
                <div className="rastreio">
                    <div className="rastreio-info">
                        <p>ID: {rastreio}</p>
                        <p>Informações de rastreamento não implementadas</p>
                        <button className="btn btn-primary" onClick={() => setRastreio(false)}>Fechar</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Rastreio;

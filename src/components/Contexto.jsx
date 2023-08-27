import React, { createContext, useContext, useState } from 'react';

const Contexto = createContext();

export function ProvedorUsuario({ children }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [nomePessoa, setNomePessoa] = useState('');
    const [msgLogout, setMsgLogout] = useState('');
    const [rastreio, setRastreio] = useState();

    return (
        <Contexto.Provider value={{     nomeUsuario, setNomeUsuario, 
                                        nomePessoa, setNomePessoa,
                                        msgLogout, setMsgLogout,
                                        rastreio, setRastreio,
                                        }}>
            {children}
        </Contexto.Provider>
    );
}

export function usarContexto() {
    return useContext(Contexto);
}
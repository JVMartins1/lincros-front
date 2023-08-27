import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { usarContexto } from './Contexto';
import '../styles.css'


function Navbar() {
    const { nomeUsuario, setNomeUsuario, nomePessoa, setNomePessoa, setRastreio } = usarContexto();

    const navigate = useNavigate();

    function logout() {
          setNomeUsuario();
          setNomePessoa();
          setRastreio();
          navigate('/');
      }

    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">JVLog</Link>
                <div style={{ right: "25%" }}>
                    <div className="navbar" id="navbarSupportedContent">
                                <Link className="nav-link active margin-right" to="/">Home</Link>
                                <Link className="nav-link active margin-right" to="/contato">Contato</Link>
                                {nomeUsuario && <Link className="nav-link active margin-right" to="/pedidos">Meus Pedidos</Link>}
                                {!nomeUsuario && <Link className="nav-link active margin-right" to="/acesso">Acesso</Link>}
                                {nomeUsuario && <Link className="nav-link active margin-right" to="/admin">Olá, {nomePessoa}</Link>}
                                {nomeUsuario && <button className="nav-link active margin-right" onClick={logout} >Sair</button>}
                    </div>
                </div>
            </div>
        </nav>
        <div>
            <Outlet />
        </div>
    </>)
}

export default Navbar;
import { usarContexto } from './Contexto';
import { React, useState } from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from 'axios';

function FormLogin() {
    const { setNomeUsuario, setNomePessoa, msgLogout, setMsgLogout } = usarContexto();
    const [formData, setFormData] = useState({ NM_USUARIO: "", DS_SENHA: "" });
    const [msgErro, setMsgErro] = useState();
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [id]: value, }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.NM_USUARIO && !formData.DS_SENHA) {
            setMsgErro('Usuário/senha inválido');
            return
        } else if (!formData.DS_SENHA) {
            setMsgErro('A senha não foi preenchida');
            return
        } else if (!formData.NM_USUARIO) {
            setMsgErro('Usuário não foi preenchido');
            return
        }

        try {
            setMsgLogout();
            setMsgErro();

            const response = await axios.post("http://localhost:8001/usuarios/login", formData).catch(err => {
                if (err.response.status == 401) {
                    setMsgErro('Usuário/senha inválido')
                }
            });

            if (response && response.data.message.loginSucedido) {
                localStorage.setItem('token', response.data.message.token);
                setNomeUsuario(response.data.message.usuario.NM_USUARIO);
                setNomePessoa(response.data.message.usuario.DS_NOME);
                navigate('/')
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (<>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="NM_USUARIO" className="form-label" >Usuário</label>
                <input type="text" className="form-control" id="NM_USUARIO" value={formData.NM_USUARIO} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="DS_SENHA" className="form-label" >Senha</label>
                <input type="password" className="form-control" id="DS_SENHA" value={formData.DS_SENHA} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Acessar</button>
            <div style={{ paddingTop: "1vh" }}>
                <Link to="/cadastro" style={{ textUnderlineOffset: "5%" }}>Não possui conta? Cadastre-se aqui</Link>
                {msgErro && (<p className="text-danger">{msgErro}</p>)}
                {msgLogout && (<p className="text-danger">{msgLogout}</p>)}
            </div>
        </form>
        <div>
            <Outlet />
        </div>
    </>)
}

export default FormLogin;
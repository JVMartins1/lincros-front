import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormCadastro() {
    const emptyForm = { NM_USUARIO: "", DS_EMAIL: "", DS_NOME: "", DS_SENHA: "", DS_SOBRENOME: "" }
    const [errorMsg, setErrorMsg] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formData, setFormData] = useState(emptyForm);

    const navigate = useNavigate();


    const handleConfirmPasswordChange = (event) => { setConfirmPassword(event.target.value); };

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [id]: value, }));
        
        if (id == "NM_USUARIO") {
            setErrorMsg();
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (formData.DS_SENHA !== confirmPassword) {
            return;
        }

        try {
            const response = await axios.post("http://localhost:8001/usuarios/registrar", formData).catch(err => {
                if (err.response.status == 409) {
                    setErrorMsg(err.response.data.message);
                }
            });

            if (response) {
                setFormData(emptyForm);
                setConfirmPassword("");
                navigate('/acesso')
            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ paddingBottom: "2vh" }}>
                <div className="mb-3">
                    <label htmlFor="DS_NOME" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="DS_NOME" value={formData.DS_NOME} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="DS_SOBRENOME" className="form-label">Sobrenome</label>
                    <input type="text" className="form-control" id="DS_SOBRENOME" value={formData.DS_SOBRENOME} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="DS_EMAIL" className="form-label">Email</label>
                    <input type="email" className="form-control" id="DS_EMAIL" value={formData.DS_EMAIL} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="NM_USUARIO" className="form-label">Usuário</label>
                    <input type="text" className="form-control" id="NM_USUARIO" value={formData.NM_USUARIO} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="DS_SENHA" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="DS_SENHA" value={formData.DS_SENHA} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirmar senha</label>
                    <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
            {formData.DS_SENHA !== confirmPassword && (<p className="text-danger">As senhas não correspondem.</p>)}
            {errorMsg && (<p className="text-danger">{errorMsg}</p>)}
        </>
    );
}

export default FormCadastro;

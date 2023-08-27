import FormCadastro from "../components/FormCadastro";

function Cadastro() {
    return (<>
        <div className="d-flex align-items-center justify-content-center" style={{ height: '90vh' }}>
            <div className="d-flex flex-column align-items-center" style={{ maxWidth: '50%' }}>
                <h1>Cadastro de cliente</h1>
                <FormCadastro />
            </div>
        </div>

    </>)
}

export default Cadastro;
import FormLogin from "../components/FormLogin";

function Acesso() {
    return (<>
            <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                <div className="d-flex flex-column align-items-center" style={{ maxWidth: '50%' }}>
                    <h1 style={{marginBottom:"20h"}}>Área do cliente</h1>
                    <FormLogin />
                </div>
            </div>
    </>)
}

export default Acesso;
import tokenConfig from "../components/TokenConfig";
import { usarContexto } from "../components/Contexto";
import { useNavigate } from "react-router-dom";

function Admin() {
    const { setNomeUsuario, setNomePessoa, setMsgLogout } = usarContexto();
    const navigate = useNavigate();

    async function criarPedido() {
        const obj = gerarDados();

        await tokenConfig.post("http://localhost:8001/pedidos/criar", obj).catch(err => {
            if (err.response.status == 401) {
                console.error('Sessão expirada, realizando logout.');
                logout('Sessão expirada.');
            }
        });
    }

    function logout(msg) {
        setTimeout(() => {
            setNomeUsuario();
            setNomePessoa();
            setRastreio();
            setMsgLogout(msg);
            navigate('/acesso');
        }, 1000);
    }

    async function deletar() {
        await tokenConfig.post("http://localhost:8001/pedidos/deletar").catch(err => {
            if (err.response.status == 401) {
                console.error('Sessão expirada, realizando logout.');
                logout('Sessão expirada.');
            }
        });
    }

    function gerarDados() {
        const params = {};
        params.NM_PEDIDO = random(getPedidos()),
            params.DS_ENTREGA = random(getEntregas()),
            params.DS_RASTREIO = "google.com",
            params.VL_PEDIDO = (Math.random() * 900).toFixed(2);

        return params
    }

    function getEntregas() {
        return ["Expressa",
            "Econômica",
            "Normal"]
    }

    function getPedidos() {
        return ["Televisão",
            "Coca gelada",
            "Pizza",
            "Shein",
            "Esteira",
            "Bicicleta",
            "Bebedouro",
            "Notebook",
            "Câmera"]
    }


    function random(lista) {
        const tamanho = lista.length;
        const randIndex = Math.floor((Math.random() * tamanho))
        return lista[randIndex];
    }



    return (<>
        <div className="d-grid col-6" style={{ marginTop: "30vh", marginLeft: "45.9%" }}>
            <button className="btn btn-primary" type="button" onClick={criarPedido} style={{
                width: "20vh"
            }}>Criar Pedido</button>
            <button className="btn btn-danger" type="button" onClick={deletar} style={{ width: "20vh", marginTop: "1em" }}>Apagar Pedidos</button>
        </div>
    </>)
}

export default Admin
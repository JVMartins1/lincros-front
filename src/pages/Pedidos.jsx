import Pedido from "../components/Pedido";
import Rastreio from "../components/Rastreio";


function Pedidos() {
    
    return (
        <>
            <Rastreio />
            <div style={{ width: "50%", marginLeft: "25%", marginTop: "3%" }}>
                <Pedido/>
            </div>
        </>
    );
}

export default Pedidos;

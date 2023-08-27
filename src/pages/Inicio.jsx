import Navbar from "../components/Navbar";
import Counter from "../components/Counter";
import Imagem from "../components/Imagem";
import Sobre from "../components/Sobre";

function Inicio() {
    return (<>
        <div className="background">
            <Counter />
            <Imagem src="src/assets/Logistica.jpg" />
            <Sobre />
        </div>
    </>)
}

export default Inicio;
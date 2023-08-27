function Imagem(props) {
    return (<>
        <img className="rounded mx-auto d-block gradient fade-in vertical-strech" src={`${props.src}`} alt="" style={{ width: "70%" }} />
    </>)
}

export default Imagem;
import CountUp from "react-countup";

function Counter() {
    const dados = [
        {
            duracao: 2,
            valor: 12746,
            desc: "Pacotes Entregues"
        },
        {
            duracao: 3,
            valor: 652,
            desc: "Pacotes entregues no mês"
        },
        {
            duracao: 7,
            valor: 175564,
            desc: "Km percorridos no mês"
        },
        {
            duracao: 10,
            valor: 550,
            desc: "Clientes satisfeitos"
        }
    ]

    const counter = dados.map((contador, index) => (
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" key={index}>
            <div className="counter">
                <CountUp duration={contador.duracao} className="counter" end={contador.valor} />
                <p className="counter-p">{contador.desc}</p>
            </div>
        </div>
    ))

    return (<>
        <div className="counter" >
            <div className="container">
                <div className="row">
                    {counter}
                </div>
            </div>
        </div>
    </>)
}

export default Counter;
import React, { useEffect, useState } from 'react';
import { usarContexto } from './Contexto';
import tokenConfig from "../components/TokenConfig";
import { useNavigate } from 'react-router-dom';
import pencil from '../assets/pencil.svg'


function Pedido() {
  const { setNomeUsuario, setNomePessoa, setMsgLogout, setRastreio } = usarContexto();
  const [msgPedido, setMsgPedido] = useState();
  const [pedidos, setPedidos] = useState([]);
  const [modoEdicao, setModoEdicao] = useState();
  const [idPedido, setIdPedido] = useState();
  const [nmPedido, setNmPedido] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    pegarSetarPedidos();
  }, [])

  function logout(msg) {
    setTimeout(() => {
      setNomeUsuario();
      setNomePessoa();
      setRastreio();
      setMsgLogout(msg);
      navigate('/acesso');
    }, 2000);
  }

  async function pegarPedidos() {
    try {
      const resp = await tokenConfig.get('http://localhost:8001/pedidos/listarPedidos/').catch(err => {
        if (err.response.status == 401) {
          console.error('Sessão expirada, realizando logout.');
          logout('Sessão expirada.');
        }
      });

      if (resp.data.length == 0) {
        setMsgPedido('Você não possui pedidos');
        return [];
      } else {
        return resp.data;
      }
    } catch (error) {
      setMsgPedido('Erro ao obter produtos');
      return [];
    }
  }

  async function editarNomePedido(pedido) {

    const formData = pedido;
    formData.NM_PEDIDO = nmPedido;

    try {
      const resp = await tokenConfig.post('http://localhost:8001/pedidos/editarNome/', formData).catch(err => {
        if (err.response.status == 401) {
          console.error('Sessão expirada, realizando logout.');
          logout('Sessão expirada.');
        }
      });

      if(resp){
        pedido.NM_PEDIDO = nmPedido;
      }
    } catch (error) {
      return [];
    }
  }

  async function pegarSetarPedidos() {
    const pedidosData = await pegarPedidos();
    setPedidos(pedidosData);
  }

  function handleChange(event) {
    setNmPedido(event.target.value);
  }

  async function handleSave(pedido) {
    if(pedido.NM_PEDIDO != nmPedido){
      await editarNomePedido(pedido);
    }
    setModoEdicao(false);
    setNmPedido();
  }

  function handleKeyPress(event, pedido){
    if (event.key === "Enter") {
      handleSave(pedido);
    }
  }

  function habilitarEdicao(pedido) {
    setModoEdicao(true);
    setNmPedido(pedido.NM_PEDIDO);
    setIdPedido(pedido.ID_PEDIDO);
  }

  const cards = pedidos.map((pedido, index) => (
    <div key={index} className="col">
      <div className="card">
        <div className="card-body">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {
              (modoEdicao && pedido.ID_PEDIDO == idPedido) ?
                <input
                  type="text"
                  value={nmPedido}
                  onChange={handleChange}
                  onBlur={() => handleSave(pedido)}
                  onKeyDown={(event) => handleKeyPress(event, pedido)}
                  autoFocus
                /> :
                <h5 className="card-title" >{pedido.NM_PEDIDO}</h5>
            }
            <button onClick={() => habilitarEdicao(pedido)} style={{ background: 'none', border: 'none' }}>
              <img src={pencil} alt="Editar Pedido" style={{ width: "1rem" }} />
            </button>
          </div>
          <p className="card-text">Tipo de Entrega: {pedido.DS_ENTREGA}</p>
          <p className="card-text">Valor: R$ {pedido.VL_PEDIDO}</p>
          <button className="btn btn-primary" onClick={() => setRastreio(pedido.ID_PEDIDO)}>Rastreio</button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4"> {cards} </div>
      {pedidos.length == 0 && <h1 style={{ textAlign: "center", marginTop: "30vh" }}> {msgPedido} </h1>}
    </>
  );
}

export default Pedido;

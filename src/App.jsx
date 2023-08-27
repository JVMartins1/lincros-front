import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { ProvedorUsuario } from "./components/Contexto"
import Inicio from "./pages/Inicio"
import Pedidos from "./pages/Pedidos"
import Contato from "./pages/Contato"
import Acesso from "./pages/Acesso"
import Cadastro from "./pages/Cadastro"
import Navbar from "./components/Navbar"
import Admin from "./pages/Admin"
import './styles.css'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Inicio />}></Route>
        <Route path="/pedidos" element={<Pedidos />}></Route>
        <Route path="/contato" element={<Contato />}></Route>
        <Route path="/acesso" element={<Acesso />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
      </Route>
    )
  )

  return (
    <>
      <ProvedorUsuario>
        <RouterProvider router={router} />
      </ProvedorUsuario>
    </>
  )
}

export default App

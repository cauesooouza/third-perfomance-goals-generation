import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import EditarProduto from "./pages/editarProduto"
import ModCategoria from "./pages/modCategoria"
import Categoria from "./pages/categoria"
import AddCategoria from "./pages/addCategoria"
import DelCategoria from "./pages/delCategoria"
import Produto from "./pages/produto"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria" element={<Categoria/>} />
        <Route path="/categoria/inserir" element={<AddCategoria/>} />
        <Route path="/categoria/modificar" element={<ModCategoria/>} />
        <Route path="/categoria/excluir" element={<DelCategoria/>} />
        <Route path="produto" element={<Produto/>} />
        <Route path="/produto/:id" element={<EditarProduto/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

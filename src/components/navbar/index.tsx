import { FilePlus, FolderPlus, House, Plus } from "@phosphor-icons/react";
import { API } from "../../services/api";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { Link } from "react-router-dom";

export default function Navbar() {
  interface categoriasInteface {
    id: number,
    nome: string,
    produto?: []
  }
  const [categorias, setCategorias] = useState<categoriasInteface[]>([]);

  useEffect(() => {
    API.get('/categorias').then((response) => setCategorias(response.data))
  }, [])

  return (
    <header className="shadow-lg sticky top-0 z-20 bg-white">
      <div className="bg-[#c5221b]">
        <div className="container  text-center text-white py-1">
          O produto que você precisa, esta aqui!
        </div>
      </div>
      <div className="border-b border-[#dadada]">
        <div className="container flex items-center py-3 justify-between flex-wrap">
          <div className="bg-[#c5221b] rounded-full  flex items-center gap-1 pl-2 w-fit">
            <Plus color="white" size={42} weight="bold" />
            <span className="bg-white py-2 px-4 rounded-full border-[#c5221b] border-r-2 border-b-2 font-bold text-2xl text-[#173E70] italic">Drogão</span>
          </div>
          <div className="flex gap-4">
            <div className=" flex items-center text-[#7a7a7a] font-medium cursor-pointer">
              <Link to="/" className="flex items-center gap-1">
                <House size={32} color="#7a7a7a" />
                inicio
              </Link>
            </div>
            <div className=" flex items-center text-[#7a7a7a] font-medium cursor-pointer">
              <Link to="/categoria" className="flex items-center gap-1">
                <FolderPlus size={32} color="#7a7a7a" />
                Categoria
              </Link>
            </div>
            <div className="flex items-center text-[#7a7a7a] font-medium gap-2 cursor-pointer">
              <Link to="/produto" className="flex items-center gap-1">
                <FilePlus size={32} color="#7a7a7a" />
                Produto
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <ul className="flex justify-center gap-5 flex-wrap text-[#a1a1a1] font-medium py-4 items-center">
            {categorias.length > 0 ? categorias.map((element, index) => (
              <li key={index}>
                {element.nome}
              </li>
            )) : <PropagateLoader color="#173E70" />}
          </ul>
        </div>
      </div>
    </header>
  )
}

import { FilePlus, FolderPlus, MagnifyingGlass, Plus } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <header className="shadow-lg sticky top-0">
      <div className="bg-[#c5221b]">
        <div className="container  text-center text-white py-1">
          O produto que você precisa, esta aqui!
        </div>
      </div>
      <div className="border-b border-[#dadada]">
        <div className="container flex items-center py-3 justify-between">
          <div className="bg-[#c5221b] rounded-full  flex items-center gap-1 pl-2">
            <Plus color="white" size={42} weight="bold" />
            <span className="bg-white py-2 px-4 rounded-full border-[#c5221b] border-r-2 border-b-2 font-bold text-2xl text-[#173E70] italic">Drogão</span>
          </div>
          <div className="bg-slate-100 rounded-full flex px-4 py-2 items-center w-72 justify-between">
            <input type="text" name="search" id="search" placeholder="O que você está buscando? :)" className="outline-none bg-slate-100 rounded-full px-2 py-1 text-slate-500 text-sm w-full" />
            <MagnifyingGlass size={32} color="gray" className="cursor-pointer" />
          </div>
          <div className="flex items-center text-[#7a7a7a] font-medium gap-2 cursor-pointer">
            <FolderPlus size={32} color="#7a7a7a" />
            Adcicionar categoria
          </div>
          <div className="flex items-center text-[#7a7a7a] font-medium gap-2 cursor-pointer">
            <FilePlus size={32} color="#7a7a7a" />
            Adicionar Produto
          </div>
        </div>
      </div>
        <div className="py-2">
          <div className="container">
            <ul className="flex justify-between text-[#a1a1a1] font-medium">
              <li>Saúde</li>
              <li>Beleza</li>
              <li>Dermocosméticos</li>
              <li>Mamãe e bebe</li>
              <li>Manipulados</li>
            </ul>
          </div>
        </div>
    </header>
  )
}

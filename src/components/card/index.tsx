import { Pencil, Trash } from "@phosphor-icons/react";
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";
interface cardInterface {
    id: number,
    nome: string,
    preco: string,
    foto: string
}


export default function Card({ id, nome, preco, foto }: cardInterface) {
    const navigate = useNavigate();
    const deleteItem = async (id: number) => {
        await API.delete(`/produtos/${id}`);
        // mudar alerta para toastfy
        alert(`Produto excluido com sucesso`)
        window.location.reload();
    }

    const editItem = (id: number) => {
        navigate(`/produto/${id}`)
    }



    return (
        <div className="flex flex-col w-[230px] items-center text-center border rounded-xl p-4 transition-all ease-in-out duration-300 group relative">
            <img src={foto} alt={nome} className="w-[180px] h-[180px]" />
            <span>{nome}</span>
            <span className="mt-2 text-2xl font-medium color text-[#2464b8]">R${preco}</span>
            <div className="hidden gap-4 mt-4 group-hover:flex transition-opacity ease-in-out duration-300 absolute -bottom-5">
                <button className="flex rounded-full bg-yellow-400/80 py-1 px-2 font-medium" onClick={() => editItem(id)}><Pencil size={28} /> Editar</button>
                <button className="flex rounded-full bg-[#c5221b] py-1 px-2 text-white font-medium" onClick={() => deleteItem(id)}><Trash size={28} /> Excluir</button>
            </div>
        </div>
    )
}
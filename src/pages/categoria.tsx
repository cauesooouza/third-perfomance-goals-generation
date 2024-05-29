import { Backspace, Pen, Plus } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Categoria() {
    return (
        <>
            <Helmet>
                <title>Drogão | Categoria</title>
            </Helmet>
            <section className="my-6 min-h-[600px] flex flex-col items-center gap-6">
                <h1 className="text-gray-700 text-2xl font-bold mb-2 text-center">O que deseja fazer?</h1>
                <ul>
                    <li className="text-gray-700 text-xl mb-2 ">
                        <Link to="/categoria/inserir" className="flex gap-2">
                            <Plus size={32} color="grey" />
                            Inserir nova categoria
                        </Link>
                    </li>
                    <li className="text-gray-700 text-xl mb-2 ">
                        <Link to="/categoria/modificar" className="flex gap-2">
                            <Pen size={32} color="grey" />
                            Modificar categoria
                        </Link>
                    </li>
                    <li className="text-gray-700 text-xl mb-2">
                        <Link to="/categoria/excluir" className="flex gap-2">
                            <Backspace size={32} color="grey" />
                            Excluir categoria
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    )
}

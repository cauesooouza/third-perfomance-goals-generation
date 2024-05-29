import { useState } from "react";
import { API } from "../services/api";
import { categoriaInterface } from "../models/categoria";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ModCategoria() {
    const [formData, setFormData] = useState<categoriaInterface>({
        id: 0,
        nome: "string",
        produto: ["string"]
    })
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        const convertedValue = (name === 'id') ? Number(value) : value;

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: convertedValue
            };
        });


        console.log(formData)
    }

    const handleSubmitPut = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await API.put('/categorias', formData)

            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <Helmet>
                <title>Drogão | Modificar categoria</title>
            </Helmet>
            <section className="my-6 min-h-[600px] flex flex-col items-center gap-6">

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmitPut}>
                    <h1 className="text-gray-700 text-base font-bold mb-2 text-center">Modifique a categoria</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            id
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="id"
                            type="number"
                            value={formData.id}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Nome
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="nome"
                            type="text"
                            value={formData.nome}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6 hidden">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Preço
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="preco"
                            type="text"
                            value={formData.produto}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Enviar
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

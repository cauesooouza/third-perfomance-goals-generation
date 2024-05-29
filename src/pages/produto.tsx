import { useState } from "react";
import { API } from "../services/api";
import { Helmet } from "react-helmet";

export default function Produto() {
    const [formData, setFormData] = useState({
        nome: "",
        preco: "",
        foto: "",
        categoria: {
            id: "",
            nome: "",
            produto: ["string"]
        }
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        const keys = name.split('.');

        const convertedValue = (name === 'id' || keys[1] === 'id') ? Number(value) : value;

        if (keys.length > 1) {
            setFormData(prevState => {
                return {
                    ...prevState,
                    [keys[0]]: {
                        ...prevState.categoria,
                        [keys[1]]: convertedValue
                    }
                };
            });
        } else {
            setFormData(prevState => {
                return {
                    ...prevState,
                    [name]: convertedValue
                };
            });
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await API.post('/produtos', formData)

            alert("Produto criado com sucesso")
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <>
            <Helmet>
                <title>Drogão | Adicionar produto</title>
            </Helmet>
            <section className="my-6 min-h-[600px] flex flex-col items-center gap-6">
                <div>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
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
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Preço
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="preco"
                                type="text"
                                value={formData.preco}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Foto
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="foto"
                                type="text"
                                value={formData.foto}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Categoria id
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="categoria.id"
                                type="text"
                                value={formData.categoria.id}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Categoria nome
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="categoria.nome"
                                type="text"
                                value={formData.categoria.nome}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6 hidden">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Categoria produto
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="categoria.id"
                                type="text"
                                value={formData.categoria.produto}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

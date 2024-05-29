import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { produtoInterface } from "../models/produto";
import { API } from "../services/api";
import { Helmet } from "react-helmet";

export default function EditarProduto() {
    const [produto, setProduto] = useState<produtoInterface>(Object);
    const [formData, setFormData] = useState({
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        foto: produto.foto,
        categoria: {
            id: produto.categoria?.id,
            nome: produto.categoria?.nome,
            produto: ["string"]
        }
    })

    const params = useParams()
    useEffect(() => {
        const getProduto = async () => {
            const response = await API.get(`/produtos/${params.id}`);
            setProduto(response.data);
        }

        getProduto();
    }, [])

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
            await API.put('/produtos', formData)

            alert("Produto editado com sucesso!")
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <>
            <Helmet>
                <title>Drogão | Edite o {produto.nome}</title>
            </Helmet>
            <section className="my-6 min-h-[600px] flex flex-col items-center gap-6">
                <div className="flex flex-col items-center text-center border rounded-xl p-4 transition-all ease-in-out duration-300 group relative">
                    id: {produto.id}
                    <img src={produto.foto} alt={produto.nome} className="w-[180px] h-[180px]" />
                    <span>{produto.nome}</span>
                    <span className="mt-2 text-2xl font-medium color text-[#2464b8]">R${produto.preco}</span>
                    <span>
                        categoria id: {produto.categoria?.id}
                    </span>
                    <span>
                        categoria nome: {produto.categoria?.nome}
                    </span>
                </div>

                <div>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
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

import { useEffect, useState } from "react";
import { API } from "../services/api";
import { categoriaInterface } from "../models/categoria";
import { ClimbingBoxLoader } from "react-spinners";
import { Helmet } from "react-helmet";

export default function DelCategoria() {
    const [formData, setFormData] = useState<categoriaInterface>({
        id: 0,
        nome: "string",
        produto: ["string"]
    })
    const [categorias, setCategorias] = useState<categoriaInterface[]>([]);

    useEffect(() => {
        const getCategorias = async () => {
            const response = await API.get('/categorias');
            setCategorias(response.data)
        }

        getCategorias()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        const convertedValue = (name === 'id') ? Number(value) : value;

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: convertedValue
            };
        })
    }

    const handleSubmitPut = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await API.delete(`/categorias/${formData.id}`)

            alert("Categoria excluida com sucesso!")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Helmet>
                <title>Drogão | Apagar categoria</title>
            </Helmet>
            <section className="my-6 min-h-[600px] flex flex-col items-center gap-6">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmitPut}>
                    <h1 className="text-gray-700 text-base font-bold mb-2 text-center">Excluir categoria</h1>
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
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Enviar
                        </button>
                    </div>
                </form>
                <ul className="text-black">
                    <h2 className="text-gray-700 text-base font-bold mb-2 text-center">Categorias existentes</h2>
                    {categorias.length > 0 ? categorias.map((element, key) => (
                        <li key={key}>{element.id}: {element.nome}</li>
                    )) : <ClimbingBoxLoader />}
                </ul>
            </section>
        </>
    )
}

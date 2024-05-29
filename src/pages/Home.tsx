import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { API } from "../services/api";
import Card from "../components/card";
import { GridLoader } from "react-spinners";

export default function Home() {
  interface produtoInterface {
    id: number,
    nome: string,
    preco: string,
    foto: string,
    categoria?: {
      id: number,
      nome: string
    }
  }
  const [produtos, setProdutos] = useState<produtoInterface[]>([])

  useEffect(() => {
    API.get('/produtos').then((response) => setProdutos(response.data))
  }, [])

  return (
    <>
      <Navbar />
      <section className="my-6 min-h-[600px]">
        <div className="container flex flex-col">
          <h2 className="text-[#7a7a7a] font-medium text-lg my-6">Cuidado e beleza no seu dia a dia</h2>
          <div className="flex gap-2 gap-y-6 flex-wrap justify-center">
            {produtos.length > 0 ? produtos.map((elemento, index) => (
            <Card foto={elemento.foto} nome={elemento.nome} preco={elemento.preco} key={index} id={elemento.id} />
            )): <GridLoader color="#2464b8"/>}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
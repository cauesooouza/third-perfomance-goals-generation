import { Pencil, Trash } from "@phosphor-icons/react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="my-6">
        <div className="container flex flex-col">
          <h2 className="text-[#7a7a7a] font-medium text-lg my-6">Cuidado e beleza no seu dia a dia</h2>
          <div className="flex flex-col w-[230px] items-center text-center border rounded-xl p-4 transition-all ease-in-out duration-300 group">
            <img src="https://drogal.vtexassets.com/arquivos/ids/175242-300-300?v=638387853389370000&width=300&height=300&aspect=true" alt="" />
            <span>Shampoo antiqueda aminexil descors energizante 200ml</span>
            <span className="mt-2 text-2xl font-medium color text-[#2464b8]">R$69,99</span>
            <div className="hidden gap-4 mt-4 group-hover:flex transition-opacity ease-in-out duration-300">
              <button className="flex rounded-full bg-yellow-400/80 py-1 px-2 font-medium"><Pencil size={28} /> Editar</button>
              <button className="flex rounded-full bg-[#c5221b] py-1 px-2 text-white font-medium"><Trash size={28} /> Excluir</button>
            </div>
          </div>
        </div>
      </section>
      <section className="my-6">
        <div className="container flex flex-col">
          <h2 className="text-[#7a7a7a] font-medium text-lg my-6">Monte sua cestinha de farma</h2>

        </div>
      </section>
      <Footer />
    </>
  )
}
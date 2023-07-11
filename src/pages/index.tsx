import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente("Ana", 34, '1'),
    new Cliente("Bia", 45, '1'),
    new Cliente("Carlos", 23, '1'),
    new Cliente("Pedro", 54, '1'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log("Editar...", cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log("Excluir...", cliente.nome)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela 
          clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
  )
}

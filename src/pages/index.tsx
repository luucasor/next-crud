import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import { useState } from "react";

export default function Home() {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente("Ana", 34, '1'),
    new Cliente("Bia", 45, '2'),
    new Cliente("Carlos", 23, '3'),
    new Cliente("Pedro", 54, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log("Editar...", cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log("Excluir...", cliente.nome)
  }

  function salvarCliente(cliente: Cliente) {
    console.log("salvarCliente...", cliente)
    setVisivel('tabela')
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={() => setVisivel('form')}>Novo Cliente</Botao>
            </div>
            <Tabela 
              clientes={clientes} 
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}></Tabela>
          </>
        ) : (
          <Formulario 
            cliente={clientes[2]}
            cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  )
}

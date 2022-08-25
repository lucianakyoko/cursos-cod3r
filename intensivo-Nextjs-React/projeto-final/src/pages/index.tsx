import { useState } from 'react';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from '../core/Cliente';


export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4'),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(`Editar: ${cliente.nome}`)
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir: ${cliente.nome}`)
  }

  const salvarCliente = (cliente: Cliente) => {
    console.log(cliente)
  };

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');



  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout titulo='Cadastro simples'>
        { visivel === 'tabela' ? (
          <>
            <div className='flex justify-end'>
              <Botao cor="green" className='mb-4' onClick={() => setVisivel('form')}>
                Novo cliente
              </Botao>
            </div>
            <Tabela 
              clientes={clientes} 
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>

        ) : (
          <Formulario 
            cliente={clientes[0]} 
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}

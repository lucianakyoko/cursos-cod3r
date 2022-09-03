import { useEffect, useState } from 'react';
import ColecaoCliente from '../backend/db/ColecaoCliente';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from '../core/Cliente';
import ClienteRepositorio from '../core/ClienteRepositorio';


export default function Home() {
  const repo: ClienteRepositorio = new ColecaoCliente();
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');

  useEffect(obterTodos, [])

  
  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes);
      setVisivel('tabela');
    })

  }
  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel('form');
  }

  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  const novoCliente = () => {
    setCliente(Cliente.vazio());
    setVisivel('form');
  };

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  };

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
              <Botao cor="green" className='mb-4' onClick={novoCliente}>
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
            cliente={cliente} 
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}

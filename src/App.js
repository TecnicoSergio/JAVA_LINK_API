//import logo from './logo.svg';
import './App.css';
import React from 'react';


const TESTEAPI = () => {
  const [ valor, setValor] = React.useState([])

  React.useEffect(() => {
    buscarDados()
  }, [])

  const buscarDados = async () => {
    const data = await fetch(' https://jsonplaceholder.typicode.com/albums')
    // /Postagens, /comentarios, /albums, /photos, /todos, /Comercial
    const users = await data.json()
    setValor(users)
  }
  return (
    <div>
      <h1>Teste API</h1>
      <table>
        <ul>
          {
            valor.map(item => (
              <li key="item.id">{item.id} - {item.title}</li>
            ))
          }
        </ul>
      </table>
    </div>
  );
}

export default TESTEAPI;

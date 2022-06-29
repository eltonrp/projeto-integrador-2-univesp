import { useState } from "react"
import { Titulo } from "../components/Titulo"
import Router from 'next/router'

export default function NewRegister() {

  const [dataForm, setDataForm] = useState({
    name: '',
    address: '',
    cep: '',
    phone: ''
  })

  const onChangeInput = e => setDataForm ( {...dataForm, [e.target.name]: e.target.value} )

  const sendRegister = async e => {
    e.preventDefault()
    try {
      await fetch('https://coletadb.herokuapp.com/post', {
        method: 'POST',
        body: JSON.stringify(dataForm),
        headers: { 'Content-Type': 'application/json' }
      }).then(Router.reload(window.location.pathname))
    } catch(err) {
      console.log('Erro: Tente mais tarde!')
    }
    
  }

  return (
    <>
      <Titulo nome='Cadastrar Ponto' />
      <div className="flex justify-center">
        <form onSubmit={sendRegister} className="flex flex-col w-full lg:w-1/2 md:w-3/4 sm:p-0 m-2 space-y-2 divide-y bg-slate-200">
          <input type="text" name="name" placeholder="Digite o nome" onChange={onChangeInput} required/>
          <label for="name">Nome do ponto</label>
          <input type="text" name="address" placeholder="Digite o endereço" onChange={onChangeInput} required/>
          <label for="address">Endereço</label>
          <input type="text" name="cep" placeholder="Digite o cep" onChange={onChangeInput} required/>
          <label for="cep">CEP</label>
          <input type="text" name="phone" placeholder="Digite o telefone" onChange={onChangeInput} required/>
          <label for="phone">Telefone</label>
          <div className="flex justify-center bg-white">
            <button className="bg-gray-300 px-4" type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </>
  )
}
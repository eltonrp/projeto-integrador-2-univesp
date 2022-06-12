import { useState } from "react"
import { Titulo } from "../components/Titulo"

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
    console.log(dataForm.name)
    try {
      await fetch('http://localhost:8080/post', {
        method: 'POST',
        body: JSON.stringify(dataForm),
        headers: { 'Content-Type': 'application/json' }
      })
    } catch(err) {
      console.log('Erro: Tente mais tarde!')
    }
  }

  return (
    <>
      <Titulo nome='Cadastrar Ponto' />
      <div className="flex justify-center">
        <form onSubmit={sendRegister} className="flex flex-col w-full lg:w-1/2 md:w-3/4 sm:p-0 m-2 border-2 space-y-2 divide-y bg-slate-100">
          <input className="bg-slate-100" type="text" name="name" placeholder="Digite o nome" onChange={onChangeInput} />
          <label for="name">Nome do ponto</label>
          <input className="bg-slate-100" type="text" name="address" placeholder="Digite o endereço" onChange={onChangeInput} />
          <label for="address">Endereço</label>
          <input className="bg-slate-100" type="text" name="cep" placeholder="Digite o cep" onChange={onChangeInput} />
          <label for="cep">CEP</label>
          <input className="bg-slate-100" type="tel" name="phone" placeholder="Digite o telefone" onChange={onChangeInput} />
          <label for="phone">Telefone</label>
          <button className="bg-gray-300" type="submit">Enviar</button>
        </form>
      </div>
    </>
  )
}
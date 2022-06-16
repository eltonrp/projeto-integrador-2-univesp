import { Titulo } from '../../components/Titulo'
import Router from 'next/router'
import { useState } from 'react'

export default function Update( {data} ) {
  const dados = data.datahome
  
  const [register, setRegister] = useState({
    name : dados.name,
    address : dados.address,
    cep : dados.cep,
    phone : dados.phone,
  })
  const onChangeInput = e => setRegister ( {...register, [e.target.name]: e.target.value} )
  
  const sendUpdate = async e => {
    e.preventDefault()
    try {
      await fetch(`http://localhost:8080/update/${dados.id}`, {
        method: 'PUT',
        body: JSON.stringify(register),
        headers: { 'Content-Type': 'application/json' }
      }).then(Router.reload(window.location.pathname))
    } catch(err) {
      console.log('Erro: Tente mais tarde!')
    }
    
  }
  
  return (
    <>
      <Titulo nome='Atualizar Ponto de Coleta' />

      <form onSubmit={sendUpdate} className='flex flex-col max-w-xl m-auto gap-2'>
        <label for="name"></label>
        <input id='name' type='text' name='name' onChange={onChangeInput} placeholder={dados.name} />
        <label for="address"></label>
        <input type="text" name='address' onChange={onChangeInput} placeholder={dados.address} />
        <label for="cep"></label>
        <input type="text" name='cep' onChange={onChangeInput} placeholder={dados.cep} />
        <label for="phone"></label>
        <input type="text" name='phone' onChange={onChangeInput} placeholder={dados.phone} />
        <div className="flex justify-center bg-white">
            <button className="bg-gray-300 px-4" type="submit">Atualizar</button>
        </div>
      </form>
    </>
  )
}

export async function getServerSideProps({ params, res }) {
  
  const idUpdate = params.id
  const response = await fetch(`http://localhost:8080/getupdate/${idUpdate}`)
  const data = await response.json()
  return {
    props: { data }
  }
}

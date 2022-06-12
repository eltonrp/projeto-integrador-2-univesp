import { Titulo } from "../components/Titulo"
import Router from 'next/router'

export default function Cadastro( {data} ) {
  
  const dados = data.datahome

  const deleteRegister = async registerId => {
    try {
      await fetch(`http://localhost:8080/delete/${registerId}`, {
        method: 'DELETE',
      }).then(Router.reload(window.location.pathname))
    } catch(err) {
      console.log('Erro: Tente mais tarde!')
    }
  }

  return (
    <>      <Titulo nome='Pontos de Descarte' />
      <div className="grid mt-4">
        <div>
          {dados.map(register => {
            return (
                <div key={register.id} className="bg-slate-200 m-4">
                  <div className="text-center font-semibold md:text-xl lg:text-2xl text-lg">{register.name.toUpperCase()}</div>
                  <div className="p-1 md:pl-40 lg:pl-60 md:text-lg border-b-2 border-slate-300">{register.address.toUpperCase()}</div>
                  <div className="p-1 md:pl-40 lg:pl-60 md:text-lg border-b-2 border-slate-300">CEP: {register.cep}</div>
                  <div className="p-1 md:pl-40 lg:pl-60 md:text-lg border-b-2 border-slate-300"><a href={`tel: ${register.phone}`}>Contato: {register.phone}</a> </div>
                  <div className="flex justify-center mt-4">
                    <button className="px-4  md:text-lg bg-red-400" onClick={() => deleteRegister(register.id)}>Delete</button>
                    <button className="px-4  md:text-lg bg-blue-400">Update</button>
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:8080/`)
  const data = await response.json()

  return { props: {data} }
}
import { Titulo } from "../components/Titulo"

export default function Cadastro( {data} ) {
  
  const dados = data.datahome

  return (
    <>      <Titulo nome='Pontos de Descarte' />
      <div className="grid mt-4">
        <div>
          {dados.map(register => {
            return (
                <div key={register.id}>
                  <div className="text-center font-semibold md:text-2xl text-lg">{register.name}</div>
                  <div className="p-1 md:pl-60 md:text-lg border-b-2">{register.address}</div>
                  <div className="p-1 md:pl-60 md:text-lg border-b-2">{register.cep}</div>
                  <div className="p-1 md:pl-60 md:text-lg border-b-2"><a href={`tel: ${register.phone}`}>Contato: {register.phone}</a> </div>
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
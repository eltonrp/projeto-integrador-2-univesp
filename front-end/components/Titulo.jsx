import Head from "next/head"

export function Titulo(props) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <title>Descarte Óleo - {props.nome}</title>
      </Head>
      <p className="bg-green-500 text-center text-3xl p-4 font-semibold tracking-widest">{props.nome}</p>
    </>
  )
}
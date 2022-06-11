import { Navbar } from './Navbar'

export function Layout(props) {
  return (
    <>
      <Navbar />
      <div>{props.children}</div>
    </>
  )
}
import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <nav className="flex place-content-between items-center p-4 text-xl tracking-widest">
        <div className='font-semibold'>
          <Link href='/'>Descarte Óleo</Link>
        </div>
        <ul className="flex gap-8 nav-item">
          <Link href='/'>Home</Link>
          <Link href='/about'>Sobre</Link>
          <Link href='/services'>Serviços</Link>
          <Link href='/register'>Pontos de Descarte</Link>
          <Link href='/contact'>Contato</Link>
        </ul>
        <button onClick={() => setIsOpen(!isOpen)} className='flex-col space-y-1 p-2 border-2 rounded-md hover:border-gray-500 duration-300 hidden nav-button'>
          <span className='bg-gray-700 w-7 h-0.5 rounded-full'></span>
          <span className='bg-gray-700 w-7 h-0.5 rounded-full'></span>
          <span className='bg-gray-700 w-7 h-0.5 rounded-full'></span>
        </button>
      </nav>
        {isOpen && (
          <div className='text-xl tracking-widest'>
            <ul className="flex flex-col p-4 gap-8">
              <Link href='/'>Home</Link>
              <Link href='/about'>Sobre</Link>
              <Link href='/services'>Serviços</Link>
              <Link href='/register'>Pontos de Descarte</Link>
              <Link href='/contact'>Contato</Link>
            </ul>
          </div>
        )}
    </div>
  )
}
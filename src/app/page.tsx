import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="flex">
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" href="/form">Formulario</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" href="/searchimages">Buscardor de imagenes</Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" href="/todo">Tareas</Link>
        </li>
      </ul>
    </main>
  )
}
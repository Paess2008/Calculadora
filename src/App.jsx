import { useState } from "react"
import "./Style.scss"

export default function App() {
  const [primeiroValor, setPrimeiroValor] =useState();
  const [segundoValor, setSegundoValor] =useState();

  const capturandoPrimeiroValor = (e) => {
   setPrimeiroValor(Number(e.target))
   console.log(e.target.value)
  }

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value))
  }
  return (
    <main>
      <h1>Calculadora</h1>
      <input onChange ={capturandoPrimeiroValor} type="number" placeholder="Insira um número"/>
      <input onChange ={capturandoSegundoValor} type="number" placeholder="Insira um número"/>
      <div>
        <button>+</button>
        <button>-</button>
        <button>/</button>
        <button>x</button>
      </div>
    </main>
  )
}
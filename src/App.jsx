import { useState, useEffect } from 'react'
import { Contenedor } from "./components/Contenedor"
import { consultar } from "./api/api.js"
import { Tarjeta } from './components/Tarjeta.jsx'
import Buscador from './buscador.jsx'

function App() {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [personaje, BuscarPersonaje] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {

    async function cargar() {
      setLoading(true)
      const i = await consultar()
      setItems(i)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
    cargar()
  }, [])
  if (loading) {
    return <p>Cargando....</p>

  }
  
  return (
    
    <div className="bg-gradient-to-b from-amber-300 to-amber-600">
      <input
      type='text'
      placeholder='buscar personaje'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          margin: '20px auto',
          display: 'block',
          width: '300px',
          borderRadius: '8px',
          border: '1px solid ',
          fontSize: '16px'
        }}
      />
      
      <Contenedor >
        {

          items.map((item) => {
            return <Tarjeta item={item} key={item?.id} />

          })
        }
      </Contenedor>
    </div>
  )
}

export default App

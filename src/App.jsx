import {useState, useEffect} from 'react'
import {Contenedor} from "./components/Contenedor"
import {consultar} from "./Api/api.js"
import {Tarjeta} from './components/Tarjeta.jsx'
function App(){
  
  const [items, setItems] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(()=>{

    async function cargar(){
      setLoading(true)
      const i = await consultar()
      setItems(i)
      setLoading(false)

    }
    cargar()
  },[])
  if(loading){
    return <p>cargando...</p>
  }



  return(
    <div>
      <Contenedor>
        {
          items.map((item)=>{
            return <Tarjeta item = {item} key={item.id}></Tarjeta>
          })
        }
      </Contenedor>
    </div>
  )
}
export default App
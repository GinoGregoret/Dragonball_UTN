import { useState, useEffect } from 'react';
import { Contenedor } from "./components/Contenedor";
import { consultar } from "./api/api.js";
import { Tarjeta } from './components/Tarjeta.jsx';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function cargar() {
      setLoading(true);
      const i = await consultar();
      setItems(i);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    cargar();
  }, []);
  const personajesFiltrados = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p className="text-center text-xl font-bold mt-10">Cargando...</p>;
  }

  return (
    <div className="bg-gradient-to-b from-amber-300 to-amber-600 min-h-screen p-4">
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block mx-auto my-6 w-80 p-3 rounded-lg border border-gray-400 text-lg"
      />

      <Contenedor>
        {personajesFiltrados.length === 0 ? (
          <p className="text-center text-white font-bold text-lg">No se encontró ningún personaje.</p>
        ) : (
          personajesFiltrados.map((item) => (
            <Tarjeta item={item} key={item?.id} />
          ))
        )}
      </Contenedor>
    </div>
  );
}

export default App;
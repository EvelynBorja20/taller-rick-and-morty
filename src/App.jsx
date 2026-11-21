import { useState, useEffect } from 'react';
import PersonajeCard from './components/PersonajeCard';

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      try {
        const respuesta = await fetch('https://rickandmortyapi.com/api/character');
        if (!respuesta.ok) {
          throw new Error('Error al conectar con la API');
        }
        const datos = await respuesta.json();
        
        setPersonajes(datos.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerPersonajes();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Personajes de Rick and Morty</h1>
        <p>Consumo de API REST pública con React y diseño Responsive</p>
      </header>

      {cargando && <p className="mensaje">Cargando personajes...</p>}
      {error && <p className="mensaje error">Ocurrió un error: {error}</p>}

      <main className="grid-personajes">
        {personajes.map((personaje) => (
          <PersonajeCard key={personaje.id} personaje={personaje} />
        ))}
      </main>
    </div>
  );
}

export default App;
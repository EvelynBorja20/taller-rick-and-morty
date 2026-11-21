function PersonajeCard({ personaje }) {
    
  const estadoClase =
    personaje.status === 'Alive'
      ? 'status-alive'
      : personaje.status === 'Dead'
      ? 'status-dead'
      : 'status-unknown';

  return (
    <article className="card">
      <img
        src={personaje.image}
        alt={personaje.name}
        className="card-img"
      />
      <div className="card-body">
        <h2 className="card-title">{personaje.name}</h2>

        <p className="card-info">
          <span className={`status-dot ${estadoClase}`}></span>
          <strong>Estado:</strong> {personaje.status}
        </p>

        <p className="card-info">
          <strong>Especie:</strong> {personaje.species}
        </p>

        <p className="card-info">
          <strong>Origen:</strong> {personaje.origin.name}
        </p>
      </div>
    </article>
  );
}

export default PersonajeCard;
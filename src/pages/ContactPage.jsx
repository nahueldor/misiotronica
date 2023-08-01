export function ContactPage() {
  return (
    <div className="container mt-4">
      <h1>Contacto</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input type="text" className="form-control" id="nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">
            Mensaje
          </label>
          <textarea className="form-control" id="mensaje" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Enviar
        </button>
      </form>
    </div>
  );
}

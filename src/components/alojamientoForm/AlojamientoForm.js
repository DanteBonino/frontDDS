import { useState } from "react";
import "./AlojamientoForm.css"; // Usaremos este archivo CSS

export default function CrearAlojamientoForm() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [maxHuespedes, setMaxHuespedes] = useState("");
  const [imagenes, setImagenes] = useState([""]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) return setError("El nombre es obligatorio.");
    if (descripcion.split(/\s+/).length > 500) return setError("La descripción no puede superar las 500 palabras.");
    if (imagenes.length < 5) return setError("Debes agregar al menos 5 imágenes.");
    setError("");

    const alojamiento = {
      nombre,
      descripcion,
      precio: Number(precio),
      maxHuespedes: Number(maxHuespedes),
      imagenes,
      //agregar anfitrión
    };

    console.log("Alojamiento creado:", alojamiento);
  };

  const handleImagenChange = (index, value) => {
    const nuevasImagenes = [...imagenes];
    nuevasImagenes[index] = value;
    setImagenes(nuevasImagenes);
  };

  const agregarImagen = () => {
    setImagenes([...imagenes, ""]);
  };

  const quitarImagen = (index) => {
    const nuevasImagenes = imagenes.filter((_, i) => i !== index);
    setImagenes(nuevasImagenes);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2>Crear Alojamiento</h2>

        {error && <p className="error">{error}</p>}

        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del alojamiento" />

        <label>Descripción (máx. 500 palabras):</label>
        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows={4} placeholder="Describe tu alojamiento..."></textarea>

        <div className="inline-group">
          <div>
            <label>Precio por noche:</label>
            <input type="number" min="0" value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Precio" />
          </div>
          <div>
            <label>Máx. huéspedes:</label>
            <input type="number" min="1" value={maxHuespedes} onChange={(e) => setMaxHuespedes(e.target.value)} placeholder="Cantidad" />
          </div>
        </div>

        <label>Imágenes (URLs):</label>
        {imagenes.map((img, idx) => (
          <div key={idx} className="imagen-input">
            <input
              type="text"
              value={img}
              onChange={(e) => handleImagenChange(idx, e.target.value)}
              placeholder="https://picsum.photos/..."
            />
            <button type="button" className="quitar-btn" onClick={() => quitarImagen(idx)}>Quitar</button>
            {img && (
              <img src={img} alt={`Imagen ${idx + 1}`} className="preview" />
            )}
          </div>
        ))}
        <button type="button" className="agregar-btn" onClick={agregarImagen}>
          Agregar imagen
        </button>

        <button type="submit" className="submit-btn">Crear alojamiento</button>
      </form>
    </div>
  );
}

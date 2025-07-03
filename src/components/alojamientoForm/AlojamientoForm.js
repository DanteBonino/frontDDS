import { useState } from "react";
import "./AlojamientoForm.css"; // Usaremos este archivo CSS
import { useUsuario } from "../../contexts/usuarioContext/UsuarioContext";
import ClearIcon from '@mui/icons-material/Clear';
import { precioMinimoAceptable } from "../../utils/utils";

export default function CrearAlojamientoForm() {
  const precioMinimo = String(precioMinimoAceptable)
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(precioMinimo);
  const [maxHuespedes, setMaxHuespedes] = useState("1");
  const [imagenes, setImagenes] = useState([""]);
  const [error, setError] = useState("");
  const { usuario } = useUsuario();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) return setError("El nombre es obligatorio.");
    if (!descripcion || descripcion.split(/\s+/).length > 500) return setError("La descripción es obligatoria y no puede superar las 500 palabras.");
    if (imagenes.length < 5) return setError("Debes agregar al menos 5 imágenes.");
    setError("");

    const alojamiento = {
      nombre,
      descripcion,
      precio: Number(precio),
      maxHuespedes: Number(maxHuespedes),
      imagenes,
      anfitrion: usuario.id
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
            <input type="number" min={precioMinimo} value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Precio" step={"1500"}/>
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
            <button type="button" className="quitar-btn" onClick={() => quitarImagen(idx)}>
              <ClearIcon color="white" fontSize="small"/>
            </button>
            {img && (
              <img src={img} alt={`Imagen ${idx + 1}`} className="preview" />
            )}
          </div>
        ))}
        <div className="lastSection">
          <button type="button" className="agregar-btn" disabled={imagenes.length > 4} onClick={agregarImagen}>
            Agregar imagen
          </button>

          <button type="submit" className="submit-btn">Crear alojamiento</button>
        </div>
      </form>
    </div>
  );
}

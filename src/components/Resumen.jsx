// src/components/Resumen.jsx
import { VEHICLES } from "../data/vehicles";

export default function Resumen({ vehiculoId, dias, costos }) {
  const vehiculo = vehiculoId ? VEHICLES[vehiculoId] : null;

  return (
    <div className="resumen-section">
      <h2>Resumen de Reserva</h2>

      <div className="vehiculo-resumen">
        <img
          id="img-vehiculo"
          src={vehiculo ? vehiculo.imagen : "/img/vehiculo2.png"}
          alt={vehiculo ? vehiculo.nombre : "Vehículo seleccionado"}
        />
        <h3 id="nombre-vehiculo">{vehiculo ? vehiculo.nombre : "Selecciona un vehículo"}</h3>
        <p id="transmision-vehiculo">{vehiculo ? `Transmisión: ${vehiculo.transmision}` : "-"}</p>
        <p id="anio-vehiculo">{vehiculo ? `Año: ${vehiculo.anio}` : "-"}</p>
        <p className="precio" id="precio-vehiculo">
          {vehiculo ? `S/ ${vehiculo.precio.toFixed(2)} por día` : "S/ 0.00 por día"}
        </p>
      </div>

      <div className="detalles-reserva">
        <h3>Detalles del Alquiler</h3>
        <div className="detalle-item">
          <span>Días de alquiler:</span>
          <span id="dias-alquiler">{dias}</span>
        </div>
        <div className="detalle-item">
          <span>Subtotal:</span>
          <span id="subtotal">S/ {costos.subtotal.toFixed(2)}</span>
        </div>
        <div className="detalle-item">
          <span>Seguro (10%):</span>
          <span id="seguro">S/ {costos.seguro.toFixed(2)}</span>
        </div>
        <div className="detalle-item total">
          <span>Total:</span>
          <span id="total">S/ {costos.total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

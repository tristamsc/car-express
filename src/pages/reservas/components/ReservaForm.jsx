// src/components/ReservaForm.jsx
import { VEHICLES } from "../data/vehicles";

export default function ReservaForm({ formData, onChange, onSubmit, minRecojo, minDevolucion }) {
  const handle = (e) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  return (
    <div className="form-section">
      <form onSubmit={onSubmit}>
        <h2>Datos de Reserva</h2>

        {/* Vehículo */}
        <div className="form-group">
          <label htmlFor="vehiculo">Vehículo:</label>
          <select id="vehiculo" name="vehiculo" value={formData.vehiculo} onChange={handle} required>
            <option value="">Selecciona un vehículo</option>
            {Object.entries(VEHICLES).map(([id, v]) => (
              <option key={id} value={id}>{v.nombre}</option>
            ))}
          </select>
        </div>

        {/* Fechas y horas */}
        <div className="form-group">
          <label htmlFor="fechaRecojo">Fecha de Recojo:</label>
          <input type="date" id="fechaRecojo" name="fechaRecojo"
                 min={minRecojo} value={formData.fechaRecojo} onChange={handle} required />
        </div>
        <div className="form-group">
          <label htmlFor="horaRecojo">Hora de Recojo:</label>
          <input type="time" id="horaRecojo" name="horaRecojo"
                 value={formData.horaRecojo} onChange={handle} required />
        </div>
        <div className="form-group">
          <label htmlFor="fechaDevolucion">Fecha de Devolución:</label>
          <input type="date" id="fechaDevolucion" name="fechaDevolucion"
                 min={minDevolucion} value={formData.fechaDevolucion} onChange={handle} required />
        </div>
        <div className="form-group">
          <label htmlFor="horaDevolucion">Hora de Devolución:</label>
          <input type="time" id="horaDevolucion" name="horaDevolucion"
                 value={formData.horaDevolucion} onChange={handle} required />
        </div>

        {/* Lugares */}
        <div className="form-group">
          <label htmlFor="lugarRecojo">Lugar de Recojo:</label>
          <select id="lugarRecojo" name="lugarRecojo" value={formData.lugarRecojo} onChange={handle} required>
            <option value="">Selecciona un lugar</option>
            <option value="oficina-central">Oficina Central - Miraflores</option>
            <option value="aeropuerto">Aeropuerto Internacional Jorge Chávez</option>
            <option value="estacion-central">Estación Central - Lima</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="lugarDevolucion">Lugar de Devolución:</label>
          <select id="lugarDevolucion" name="lugarDevolucion" value={formData.lugarDevolucion} onChange={handle} required>
            <option value="">Selecciona un lugar</option>
            <option value="oficina-central">Oficina Central - Miraflores</option>
            <option value="aeropuerto">Aeropuerto Internacional Jorge Chávez</option>
            <option value="estacion-central">Estación Central - Lima</option>
          </select>
        </div>

        <h2>Datos Personales</h2>
        <div className="form-group">
          <label htmlFor="nombres">Nombres:</label>
          <input type="text" id="nombres" name="nombres" value={formData.nombres} onChange={handle} required />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input type="text" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handle} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handle} required />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handle} required />
        </div>
        <div className="form-group">
          <label htmlFor="dni">DNI:</label>
          <input type="text" id="dni" name="dni" maxLength={8} value={formData.dni} onChange={handle} required />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handle} required />
        </div>

        <button type="submit" className="btn-reservar">Confirmar Reserva</button>
      </form>
    </div>
  );
}

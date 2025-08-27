import { useMemo, useState } from "react";
import "../../styles/reservas.css"; // Asegúrate de que esta ruta es correcta
import ReservaForm from "../../components/ReservaForm";
import Resumen from "../../components/Resumen";
import { VEHICLES } from "../../data/vehicles";

function todayStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function Reservas() {
  const [formData, setFormData] = useState({
    vehiculo: "",
    fechaRecojo: "",
    horaRecojo: "",
    fechaDevolucion: "",
    horaDevolucion: "",
    lugarRecojo: "",
    lugarDevolucion: "",
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
    dni: "",
    direccion: "",
  });

  // Fechas mínimas: hoy para recojo; devolución no puede ser antes de recojo
  const minRecojo = todayStr();
  const minDevolucion = formData.fechaRecojo || todayStr();

  // Cálculo de días y costos
  const { dias, costos } = useMemo(() => {
    const vehiculo = VEHICLES[formData.vehiculo];
    const empty = { dias: 0, costos: { subtotal: 0, seguro: 0, total: 0 } };
    if (!vehiculo || !formData.fechaRecojo || !formData.fechaDevolucion) return empty;

    const start = new Date(
      `${formData.fechaRecojo}T${formData.horaRecojo || "00:00"}`
    );
    const end = new Date(
      `${formData.fechaDevolucion}T${formData.horaDevolucion || "00:00"}`
    );
    if (isNaN(start) || isNaN(end) || end <= start) return empty;

    const MS_DAY = 1000 * 60 * 60 * 24;
    const diffDays = Math.max(1, Math.ceil((end - start) / MS_DAY));
    const subtotal = vehiculo.precio * diffDays;
    const seguro = subtotal * 0.1; // 10%
    const total = subtotal + seguro;

    return { dias: diffDays, costos: { subtotal, seguro, total } };
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.vehiculo) {
      alert("Por favor, selecciona un vehículo");
      return;
    }
    if (!formData.fechaRecojo || !formData.fechaDevolucion) {
      alert("Por favor, completa las fechas de recogida y devolución");
      return;
    }
    const start = new Date(
      `${formData.fechaRecojo}T${formData.horaRecojo || "00:00"}`
    );
    const end = new Date(
      `${formData.fechaDevolucion}T${formData.horaDevolucion || "00:00"}`
    );
    if (end <= start) {
      alert("La fecha de devolución debe ser posterior a la fecha de recogida");
      return;
    }

    alert("¡Reserva realizada con éxito! Te contactaremos pronto para confirmar los detalles.");

    // Reiniciar formulario
    setFormData({
      vehiculo: "",
      fechaRecojo: "",
      horaRecojo: "",
      fechaDevolucion: "",
      horaDevolucion: "",
      lugarRecojo: "",
      lugarDevolucion: "",
      nombres: "",
      apellidos: "",
      email: "",
      telefono: "",
      dni: "",
      direccion: "",
    });
  };

  return (
    <main className="reservas-container">
      <h1>Reserva tu Vehículo</h1>
      <div className="reserva-content">
        <ReservaForm
          formData={formData}
          onChange={setFormData}
          onSubmit={handleSubmit}
          minRecojo={minRecojo}
          minDevolucion={minDevolucion}
        />
        <Resumen vehiculoId={formData.vehiculo} dias={dias} costos={costos} />
      </div>
    </main>
  );
}

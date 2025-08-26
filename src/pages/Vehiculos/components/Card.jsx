import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/card.css";

// Componente de tarjeta individual de vehículo
// Muestra vista frontal (imagen, precio, botón reservar)
export default function Card({ imagen, titulo, descripcion, anio, precio, etiqueta, detalles }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card relative">
      {etiqueta && <div className="etiqueta">{etiqueta}</div>}

      <button
        className="toggle-info-btn"
        onClick={() => setShowDetails(!showDetails)}
        aria-label="Alternar información del vehículo"
        aria-pressed={showDetails}
      >
        {showDetails ? "Información del vehículo ✕" : "Información del vehículo"}
      </button>

      <AnimatePresence mode="wait">
        {!showDetails ? (
          <motion.div
            key="front"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={imagen} alt={titulo} className="card-img" />
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            {anio && <p className="anio">Año: {anio}</p>}
            <p className="precio">{precio}</p>

            {/* Botón reservar abajo */}
            <button className="reservar-btn">RESERVAR AUTO</button>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="detalles-card"
          >
            <div className="lista-detalles-grid">
              {detalles?.map((d, i) => (
                <div key={i}>
                  {d.icono} {d.texto}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

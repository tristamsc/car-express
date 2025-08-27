import "./styles/vehiculos.css";
import Card from "./components/Card";

// Importación de íconos
import { DoorOpen, Users, Luggage, Snowflake, Smartphone, Shield, Car } from "lucide-react";

// Importación de imágenes
import vehiculo2 from "../../assets/img/vehiculo2.png";
import corolla10 from "../../assets/img/corolla10.png";
import jetta2 from "../../assets/img/jetta2.png";
import corollacross1 from "../../assets/img/corollacross1.jpg";
import qashqai from "../../assets/img/nissan-qashqai-2024.png";
import creta from "../../assets/img/hyundai_creta.png";
import frontier from "../../assets/img/Nissan-frontier-2024.png";
import hilux from "../../assets/img/toyota_hilux_2025.png";
import mitsubishi from "../../assets/img/mitsubishi_2025.png";

export default function Vehiculos() {
  const vehiculos = [
    { 
      id: "nissan-versa-2025", 
      imagen: vehiculo2, 
      titulo: "Nissan Versa", 
      descripcion: "Transmisión: Automática", 
      anio: 2025, 
      precio: "S/ 112.00 por día",
      detalles: [
        { icono: <DoorOpen className="icono" />, texto: "4 puertas" },
        { icono: <Users className="icono" />, texto: "5 asientos" },
        { icono: <Luggage className="icono" />, texto: "2 maletas grandes + 1 pequeña" },
        { icono: <Snowflake className="icono" />, texto: "Aire acondicionado" },
        { icono: <Smartphone className="icono" />, texto: "Bluetooth, USB, CarPlay" },
        { icono: <Shield className="icono" />, texto: "6 Airbags" },
        { icono: <Car className="icono" />, texto: "Tracción FWD" },
      ]
    },
    { 
      id: "toyota-corolla-2025", 
      imagen: corolla10, 
      titulo: "Toyota Corolla", 
      descripcion: "Transmisión: Mecánica", 
      anio: 2025, 
      precio: "S/ 150.00 por día", 
      etiqueta: "Más rentado",
      detalles: [
        { icono: <DoorOpen className="icono" />, texto: "4 puertas" },
        { icono: <Users className="icono" />, texto: "5 asientos" },
        { icono: <Luggage className="icono" />, texto: "2 maletas grandes" },
        { icono: <Snowflake className="icono" />, texto: "Aire acondicionado" },
        { icono: <Smartphone className="icono" />, texto: "Bluetooth, USB, Android Auto" },
        { icono: <Shield className="icono" />, texto: "7 Airbags" },
        { icono: <Car className="icono" />, texto: "Tracción FWD" },
      ]
    },
    { 
      id: "volkswagen-jetta-2025", 
      imagen: jetta2, 
      titulo: "Volkswagen Jetta", 
      descripcion: "Transmisión: Automática", 
      anio: 2025, 
      precio: "S/ 135.00 por día",
      detalles: [
        { icono: <DoorOpen className="icono" />, texto: "4 puertas" },
        { icono: <Users className="icono" />, texto: "5 asientos" },
        { icono: <Luggage className="icono" />, texto: "2 maletas grandes" },
        { icono: <Snowflake className="icono" />, texto: "Aire acondicionado" },
        { icono: <Smartphone className="icono" />, texto: "Bluetooth, USB" },
        { icono: <Shield className="icono" />, texto: "6 Airbags" },
        { icono: <Car className="icono" />, texto: "Tracción FWD" },
      ]
    },
    { 
      id: "toyota-corolla-cross-2025", 
      imagen: corollacross1, 
      titulo: "Toyota Corolla Cross", 
      descripcion: "Transmisión: Automática", 
      anio: 2025, 
      precio: "S/ 170.00 por día",
      detalles: [
        { icono: <DoorOpen className="icono" />, texto: "5 puertas" },
        { icono: <Users className="icono" />, texto: "5 asientos" },
        { icono: <Luggage className="icono" />, texto: "3 maletas grandes" },
        { icono: <Snowflake className="icono" />, texto: "Aire acondicionado" },
        { icono: <Smartphone className="icono" />, texto: "Bluetooth, USB, CarPlay" },
        { icono: <Shield className="icono" />, texto: "7 Airbags" },
        { icono: <Car className="icono" />, texto: "Tracción AWD" },
      ]
    },
    { 
      id: "nissan-qashqai-2025", 
      imagen: qashqai, 
      titulo: "Nissan Qashqai", 
      descripcion: "Transmisión: Automática", 
      anio: 2025, 
      precio: "S/ 165.00 por día",
      detalles: [
        { icono: <DoorOpen className="icono" />, texto: "5 puertas" },
        { icono: <Users className="icono" />, texto: "5 asientos" },
        { icono: <Luggage className="icono" />, texto: "2 maletas grandes + 1 pequeña" },
        { icono: <Snowflake className="icono" />, texto: "Aire acondicionado" },
        { icono: <Smartphone className="icono" />, texto: "Bluetooth, USB" },
        { icono: <Shield className="icono" />, texto: "6 Airbags" },
        { icono: <Car className="icono" />, texto: "Tracción AWD" },
      ]
    },
    { 
      id: "hyundai-creta-2025", 
      imagen: creta, 
      titulo: "Hyundai Creta", 
      descripcion: "Transmisión: Automática", 
      anio: 2025, 
      precio: "S/ 155.00 por día",
      detalles: [
        { icono: <DoorOpen className="icono" />, texto: "5 puertas" },
        { icono: <Users className="icono" />, texto: "5 asientos" },
        { icono: <Luggage className="icono" />, texto: "3 maletas medianas" },
        { icono: <Snowflake className="icono" />, texto: "Aire acondicionado" },
        { icono: <Smartphone className="icono" />, texto: "Bluetooth, USB, Android Auto" },
        { icono: <Shield className="icono" />, texto: "6 Airbags" },
        { icono: <Car className="icono" />, texto: "Tracción FWD" },
      ]
    },
    { 
      id: "nissan-frontier-2025", 
      imagen: frontier, 
      titulo: "Nissan Frontier", 
      descripcion: "Transmisión: Automática", 
      anio: 2025, 
      precio: "S/ 185.00 por día",
      detalles: [
        { icono: <DoorOpen className="icono" />, texto: "4 puertas" },
        { icono: <Users className="icono" />, texto: "5 asientos" },
        { icono: <Luggage className="icono" />, texto: "Caja pickup amplia" },
        { icono: <Snowflake className="icono" />, texto: "Aire acondicionado" },
        { icono: <Smartphone className="icono" />, texto: "Bluetooth, USB" },
        { icono: <Shield className="icono" />, texto: "6 Airbags" },
        { icono: <Car className="icono" />, texto: "Tracción 4x4" },
      ]
    },
    { 
      id: "toyota-hilux-2025", 
      imagen: hilux, 
      titulo: "Toyota Hilux", 
      descripcion: "Transmisión: Automática", 
      anio: 2025, 
      precio: "S/ 195.00 por día",
      detalles: [
        { icono: <DoorOpen className="icono" />, texto: "4 puertas" },
        { icono: <Users className="icono" />, texto: "5 asientos" },
        { icono: <Luggage className="icono" />, texto: "Caja pickup amplia" },
        { icono: <Snowflake className="icono" />, texto: "Aire acondicionado" },
        { icono: <Smartphone className="icono" />, texto: "Bluetooth, USB" },
        { icono: <Shield className="icono" />, texto: "7 Airbags" },
        { icono: <Car className="icono" />, texto: "Tracción 4x4" },
      ]
    },
    { 
      id: "mitsubishi-l200-2025", 
      imagen: mitsubishi, 
      titulo: "Mitsubishi L200", 
      descripcion: "Transmisión: Automática", 
      anio: 2025, 
      precio: "S/ 190.00 por día",
      detalles: [
        { icono: <DoorOpen className="icono" />, texto: "4 puertas" },
        { icono: <Users className="icono" />, texto: "5 asientos" },
        { icono: <Luggage className="icono" />, texto: "Caja pickup amplia" },
        { icono: <Snowflake className="icono" />, texto: "Aire acondicionado" },
        { icono: <Smartphone className="icono" />, texto: "Bluetooth, USB" },
        { icono: <Shield className="icono" />, texto: "6 Airbags" },
        { icono: <Car className="icono" />, texto: "Tracción 4x4" },
      ]
    }
  ];

  return (
    <div className="vehiculos-page">
      <section className="filtros">
        <select defaultValue="">
          <option value="">Todas las marcas</option>
          <option value="nissan">Nissan</option>
          <option value="toyota">Toyota</option>
          <option value="volkswagen">Volkswagen</option>
          <option value="hyundai">Hyundai</option>
          <option value="mitsubishi">Mitsubishi</option>
        </select>

        <select defaultValue="">
          <option value="">Todos los modelos</option>
          <option value="versa">Versa</option>
          <option value="corolla">Corolla</option>
          <option value="jetta">Jetta</option>
          <option value="corolla-cross">Corolla Cross</option>
          <option value="qashqai">Qashqai</option>
          <option value="creta">Creta</option>
          <option value="frontier">Frontier</option>
          <option value="hilux">Hilux</option>
          <option value="l200">L200</option>
        </select>

        <select defaultValue="">
          <option value="">Todos los precios</option>
          <option value="0-130">Menos de S/ 130</option>
          <option value="130-160">S/ 130 - S/ 160</option>
          <option value="160-180">S/ 160 - S/ 180</option>
          <option value="180-9999">Más de S/ 180</option>
        </select>

        <button>Limpiar filtros</button>
      </section>

      {/* 🔹 Cards (funcionales) */}
      <main id="vehiculosContainer">
        {vehiculos.map((auto) => (
          <Card key={auto.id} {...auto} />
        ))}
      </main>

      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/51987654321223"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}



import { useState, useEffect } from "react";
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
import { Nav } from "../../components/Nav";
import Footer from "../../components/Footer";

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

  // Estados
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");

  // 🔹 Extraer marcas y modelos
  const marcasDisponibles = [...new Set(vehiculos.map((v) => v.titulo.split(" ")[0]))];

  const modelosTodos = vehiculos.map((v) => {
    const partes = v.titulo.split(" ");
    return { marca: partes[0], modelo: partes.slice(1).join(" ") };
  });

  // 🔹 Modelos dependientes de la marca (si no hay marca, mostrar todos los modelos)
  const modelosDisponibles = marca
    ? [...new Set(modelosTodos.filter((m) => m.marca === marca).map((m) => m.modelo))]
    : [...new Set(modelosTodos.map((m) => m.modelo))];

  // 🔹 Si el usuario elige un modelo directamente, seleccionar automáticamente su marca
  useEffect(() => {
    if (modelo !== "") {
      const encontrado = modelosTodos.find((m) => m.modelo === modelo);
      if (encontrado && marca !== encontrado.marca) {
        setMarca(encontrado.marca);
      }
    }
  }, [modelo]);

  // 🔹 Rangos de precios (predefinidos)
  const rangosPrecio = [
    { label: "Menos de S/ 130", min: 0, max: 130 },
    { label: "S/ 130 - S/ 160", min: 130, max: 160 },
    { label: "S/ 160 - S/ 180", min: 160, max: 180 },
    { label: "Más de S/ 180", min: 180, max: 9999 },
  ];

  // 🔹 Filtrado final
  const filteredVehiculos = vehiculos.filter((auto) => {
    const partes = auto.titulo.split(" ");
    const autoMarca = partes[0];
    const autoModelo = partes.slice(1).join(" ");
    const precioNumerico = parseFloat(
      auto.precio
        .replace("S/", "")
        .replace("por día", "")
        .replace(/[^\d.]/g, "")
        .trim()
    );

    return (
      (marca === "" || autoMarca === marca) &&
      (modelo === "" || autoModelo === modelo) &&
      (precioMin === "" || precioNumerico >= parseFloat(precioMin)) &&
      (precioMax === "" || precioNumerico <= parseFloat(precioMax))
    );
  });

  return (
    
    <div className="vehiculos-page">
      <Nav />
      {/* 🔹 Filtros */}
      <section className="filtros">
        {/* Marca */}
        <select
          value={marca}
          onChange={(e) => {
            setMarca(e.target.value);
            setModelo("");
          }}
        >
          <option value="">Todas las marcas</option>
          {marcasDisponibles.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        {/* Modelo */}
        <select
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
        >
          <option value="">Todos los modelos</option>
          {modelosDisponibles.map((mod) => (
            <option key={mod} value={mod}>{mod}</option>
          ))}
        </select>

        {/* Precio */}
        <select
          value={`${precioMin}-${precioMax}`}
          onChange={(e) => {
            const [min, max] = e.target.value.split("-");
            setPrecioMin(min || "");
            setPrecioMax(max || "");
          }}
        >
          <option value="-">Todos los precios</option>
          {rangosPrecio.map((r) => (
            <option key={r.label} value={`${r.min}-${r.max}`}>{r.label}</option>
          ))}
        </select>

        <button
          onClick={() => {
            setMarca("");
            setModelo("");
            setPrecioMin("");
            setPrecioMax("");
          }}
        >
          Limpiar filtros
        </button>
      </section>

      {/* 🔹 Cards */}
      <main id="vehiculosContainer">
        {filteredVehiculos.length > 0 ? (
          filteredVehiculos.map((auto) => <Card key={auto.id} {...auto} />)
        ) : (
          <p>No se encontraron vehículos con esos filtros.</p>
        )}
      </main>

      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/51987654321223"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat en WhatsApp"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
        />
      </a>

      <Footer />
    </div>
  );
}

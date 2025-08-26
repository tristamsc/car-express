import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio")
  .min(3, "El nombre debe tener mínimo 3 caracteres"),

  email: yup.string().required("El email es obligatorio")
  .email("Formato de email inválido")
  .max(30, 'El email debe tener máximo 30 caracteres'),

  phone: yup.string().required("El teléfono es obligatorio")
  .matches(/^[0-9]+$/, "Solo se permiten números")
  .min(9, "El télefono debe tener mínimo 9 dígitos")
  .max(11,'El nombre debe tener 11 caracteres como maximo'),
    
  mensaje: yup.string().required("El mensaje es obligatorio")
  .min(10, "El mensaje debe tener como mínimo 10 caracteres")
  .max(60, "El mensaje debe tener como máximo 60 caracteres"),
});

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({resolver: yupResolver(schema),});

  // Función al enviar el formulario
  const onSubmit = (data) => {
    console.log("Formulario enviado :", data);

    reset(); // limpiar el formulario
  };

  return (
    <div className="form-section">
      <h2>Contáctanos</h2>
      <p>
        Indícanos en un mensaje tus dudas y nos pondremos en contacto contigo en la brevedad posible.
      </p>

      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        {/* Nombre */}
        <input type="text" placeholder="Nombre" {...register("name")} />
        {errors.name && <p className="error-msg">{errors.name.message}</p>}

        {/* Email */}
        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email && <p className="error-msg">{errors.email.message}</p>}

        {/* Teléfono */}
        <input type="tel" placeholder="Teléfono" {...register("phone")} />
        {errors.phone && <p className="error-msg">{errors.phone.message}</p>}

        {/* Mensaje */}
        <textarea placeholder="¿Cuál es tu mensaje?" {...register("mensaje")}></textarea>
        {errors.mensaje && <p className="error-msg">{errors.mensaje.message}</p>}

        {/* Botón */}
        <button type="submit">Enviar mensaje</button>
      </form>

      {/* Mensaje de confirmación */}
      {isSubmitSuccessful && (
        <p className="success-msg"> ¡Tu mensaje fue enviado correctamente!</p>
      )}
    </div>
  );
};

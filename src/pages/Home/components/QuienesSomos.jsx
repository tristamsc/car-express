import React from 'react'
import img1 from '../../../assets/img/quienes-somos-1.png'
import img2 from '../../../assets/img/quienes-somos-2.png'
export const QuienesSomos = () => {
  return (
        <section className="quienes-somos home-section">
            <div className="text" >
                <h2 data-aos="zoom-out" className="title">¿Quienes somos?</h2>
                <p data-aos="zoom-in-up" data-aos-duration="500" className="parrafo">
                    Somos un equipo apasionado y dedicado a hacer que el proceso de rentar un auto sea lo más sencillo y cómodo posible. En un mundo cada vez más digital, creemos que el acceso a la movilidad debería estar al alcance de tu mano, y por eso hemos creado una plataforma web intuitiva y eficiente. Nuestro objetivo es conectar a quienes necesitan un vehículo con una amplia flota de autos de alta calidad, garantizando un servicio transparente y de confianza. Nos mueve la idea de que cada viaje, ya sea por negocios o por placer, comience con la tranquilidad de tener el auto perfecto esperando por ti.
                </p>
            </div>
            <div className="img-box">
                <img data-aos="flip-left" className="img1 shadow" src={img1} alt="" />
                <img data-aos="flip-right" className="img2 shadow" src={img2} alt="" />
            </div>
        </section>
  )
}

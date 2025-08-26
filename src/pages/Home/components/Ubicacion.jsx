import React from 'react'

export const Ubicacion = () => {
    return (
        <section className='home-section'>
            <div className="viaje-text">
                <h2 className="title" >Encuentranos aqui</h2>
                <p data-aos="fade-up" className="parrafo">
                    Nuestras instalaciones principales se encuentran estratégicamente ubicadas para ofrecerle un acceso conveniente. Utilice el mapa interactivo para obtener indicaciones precisas y planificar su visita sin contratiempos. Estamos a su disposición para cualquier consulta o para facilitar el proceso de alquiler de su vehículo.
                </p>
            </div>

            <div data-aos="zoom-out-left" className="mapa shadow">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4639.937556799378!2d-77.05250982437711!3d-12.063679168254426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8e7cb3fa1b3%3A0xbec2fea9a45d1f66!2sPacificar%20Renta%20de%20Autos!5e0!3m2!1ses-419!2spe!4v1755655702078!5m2!1ses-419!2spe" width="600" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

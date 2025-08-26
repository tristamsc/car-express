import React, { useEffect, useState } from 'react'

export const PorqueElegirnos = () => {
    const cards1 = [
        /* primera seccion */
        { id: 1, titulo: 'Variedad de autos', descripcion: 'Encuentra el vehículo perfecto para tu viaje, desde modelos compactos hasta SUVs, todos en excelente estado.' },
        { id: 2, titulo: 'Ubicación Céntrica', descripcion: 'Recoge y devuelve tu auto fácilmente en el corazón de la ciudad, ahorrando tiempo y complicaciones.' },
        { id: 3, titulo: 'Alquiler Económico', descripcion: 'Tarifas competitivas y transparentes que se ajustan a tu presupuesto, garantizando un servicio de calidad.' },
    ]
    
    const cards2 = [
        { id: 1, titulo: 'Soporte 24/7', descripcion: 'Estamos disponibles a toda hora para ayudarte con cualquier duda o imprevisto, dándote tranquilidad en cada kilómetro.' },
        { id: 2, titulo: 'Proceso de Reserva Sencillo', descripcion: 'Reserva tu auto en solo unos clics desde nuestra plataforma web intuitiva y rápida, sin trámites complicados.' },
        { id: 3, titulo: 'Flexibilidad en la Renta', descripcion: 'Elige la duración de tu alquiler, desde unas horas hasta meses, con opciones que se ajustan perfectamente a tus planes de viaje.' },
    ]

    let numeroCards = 2;

    /* const section1 = cards.filter(card => card.id <= 3);
    const section2 = cards.filter(card => card.id > 3); */

    const [sectionIndex, setSectionIndex] = useState(0);
    const [sectionAct, setSectionAct] = useState(cards1);
    
/*     let claseRotacion = ['rotate-out', 'rotate-in'] */

    useEffect(() => {
        const interval = setInterval(() => {
            cambiarSection(sectionIndex + 1) 
        }, 7000)
        
        const cambiarSection = (indexAct) => {
            let indexNew;
            if(indexAct>=numeroCards){
                indexNew = 0
                setSectionAct(cards1)
            }else{
                indexNew=1
                setSectionAct(cards2)
            }
            setSectionIndex(indexNew)
        }
           
        return () => clearInterval(interval)
    }, [sectionIndex])


    console.log(sectionIndex)
return (
    <section className="porque-elegirnos home-section">
        <h2 className="title">¿Porque elegirnos?</h2>

        <div className="targets-container">

            {sectionAct.map(({ id, titulo, descripcion }) =>
                <div key={id} className={`target-box shadow text`}>
                    <h4 className="subtitle">{titulo}</h4>
                    <p style={{ textAlign: 'center' }} className="parrafo">{descripcion}</p>
                </div>
            )}

        </div>
    </section>
)
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const projects = [
    {
        title: "Proyecto Tugesto",
        category: "Edicón de Vídeo/Motion Graphics",
        img: "imagenes/recursos/proyecto-1.jpg",
        software: ["Pr", "Ae", "Fi"],
        duration: "9 MESES",
        role: "Editor de vídeos",
        year: "2024",
        challenge: "En este proyecto en tugesto desarrollé una serie de vídeos animados para mostrar al usuario, de forma realista, el funcionamiento del producto. Diseñé la propuesta visual en Figma, produje las animaciones y escenas en After Effects y realicé la edición y postproducción final en Premiere Pro, garantizando coherencia visual y calidad profesional en cada pieza.",
        gallery: [
            "videos/tugesto/Vídeo_Final.mp4",
            "videos/tugesto/Video-corto-tugesto.mp4",
            "videos/tugesto/Video-Producto.mp4",
            "videos/tugesto/TikTok-Producto-22-08-25.mp4",
        ]
    },
    {
        title: "Diseño Chargeverse",
        category: "Social Media",
        img: "imagenes/090125_Chargeverse_Carrusel_C1.jpg",
        software: ["Ai", "Ps"],
        duration: "",
        role: "Social Media Designer",
        year: "2024",
        challenge: "Crear un carrusel para redes sociales acorde con en estilo de la marca.",
        solution: "Desarrollo de un carrusel en los formatos correspondientes a las redes sociales que se iban a publicar utilizando Photoshop e Illustrator. Todo esto durante mi estancia en Esparta Digital.",
        gallery: [
            "imagenes/090125_Chargeverse_Carrusel_C1.jpg",
            "imagenes/090125_Chargeverse_Carrusel_C2.jpg",
            "imagenes/090125_Chargeverse_Carrusel_C3.jpg",
            "imagenes/090125_Chargeverse_Carrusel_C4.jpg",
            "imagenes/090125_Chargeverse_Carrusel_C5.jpg"
        ]
    },
    {
        title: "Plataforma Gestorías",
        category: "Diseño y animación de vídeo",
        img: "imagenes/recursos/proyecto-3.jpg",
        software: ["Fi", "Ae"],
        duration: "2 meses",
        role: "Animación web",
        year: "2024",
        challenge: "Desarrollé un dashboard completamente ficticio con el objetivo de presentar y vender el producto a gestorías. Diseñé toda la interfaz en Figma, definiendo la estructura, jerarquía visual y experiencia de usuario, y posteriormente realicé la animación en After Effects para dotarlo de dinamismo y reforzar su atractivo comercial.",
        solution: "Implementación de arquitectura de componentes modulares con dashboards interactivos.",
        gallery: [
            "videos/tugesto-2/Videos gestorias web-final-editado.mp4",
        ]
    },
    {
        title: "Proyecto Esparta",
        category: "Diseño y Redes Sociales",
        img: "imagenes/gifs-esparta/1624-BodegasNodus-GIF-V2.gif",
        software: ["Ps", "Ae"],
        duration: "2 WEEKS",
        role: "Motion Designer",
        year: "2024",
        challenge: "Creación de una serie de elementos visuales dinámicos para distintas empresas que tenía a mi cargo en Esparta Digital.",
        solution: "Desarrollo de GIFs animados optimizados para redes sociales que capturan la energía de la marca.",
        gallery: [
            "imagenes/gifs-esparta/1624-BodegasNodus-GIF-V2.gif",
            "imagenes/gifs-esparta/200125-Distron_GIF.gif",
            "imagenes/gifs-esparta/251124-Washtec-GIF.gif",
            "imagenes/gifs-esparta/GIF.gif",
            "imagenes/gifs-esparta/210125-Chargeverse-GIF.gif"
        ]
    },
    {
        title: "Diseño Fermentaris",
        category: "Diseño y Redes Sociales",
        img: "imagenes/stories-fermentaris/111224-Fermentaris-S1.png",
        software: ["Ps", "Ai"],
        duration: "",
        role: "Diseño Social Media",
        year: "2024",
        challenge: "Crear una serie de Stories para la marca Fermentaris.",
        solution: "Rediseño basado en 'Glassmorphism' para dar un aire tecnológico y premium.",
        gallery: [
            "imagenes/stories-fermentaris/111224-Fermentaris-S1.png",
            "imagenes/stories-fermentaris/111224-Fermentaris-S2.png",
            "imagenes/stories-fermentaris/111224-Fermentaris-S3.png",
            "imagenes/stories-fermentaris/111224-Fermentaris-S4.png",
            "imagenes/stories-fermentaris/111224-Fermentaris-S5.png"
        ]
    },
    {
        title: "Proyecto Eactivo",
        category: "Video y Diseño",
        img: "videos/eactivo/C1.png",
        software: ["Ps", "Ai"],
        duration: "1 WEEK",
        role: "Digital Artist",
        year: "2024",
        challenge: "Crear una narrativa visual a través de tipografía experimental y texturas.",
        solution: "Uso de técnicas de 'collage' digital y distorsión tipográfica analógica.",
        gallery: [
            "videos/eactivo/eactivo_Reel.mp4",
            "videos/eactivo/C1.png",
            "videos/eactivo/C2.png",
            "videos/eactivo/C3.png",
        ]
    },
    {
        title: "Video Para RRSS",
        category: "Edición y grabación de vídeo",
        img: "imagenes/recursos/proyecto-1.jpg",
        software: ["Pr", "Ae"],
        duration: "TBD",
        role: "Editor y Videógrafo",
        year: "2024",
        challenge: "Proyecto centrado en la grabación y edición de un vídeo corto para redes sociales. Se ha buscado un resultado dinámico, utilizando cortes rápidos, transiciones y efectos visuales para maximizar la retención de la audiencia.",
        gallery: [
            "videos/tugesto_3/GesBite.mp4"
        ]
    },
    /*
    {
        title: "Título Nuevo Proyecto 2",
        category: "Categoría 2",
        img: "imagenes/recursos/proyecto-3.jpg",
        software: ["Pr", "Ae"],
        duration: "TBD",
        role: "Rol",
        year: "2024",
        challenge: "Descripción del desafío o proyecto.",
        solution: "Descripción de la solución aportada.",
        gallery: []
    }
    */
];

const FeaturedWorks = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="works" style={{ padding: 'var(--section-padding) 0' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{
                        marginBottom: '3rem',
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)'
                    }}
                >
                    Trabajos <span className="accent-text">Destacados</span>
                </motion.h2>

                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                        ease: "easeOut"
                                    }
                                }
                            }}
                            whileHover={{
                                y: -10,
                                boxShadow: '0 20px 40px rgba(255, 255, 0, 0.2)',
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            onClick={() => setSelectedProject(project)}
                            style={{
                                position: 'relative',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                aspectRatio: '16/9',
                                cursor: 'pointer',
                                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}${project.img}`}
                                alt={project.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s' }}
                            />
                            <div
                                className="project-glass-overlay"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'rgba(0,0,0,0.2)',
                                    backdropFilter: 'blur(4px)',
                                    padding: '1.5rem',
                                    transition: '0.4s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    borderTop: '1px solid rgba(255,255,255,0.1)',
                                    zIndex: 2
                                }}
                            >
                                <span style={{ fontSize: '0.7rem', color: 'var(--accent-yellow)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
                                    {project.category}
                                </span>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    marginTop: '0.4rem',
                                    fontWeight: '900',
                                    color: '#fff',
                                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                                }}>
                                    {project.title}
                                </h3>
                            </div>

                            {/* Software Badges */}
                            <div style={{
                                position: 'absolute',
                                bottom: '1.2rem',
                                left: '1.2rem',
                                display: 'flex',
                                gap: '0.5rem',
                                zIndex: 3
                            }}>
                                {project.software && project.software.map((sw, si) => {
                                    const colors = {
                                        "Pr": "#312963", // Premiere Purple
                                        "Ps": "#31a8ff", // Photoshop Blue
                                        "Ai": "#ff9a00", // Illustrator Orange
                                        "Ae": "#cf96fd", // After Effects Purple
                                        "Fi": "#f24e1e", // Figma Orange/Red
                                        "Re": "#61dafb" // React Blue
                                    };
                                    return (
                                        <span key={si} style={{
                                            width: '24px',
                                            height: '24px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: colors[sw] || '#333',
                                            color: '#fff',
                                            fontSize: '0.65rem',
                                            fontWeight: 'bold',
                                            borderRadius: '4px',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
                                        }}>
                                            {sw}
                                        </span>
                                    );
                                })}
                            </div>
                            <motion.div
                                whileHover={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    border: '2px solid var(--accent-yellow)',
                                    borderRadius: '12px',
                                    boxShadow: 'inset 0 0 20px var(--accent-yellow-glow)',
                                    pointerEvents: 'none'
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default FeaturedWorks;

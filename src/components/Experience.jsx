import React from 'react';
import { motion } from 'framer-motion';
import { Video, Palette, Camera, Mic } from 'lucide-react';
import AmbientBackground from './AmbientBackground';

const experiences = [
    {
        role: "Video Editor / Diseñador Gráfico",
        company: "tugesto (Grupo Visma)",
        period: "9 meses",
        icon: <Video size={24} />,
        iconColor: "#EBA82F", // Yellow
        desc: (color) => <>En tugesto, empresa SaaS B2B del grupo <span style={{ color, fontWeight: 'bold' }}>Visma</span>, trabajé en el área de marketing desarrollando <span style={{ color, fontWeight: 'bold' }}>contenido audiovisual</span>, creatividades para <span style={{ color, fontWeight: 'bold' }}>redes sociales</span> y materiales digitales. Me encargué de la <span style={{ color, fontWeight: 'bold' }}>producción</span> y <span style={{ color, fontWeight: 'bold' }}>edición</span> de videos corporativos y promocionales, diseño de piezas gráficas y apoyo en el diseño de páginas web y landing pages, combinando creatividad y estrategia digital en un entorno tecnológico.</>,
        tags: ["Premiere Pro", "After Effects", "Photoshop", "Figma", "Illustrator"]
    },
    {
        role: "Video Editor / Diseñador Gráfico",
        company: "Esparta Digital",
        period: "6 meses",
        icon: <Palette size={24} />,
        iconColor: "#00FFFF", // Cyan
        desc: (color) => <>En Esparta Digital, trabajé como <span style={{ color, fontWeight: 'bold' }}>diseñador gráfico</span> y <span style={{ color, fontWeight: 'bold' }}>editor de video</span>, desarrollando piezas visuales y contenido audiovisual para distintos clientes.</>,
        tags: ["Illustrator", "Premiere Pro", "After Effects", "Photoshop",]
    },
    {
        role: "Operador de cámara / Freelance",
        company: "Visual hipermedia",
        period: "3 meses",
        icon: <Camera size={24} />,
        iconColor: "#00ff00", // Green
        desc: (color) => <>Operación de <span style={{ color, fontWeight: 'bold' }}>cámara</span> en el circuito <span style={{ color, fontWeight: 'bold' }}>Ricardo Tormo</span> de Cheste, cubriendo eventos deportivos en <span style={{ color, fontWeight: 'bold' }}>directo</span>.</>,
        tags: ["Camara Sony", "Directo", "Realización en directo"]
    },
    {
        role: "Diseñador Gráfico, Técnico de Sonido y Editor de Vídeo",
        company: "Radiolé",
        period: "4 meses",
        icon: <Mic size={24} />,
        iconColor: "#FF00FF", // Fuxia
        desc: (color) => <>En Radiolé, trabajé como <span style={{ color, fontWeight: 'bold' }}>diseñador gráfico</span>, <span style={{ color, fontWeight: 'bold' }}>técnico de sonido</span> y <span style={{ color, fontWeight: 'bold' }}>editor de vídeo</span>, gestionando el contenido visual y auditivo de la emisora.</>,
        tags: ["Diseño Gráfico", "Edición de Vídeo", "Sonido", "Photoshop", "Premiere Pro"]
    }
];

const Experience = () => {
    return (
        <section id="experience" style={{
            padding: 'var(--section-padding) 0',
            background: 'var(--bg-primary)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <AmbientBackground count={4} opacity={0.25} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ marginBottom: '4rem' }}>
                    <span style={{ color: 'var(--accent-yellow)', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        Trayectoria Profesional
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                            marginTop: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            flexWrap: 'wrap'
                        }}
                    >
                        EXPERIENCIA <span className="accent-text">PROFESIONAL</span>
                        <div style={{ flexGrow: 1, height: '1px', background: 'rgba(255,255,255,0.1)', minWidth: '100px' }}></div>
                        <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic', fontWeight: 'normal' }}>2026</span>
                    </motion.h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 100%, 500px), 1fr))',
                    gap: '2.5rem'
                }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                padding: '2.5rem',
                                background: `${exp.iconColor}05`, // 05 is ~2% opacity in hex
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                <div style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '0.8rem',
                                    borderRadius: '8px',
                                    color: exp.iconColor,
                                    boxShadow: `0 0 15px ${exp.iconColor}33`
                                }}>
                                    {exp.icon}
                                </div>
                                <div style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '0.4rem 1rem',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    fontSize: '0.75rem',
                                    color: 'rgba(255,255,255,0.4)',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px'
                                }}>
                                    {exp.period.toUpperCase()}
                                </div>
                            </div>

                            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '800' }}>{exp.role}</h3>
                            <p style={{ color: exp.iconColor, fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {exp.company}
                            </p>

                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1rem',
                                lineHeight: '1.6',
                                marginBottom: '2rem',
                                flexGrow: 1
                            }}>
                                {typeof exp.desc === 'function' ? exp.desc(exp.iconColor) : exp.desc}
                            </p>

                            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                                {exp.tags && exp.tags.map((tag, ti) => (
                                    <span key={ti} style={{
                                        padding: '0.3rem 0.8rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        borderRadius: '4px',
                                        fontSize: '0.7rem',
                                        color: exp.iconColor,
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        border: `1px solid ${exp.iconColor}33` // 33 is ~20% opacity in hex
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

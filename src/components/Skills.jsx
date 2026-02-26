import React from 'react';
import { motion } from 'framer-motion';
import { Video, Palette, Code } from 'lucide-react';
import AmbientBackground from './AmbientBackground';

const skillCategories = [
    {
        title: "VIDEO EDITOR",
        icon: <Video size={32} />,
        iconColor: "#EBA82F",
        boxBg: "rgba(235, 168, 47, 0.1)",
        desc: "Storytelling, motion graphics, correción de color, edición de video y mejora de audio. Haciendo que cada frame cuente una historia.",
        skills: ["POST PRODUCTION", "MOTION GRAPHICS DINÁMICOS", "CORRECCIÓN DE COLOR PROFESIONAL"]
    },
    {
        title: "GRAPHIC DESIGNER",
        icon: <Palette size={32} />,
        iconColor: "#00FFFF",
        boxBg: "rgba(0, 255, 255, 0.1)",
        desc: "Creación de diseños para RRSS utilizando colores, tipografias, estética, manteniendo la coherencia de marca y diseño UX/UI para posterior animación",
        skills: ["GESTION DEL BRANDIG", "UI/UX PROTOTIPOS", "DISEÑO GRÁFICO"]
    },
    {
        title: "WEB PROGRAMMER",
        icon: <Code size={32} />,
        iconColor: "#FFFFFF",
        boxBg: "rgba(255, 255, 255, 0.05)",
        hasDot: true,
        desc: "Creación de páginas web utilizando tecnologías modernas y herramientas de IA para optimizar el proceso de desarrollo.",
        skills: ["REACT & FRAMEWORKS", "CREACIÓN CON IA", "PYTHON"]
    }
];

const Skills = () => {
    return (
        <section id="skills" style={{
            padding: 'var(--section-padding) 0',
            background: 'var(--bg-primary)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <AmbientBackground count={4} opacity={0.25} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 10vw, 6rem)' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                            fontWeight: '900',
                            letterSpacing: '2px',
                            marginBottom: '1rem'
                        }}
                    >
                        CORE SPECIALIZATIONS
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        viewport={{ once: true }}
                        style={{ height: '4px', background: 'var(--accent-yellow)', margin: '0 auto' }}
                    />
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '4rem'
                }}>
                    {skillCategories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            style={{
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            {/* Icon Box */}
                            <motion.div
                                whileHover={{
                                    scale: 1.1,
                                    boxShadow: `0 0 20px ${cat.iconColor}44`
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    background: cat.boxBg,
                                    borderRadius: '24px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: cat.iconColor,
                                    border: index === 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                                    position: 'relative',
                                    marginBottom: '2.5rem',
                                    cursor: 'pointer'
                                }}
                            >
                                {cat.icon}
                                {cat.hasDot && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-4px',
                                        right: '-4px',
                                        width: '12px',
                                        height: '12px',
                                        background: 'var(--accent-yellow)',
                                        borderRadius: '50%',
                                        boxShadow: '0 0 10px var(--accent-yellow)'
                                    }} />
                                )}
                            </motion.div>

                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.4rem', fontWeight: '800', letterSpacing: '1px' }}>
                                {cat.title}
                            </h3>

                            <p style={{
                                color: 'rgba(255,255,255,0.5)',
                                fontSize: '1rem',
                                lineHeight: '1.6',
                                marginBottom: '2.5rem',
                                maxWidth: '300px'
                            }}>
                                {cat.desc}
                            </p>

                            {/* Monospaced Skill List */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.8rem',
                                borderTop: '1px solid rgba(255,255,255,0.05)',
                                paddingTop: '2rem',
                                width: '100%'
                            }}>
                                {cat.skills.map((skill, si) => (
                                    <span
                                        key={si}
                                        style={{
                                            fontFamily: 'monospace',
                                            fontSize: '0.75rem',
                                            fontWeight: 'bold',
                                            color: cat.iconColor === "#FFFFFF" ? 'rgba(255,255,255,0.4)' : cat.iconColor,
                                            letterSpacing: '1px',
                                            opacity: 0.8
                                        }}
                                    >
                                        {skill}
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

export default Skills;

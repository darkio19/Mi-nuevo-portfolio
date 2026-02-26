import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';

const Hero = () => {
    const scrollToWorks = () => {
        const worksSection = document.getElementById('works');
        if (worksSection) {
            worksSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: 'var(--section-padding) 0',
            background: `linear-gradient(rgba(10, 10, 10, 0.5) 0%, rgba(10, 10, 10, 0.5) 60%, rgba(10, 10, 10, 1) 100%), url("${import.meta.env.BASE_URL}background.jpg") no-repeat center center/cover`
        }}>
            <div style={{
                position: 'absolute',
                top: 'clamp(1rem, 4vw, 2.5rem)',
                left: 'clamp(1rem, 4vw, 2.5rem)',
                zIndex: 10
            }}>
                <img src={logo} alt="Logo creativo visionario" style={{ height: 'clamp(30px, 5vw, 45px)', width: 'auto' }} />
            </div>

            <div className="container" style={{ textAlign: 'center', zIndex: 2 }}>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        fontSize: 'clamp(3rem, 10vw, 6rem)',
                        marginBottom: '1rem',
                        lineHeight: 1
                    }}
                >
                    CREATIVO <span className="accent-text">VISIONARIO</span>
                </motion.h1>
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    style={{
                        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        maxWidth: '800px',
                        margin: '0 auto 2.5rem'
                    }}
                >
                    Editor de Video • Diseñador Gráfico • Programador Web
                </motion.p>
                <motion.button
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--accent-yellow-glow)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToWorks}
                    style={{
                        padding: '1.2rem 3rem',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        background: 'var(--accent-yellow)',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        color: '#000'
                    }}
                >
                    Explorar Proyectos
                </motion.button>
            </div>

            {/* Background Grid Pattern Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'radial-gradient(var(--accent-yellow-glow) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.2,
                pointerEvents: 'none'
            }}></div>
        </section>
    );
};

export default Hero;

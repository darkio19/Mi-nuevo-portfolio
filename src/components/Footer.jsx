import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ padding: 'var(--section-padding) 0', background: 'var(--bg-primary)', borderTop: '1px solid var(--glass-border)' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)' }}>Hablemos <span className="accent-text">Pronto</span></h2>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                        <Github size={30} onMouseEnter={(e) => e.target.style.color = 'var(--accent-yellow)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                        <Linkedin size={30} onMouseEnter={(e) => e.target.style.color = 'var(--accent-yellow)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'} />
                    </a>
                    <a href="mailto:tuemail@ejemplo.com" style={{ color: 'var(--text-secondary)' }}>
                        <Mail size={30} onMouseEnter={(e) => e.target.style.color = 'var(--accent-yellow)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'} />
                    </a>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} • Portfolio Profesional • Creatividad en cada pixel
                </p>
            </div>
        </footer>
    );
};

export default Footer;

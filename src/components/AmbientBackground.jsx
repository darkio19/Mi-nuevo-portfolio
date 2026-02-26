import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const AmbientBackground = ({ count = 3, color = 'var(--accent-yellow)', opacity = 0.08 }) => {
    const bubbles = useMemo(() => {
        return Array.from({ length: count }).map(() => ({
            left: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
            ],
            top: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
            ],
            scale: [1, 1.2, 0.9, 1.1, 1],
            duration: 8 + Math.random() * 8
        }));
    }, [count]);

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }}>
            {bubbles.map((path, i) => (
                <motion.div
                    key={i}
                    animate={{
                        left: path.left,
                        top: path.top,
                        scale: path.scale
                    }}
                    transition={{
                        duration: path.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        width: 'clamp(400px, 40vw, 800px)',
                        height: 'clamp(400px, 40vw, 800px)',
                        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                        borderRadius: '50%',
                        filter: 'blur(80px)',
                        transform: 'translate(-50%, -50%)',
                        opacity: opacity
                    }}
                />
            ))}
        </div>
    );
};

export default AmbientBackground;

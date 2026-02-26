import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Eye, Clock, User, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const [mainMedia, setMainMedia] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showLightbox, setShowLightbox] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [currentVideoUrl, setCurrentVideoUrl] = useState(null);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 768;
    const isTablet = windowWidth < 1024;
    const isVideo = (path) => path && (path.endsWith('.mp4') || path.endsWith('.webm') || path.endsWith('.ogg'));

    // Combine all media into a single array for navigation
    const allMedia = project ? (project.gallery || []) : [];

    useEffect(() => {
        if (project) {
            // Priority: First gallery item, or project cover if gallery is empty
            const initialMedia = allMedia.length > 0 ? allMedia[0] : project.img;
            setMainMedia(initialMedia);
            setIsPlaying(false);
            setShowLightbox(false);
            // Set YouTube video URL
            if (project.youtubeIds?.length > 0) {
                setCurrentVideoUrl(`https://www.youtube.com/embed/${project.youtubeIds[0]}`);
            } else {
                setCurrentVideoUrl(project.videoUrl || null);
            }
        }
    }, [project, allMedia.length]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!showLightbox) return;
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'Escape') setShowLightbox(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [showLightbox, lightboxIndex]);

    const handlePrev = (e) => {
        if (e) e.stopPropagation();
        setLightboxIndex((prev) => (prev === 0 ? allMedia.length - 1 : prev - 1));
    };

    const handleNext = (e) => {
        if (e) e.stopPropagation();
        setLightboxIndex((prev) => (prev === allMedia.length - 1 ? 0 : prev + 1));
    };

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setShowLightbox(true);
    };

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: isTablet ? '#000000' : 'rgba(0, 0, 0, 0.98)',
                        zIndex: 1000,
                        overflow: 'hidden',
                        padding: isMobile ? '0' : '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onClick={onClose}
                >
                    <style>
                        {`
                        .modal-card-scroll::-webkit-scrollbar {
                            width: 6px;
                        }
                        .modal-card-scroll::-webkit-scrollbar-track {
                            background: rgba(255, 255, 255, 0.02);
                            border-radius: 10px;
                        }
                        .modal-card-scroll::-webkit-scrollbar-thumb {
                            background: rgba(255, 252, 0, 0.2);
                            border-radius: 10px;
                        }
                        .modal-card-scroll::-webkit-scrollbar-thumb:hover {
                            background: rgba(255, 252, 0, 0.4);
                        }
                        `}
                    </style>
                    <motion.div
                        initial={{ y: 50, scale: 0.95, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 50, scale: 0.95, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: '100%',
                            maxWidth: '1200px',
                            maxHeight: isMobile ? '100vh' : 'calc(100vh - 40px)',
                            backgroundColor: '#0a0a0a',
                            borderRadius: isMobile ? '0' : '24px',
                            position: 'relative',
                            padding: isMobile ? '1.5rem 1.5rem 3rem 1.5rem' : '3rem 3rem 5rem 3rem',
                            border: isMobile ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                            overflowY: 'auto',
                            overflowX: 'hidden'
                        }}
                        className="modal-card-scroll"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: isMobile ? '1.5rem' : '2rem',
                                right: isMobile ? '1.5rem' : '2rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: '#fff',
                                zIndex: 20
                            }}
                        >
                            <X size={20} />
                        </button>

                        {/* Project Header */}
                        <div style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
                                <span style={{ color: 'var(--accent-yellow)', fontSize: '0.7rem', letterSpacing: '2px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                    PORTFOLIO SHOWCASE
                                </span>
                                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>/</span>
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', letterSpacing: '2px' }}>
                                    {project.year || '2024'}
                                </span>
                            </div>
                            <h2 style={{
                                fontSize: 'clamp(1.5rem, 6vw, 3.5rem)',
                                textTransform: 'uppercase',
                                fontWeight: '900',
                                lineHeight: '1.2',
                                margin: 0,
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.4rem 1rem',
                                paddingRight: '3rem' // Prevent overlap with X button
                            }}>
                                <span style={{ color: '#fff' }}>{project.title.split(' ')[0]}</span>
                                <span className="accent-text" style={{
                                    textShadow: '0 0 20px var(--accent-yellow-glow)'
                                }}>
                                    {project.title.split(' ').slice(1).join(' ')}
                                </span>
                            </h2>
                        </div>

                        {/* Main Grid Layout */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: isTablet ? '1fr' : 'minmax(0, 1.5fr) minmax(300px, 1fr)',
                            gap: isMobile ? '2rem' : '3rem'
                        }}>
                            {/* Left Column: Media */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{
                                    position: 'relative',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    aspectRatio: '16/9',
                                    backgroundColor: '#050505',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <AnimatePresence mode="wait">
                                        {isPlaying && currentVideoUrl ? (
                                            <motion.div
                                                key="video-yt"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                style={{ width: '100%', height: '100%' }}
                                            >
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src={`${currentVideoUrl}?autoplay=1`}
                                                    title="YouTube video player"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </motion.div>
                                        ) : isVideo(mainMedia) ? (
                                            <motion.video
                                                key={mainMedia}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                src={`${import.meta.env.BASE_URL}${mainMedia}`}
                                                controls
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        ) : (
                                            <motion.img
                                                key={mainMedia}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                src={`${import.meta.env.BASE_URL}${mainMedia}`}
                                                alt={project.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        )}
                                    </AnimatePresence>

                                    {!isPlaying && (
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                if (currentVideoUrl) {
                                                    setIsPlaying(true);
                                                } else {
                                                    // Find index of current mainMedia
                                                    const idx = allMedia.indexOf(mainMedia);
                                                    if (allMedia.length > 0) {
                                                        openLightbox(idx === -1 ? 0 : idx);
                                                    }
                                                }
                                            }}
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                x: '-50%',
                                                y: '-50%',
                                                width: '64px',
                                                height: '64px',
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(0,0,0,0.5)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255,255,255,0.2)',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                color: 'var(--accent-yellow)',
                                                boxShadow: '0 0 20px rgba(0,0,0,0.4)',
                                                zIndex: 10,
                                                display: isVideo(mainMedia) ? 'none' : 'flex'
                                            }}
                                        >
                                            {currentVideoUrl ? <Play fill="currentColor" size={24} /> : <Eye size={28} />}
                                        </motion.div>
                                    )}
                                </div>

                                <div style={{
                                    display: 'flex',
                                    gap: isMobile ? '0.75rem' : '1rem',
                                    overflowX: 'auto',
                                    paddingBottom: '0.5rem',
                                    scrollbarWidth: 'thin',
                                    scrollbarColor: 'var(--accent-yellow) transparent'
                                }}>
                                    {allMedia.map((img, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.05, opacity: 1 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                setMainMedia(img);
                                                setIsPlaying(false);
                                            }}
                                            style={{
                                                flex: '0 0 auto',
                                                width: isMobile ? '80px' : '100px',
                                                aspectRatio: '16/10',
                                                borderRadius: '12px',
                                                overflow: 'hidden',
                                                backgroundColor: '#111',
                                                cursor: 'pointer',
                                                border: mainMedia === img ? '2px solid var(--accent-yellow)' : '1px solid rgba(255,255,255,0.1)',
                                                opacity: mainMedia === img ? 1 : 0.6,
                                                transition: 'opacity 0.3s, border 0.3s',
                                                position: 'relative'
                                            }}
                                        >
                                            {isVideo(img) ? (
                                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
                                                    <Play size={20} color="var(--accent-yellow)" />
                                                    <span style={{ position: 'absolute', bottom: '2px', right: '4px', fontSize: '8px', color: '#fff', opacity: 0.5, fontWeight: 'bold' }}>VIDEO</span>
                                                </div>
                                            ) : (
                                                <img src={`${import.meta.env.BASE_URL}${img}`} alt={`Gallery ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            )}
                                        </motion.div>
                                    ))}
                                    {/* YouTube video thumbnails */}
                                    {project.youtubeIds && project.youtubeIds.map((id, i) => (
                                        <motion.div
                                            key={`yt-${i}`}
                                            whileHover={{ scale: 1.05, opacity: 1 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                setCurrentVideoUrl(`https://www.youtube.com/embed/${id}`);
                                                setIsPlaying(true);
                                            }}
                                            style={{
                                                flex: '0 0 auto',
                                                width: isMobile ? '80px' : '100px',
                                                aspectRatio: '16/10',
                                                borderRadius: '12px',
                                                overflow: 'hidden',
                                                backgroundColor: '#111',
                                                cursor: 'pointer',
                                                border: currentVideoUrl === `https://www.youtube.com/embed/${id}` ? '2px solid var(--accent-yellow)' : '1px solid rgba(255,255,255,0.1)',
                                                opacity: currentVideoUrl === `https://www.youtube.com/embed/${id}` ? 1 : 0.6,
                                                transition: 'opacity 0.3s, border 0.3s',
                                                position: 'relative'
                                            }}
                                        >
                                            <img
                                                src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                                                alt={`YouTube video ${i + 1}`}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                <Play size={14} color="var(--accent-yellow)" fill="var(--accent-yellow)" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column: Info */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '2rem' : '2.5rem' }}>
                                {/* Meta Info */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr',
                                    gap: '1.2rem',
                                    paddingBottom: '1.5rem',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {[
                                        { icon: <Clock size={16} />, label: "DURATION", value: project.duration || 'N/A' },
                                        { icon: <User size={16} />, label: "ROLE", value: project.role || 'N/A' },
                                        { icon: <Calendar size={16} />, label: "YEAR", value: project.year || '2024' }
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                            <div style={{
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '8px',
                                                background: 'rgba(255,252,0,0.05)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'var(--accent-yellow)',
                                                opacity: 0.8
                                            }}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px', display: 'block', fontWeight: 'bold' }}>{item.label}</span>
                                                <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#fff' }}>{item.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Text Sections */}
                                <div style={{
                                    padding: '1.5rem',
                                    borderRadius: '16px',
                                    backgroundColor: 'rgba(255,215,0,0.02)',
                                    border: '1px solid rgba(255,255,0,0.1)',
                                    borderLeft: '4px solid var(--accent-yellow)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <h4 style={{ color: 'var(--accent-yellow)', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.75rem', letterSpacing: '2px' }}>
                                        INFORMACIÓN
                                    </h4>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                                        {project.challenge || "Diseñar una experiencia visual impactante."}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Optional extra spacing for scroll comfort */}
                        <div style={{ height: '2rem' }}></div>
                    </motion.div>
                </motion.div>
            )}

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {showLightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowLightbox(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.98)',
                            zIndex: 2000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: isMobile ? '0' : '2rem',
                            cursor: 'zoom-out'
                        }}
                    >
                        {/* Lightbox Navigation - Prev */}
                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handlePrev}
                            style={{
                                position: 'absolute',
                                left: isMobile ? '1rem' : '2rem',
                                bottom: isMobile ? '2rem' : 'auto',
                                top: isMobile ? 'auto' : '50%',
                                y: isMobile ? '0' : '-50%',
                                background: 'rgba(0,0,0,0.5)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '50%',
                                width: isMobile ? '50px' : '60px',
                                height: isMobile ? '50px' : '60px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                cursor: 'pointer',
                                zIndex: 2010
                            }}
                        >
                            <ChevronLeft size={isMobile ? 24 : 32} />
                        </motion.button>

                        {/* Current Media */}
                        <AnimatePresence mode="wait">
                            {isVideo(allMedia[lightboxIndex]) ? (
                                <motion.video
                                    key={lightboxIndex}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    src={`${import.meta.env.BASE_URL}${allMedia[lightboxIndex]}`}
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    style={{
                                        maxWidth: isMobile ? '100vw' : '85vw',
                                        maxHeight: isMobile ? '70vh' : '90vh',
                                        borderRadius: isMobile ? '0' : '8px',
                                        boxShadow: '0 0 50px rgba(0,0,0,0.5)'
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                />
                            ) : (
                                <motion.img
                                    key={lightboxIndex}
                                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    src={`${import.meta.env.BASE_URL}${allMedia[lightboxIndex]}`}
                                    style={{
                                        maxWidth: isMobile ? '100vw' : '85vw',
                                        maxHeight: isMobile ? '70vh' : '90vh',
                                        objectFit: 'contain',
                                        borderRadius: isMobile ? '0' : '8px',
                                        boxShadow: '0 0 50px rgba(0,0,0,0.5)',
                                        userSelect: 'none'
                                    }}
                                />
                            )}
                        </AnimatePresence>

                        {/* Lightbox Navigation - Next */}
                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleNext}
                            style={{
                                position: 'absolute',
                                right: isMobile ? '1rem' : '2rem',
                                bottom: isMobile ? '2rem' : 'auto',
                                top: isMobile ? 'auto' : '50%',
                                y: isMobile ? '0' : '-50%',
                                background: 'rgba(0,0,0,0.5)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '50%',
                                width: isMobile ? '50px' : '60px',
                                height: isMobile ? '50px' : '60px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                cursor: 'pointer',
                                zIndex: 2010
                            }}
                        >
                            <ChevronRight size={isMobile ? 24 : 32} />
                        </motion.button>

                        {/* Image Counter */}
                        <div style={{
                            position: 'absolute',
                            bottom: isMobile ? '7rem' : '2rem',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'rgba(255,255,255,0.5)',
                            fontSize: '0.9rem',
                            letterSpacing: '2px'
                        }}>
                            {lightboxIndex + 1} / {allMedia.length}
                        </div>


                        {/* Close Button Lightbox */}
                        <button
                            onClick={() => setShowLightbox(false)}
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                background: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 2010
                            }}
                        >
                            <X size={24} color="#000" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </AnimatePresence>
    );
};

export default ProjectModal;

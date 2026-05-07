

import React, { useEffect, useRef, useState } from 'react';

const HeroView = () => {
    const titleRef = useRef(null);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const letters = titleRef.current?.querySelectorAll('.letter');
        letters?.forEach((el, i) => {
            el.style.animationDelay = `${i * 0.06}s`;
        });
    }, []);

    const handleSearch = () => {
        if (!query.trim()) return;
        document.getElementById('recommendations')?.scrollIntoView({ behavior: 'smooth' });
    };

    const title = "MOVIE WARS";

    return (
        <div className="hero-view" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '2rem',
        }}>
            {/* Animated background blobs */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
                <div style={{
                    position: 'absolute', top: '10%', left: '5%',
                    width: '400px', height: '400px', borderRadius: '50%',
                    background: 'radial-gradient(circle, #C2185B88 0%, transparent 70%)',
                    animation: 'blob1 8s ease-in-out infinite',
                }} />
                <div style={{
                    position: 'absolute', bottom: '10%', right: '5%',
                    width: '300px', height: '300px', borderRadius: '50%',
                    background: 'radial-gradient(circle, #880E4F66 0%, transparent 70%)',
                    animation: 'blob2 10s ease-in-out infinite',
                }} />
                <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    width: '200px', height: '200px', borderRadius: '50%',
                    background: 'radial-gradient(circle, #FF69B433 0%, transparent 70%)',
                    animation: 'blob3 6s ease-in-out infinite',
                }} />
            </div>

            {/* Grid */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
                backgroundImage: `linear-gradient(rgba(194,24,91,0.07) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(194,24,91,0.07) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
            }} />

            {/* Badge */}
            <div style={{
                zIndex: 1,
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'rgba(194,24,91,0.15)',
                border: '1px solid #C2185B',
                borderRadius: '999px',
                padding: '6px 18px',
                marginBottom: '2rem',
                animation: 'fadeUp 0.6s ease forwards',
                opacity: 0,
            }}>
                <span style={{ fontSize: '10px', letterSpacing: '3px', color: '#FF69B4', fontWeight: 700, textTransform: 'uppercase' }}>
                    🎬 Your Cinematic Universe
                </span>
            </div>

            {/* Title */}
            <h1 ref={titleRef} style={{
                zIndex: 1,
                fontSize: 'clamp(3rem, 10vw, 8rem)',
                fontFamily: '"Black Han Sans", "Arial Black", sans-serif',
                fontWeight: 900,
                letterSpacing: '-2px',
                lineHeight: 1,
                textAlign: 'center',
                marginBottom: '1.5rem',
                display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0 4px',
            }}>
                {title.split('').map((char, i) => (
                    <span key={i} className="letter" style={{
                        display: 'inline-block',
                        color: char === ' ' ? 'transparent' : (i % 3 === 0 ? '#FF69B4' : i % 3 === 1 ? '#ffffff' : '#C2185B'),
                        animation: 'letterDrop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both',
                        opacity: 0,
                        textShadow: char !== ' ' ? '0 0 40px rgba(194,24,91,0.6)' : 'none',
                    }}>
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </h1>

            {/* Subtitle */}
            <p style={{
                zIndex: 1,
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'rgba(255,255,255,0.6)',
                textAlign: 'center',
                maxWidth: '500px',
                lineHeight: 1.7,
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                marginBottom: '2rem',
                animation: 'fadeUp 0.8s 0.6s ease forwards',
                opacity: 0,
            }}>
                Discover your next favorite movie with personalized recommendations and top-rated lists.
            </p>

            {/* Search Bar */}
            <div style={{
                zIndex: 1,
                display: 'flex',
                width: '100%',
                maxWidth: '560px',
                marginBottom: '2rem',
                animation: 'fadeUp 0.8s 0.75s ease forwards',
                opacity: 0,
            }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder="Search movies, directors, genres..."
                    style={{
                        flex: 1,
                        padding: '14px 20px',
                        fontSize: '1rem',
                        border: '2px solid #C2185B',
                        borderRight: 'none',
                        borderRadius: '999px 0 0 999px',
                        background: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        outline: 'none',
                        backdropFilter: 'blur(10px)',
                    }}
                />
                <button
                    onClick={handleSearch}
                    style={{
                        padding: '14px 24px',
                        background: 'linear-gradient(135deg, #C2185B, #880E4F)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0 999px 999px 0',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => e.target.style.opacity = '0.85'}
                    onMouseLeave={e => e.target.style.opacity = '1'}
                >
                    🔍
                </button>
            </div>

            {/* CTA Buttons */}
            <div style={{
                zIndex: 1, display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center',
                animation: 'fadeUp 0.8s 0.9s ease forwards',
                opacity: 0,
            }}>
                <button
                    onClick={() => document.getElementById('recommendations')?.scrollIntoView({ behavior: 'smooth' })}
                    style={{
                        background: 'linear-gradient(135deg, #C2185B, #880E4F)',
                        color: 'white', border: 'none', borderRadius: '999px',
                        padding: '14px 36px', fontSize: '1rem', fontWeight: 700,
                        cursor: 'pointer', letterSpacing: '1px',
                        boxShadow: '0 0 30px rgba(194,24,91,0.5)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(194,24,91,0.8)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(194,24,91,0.5)'; }}
                >
                    🍿 Explore Now
                </button>
                <button style={{
                    background: 'transparent',
                    color: '#FF69B4', border: '2px solid #C2185B', borderRadius: '999px',
                    padding: '14px 36px', fontSize: '1rem', fontWeight: 700,
                    cursor: 'pointer', letterSpacing: '1px',
                    transition: 'transform 0.2s, background 0.2s',
                }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(194,24,91,0.15)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'scale(1)'; }}
                >
                    🎥 Top Rated
                </button>
            </div>

            {/* Scroll indicator */}
            <div style={{
                position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
                zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                animation: 'fadeUp 1s 1.2s ease forwards',
                opacity: 0,
            }}>
                <span style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Scroll</span>
                <div style={{
                    width: '1px', height: '40px',
                    background: 'linear-gradient(to bottom, #C2185B, transparent)',
                    animation: 'scrollPulse 2s ease-in-out infinite',
                }} />
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');

                @keyframes letterDrop {
                    from { opacity: 0; transform: translateY(-40px) rotate(-5deg); }
                    to   { opacity: 1; transform: translateY(0) rotate(0deg); }
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes blob1 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33%      { transform: translate(30px, -20px) scale(1.1); }
                    66%      { transform: translate(-20px, 10px) scale(0.95); }
                }
                @keyframes blob2 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33%      { transform: translate(-40px, 20px) scale(1.05); }
                    66%      { transform: translate(20px, -15px) scale(0.9); }
                }
                @keyframes blob3 {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); }
                    50%      { transform: translate(-50%, -50%) scale(1.3); }
                }
                @keyframes scrollPulse {
                    0%, 100% { opacity: 0.3; }
                    50%      { opacity: 1; }
                }

                input::placeholder {
                    color: rgba(255,255,255,0.35);
                }
            `}</style>
        </div>
    );
};

export default HeroView;
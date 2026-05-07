import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (!query.trim()) return;
        document.getElementById('recommendations')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 2rem',
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(194,24,91,0.2)',
        }}>

            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <img
                    src={logo}
                    alt="Movie Wars Logo"
                    style={{ height: '36px', width: 'auto' }}
                    onError={e => { e.target.style.display = 'none'; }}
                />
                <span style={{
                    fontFamily: '"Black Han Sans", "Arial Black", sans-serif',
                    fontSize: '1.3rem',
                    fontWeight: 900,
                    color: '#FF69B4',
                    letterSpacing: '1px',
                    textShadow: '0 0 20px rgba(194,24,91,0.6)',
                }}>
                </span>
            </Link>

            {/* Search Bar */}
            <div style={{
                display: 'flex',
                flex: 1,
                maxWidth: '480px',
                margin: '0 2rem',
            }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder="Search movies, directors, genres..."
                    style={{
                        flex: 1,
                        padding: '10px 18px',
                        fontSize: '0.9rem',
                        border: '1.5px solid #C2185B',
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
                        padding: '10px 18px',
                        background: 'linear-gradient(135deg, #C2185B, #880E4F)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0 999px 999px 0',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                    🔍
                </button>
            </div>

            {/* Auth Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Link to="/login" style={{
                    color: '#FF69B4',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    padding: '8px 20px',
                    border: '1.5px solid #C2185B',
                    borderRadius: '999px',
                    transition: 'background 0.2s, transform 0.2s',
                }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(194,24,91,0.15)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'scale(1)'; }}
                >
                    Log In
                </Link>
                <Link to="/signup" style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    padding: '8px 20px',
                    background: 'linear-gradient(135deg, #C2185B, #880E4F)',
                    borderRadius: '999px',
                    boxShadow: '0 0 20px rgba(194,24,91,0.4)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(194,24,91,0.7)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(194,24,91,0.4)'; }}
                >
                    Sign Up
                </Link>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
                input::placeholder { color: rgba(255,255,255,0.35); }
            `}</style>
        </nav>
    );
};

export default Navbar;
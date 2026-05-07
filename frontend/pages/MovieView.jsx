import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Mock movie data — later replace with real data passed via router state or API
const movie = {
    title: "Dune",
    director: "Denis Villeneuve",
    release_year: "2021",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    imdb_rating: 8.0,
    description: `Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.

Dune is an epic tale of politics, religion, ecology, technology, and human emotion. It is a stunning and sweeping vision that establishes Frank Herbert's legendary universe with breathtaking scope and scale.`,
    image: "http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg",
    trailer: "https://www.youtube.com/embed/aSHs224Dge0",
};

const MovieView = () => {
    const navigate = useNavigate();
    const [liked, setLiked] = useState(null); // 'like' | 'dislike' | null
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([
        { user: 'CinePhile42', text: 'Absolutely breathtaking visuals. Villeneuve is a genius.', time: '2 days ago' },
        { user: 'MovieBuff99', text: 'The score by Hans Zimmer is out of this world!', time: '5 days ago' },
    ]);

    const handleComment = () => {
        if (!comment.trim()) return;
        setComments([{ user: 'You', text: comment, time: 'Just now' }, ...comments]);
        setComment('');
    };

    return (
        <div className="movie-view" style={{ minHeight: '100vh', color: 'white', paddingTop: '80px' }}>

            {/* Back button */}
            <button
                onClick={() => navigate(-1)}
                style={{
                    position: 'fixed', top: '90px', left: '24px', zIndex: 50,
                    background: 'rgba(194,24,91,0.2)', border: '1px solid #C2185B',
                    color: '#FF69B4', borderRadius: '999px', padding: '8px 16px',
                    cursor: 'pointer', fontSize: '0.85rem', fontWeight: 700,
                    backdropFilter: 'blur(10px)',
                    transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(194,24,91,0.4)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(194,24,91,0.2)'}
            >
                ← Retreat
            </button>

            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>

                {/* Hero section — image + details side by side */}
                <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start', marginBottom: '3rem', flexWrap: 'wrap' }}>

                    {/* Poster */}
                    <div style={{ flexShrink: 0, position: 'relative' }}>
                        <img
                            src={movie.image}
                            alt={movie.title}
                            style={{
                                width: '220px', borderRadius: '16px',
                                boxShadow: '0 0 60px rgba(194,24,91,0.5)',
                                filter: 'saturate(1.4) brightness(1.1)',
                            }}
                        />
                        {/* Glow behind poster */}
                        <div style={{
                            position: 'absolute', inset: 0, borderRadius: '16px',
                            background: 'radial-gradient(circle, rgba(194,24,91,0.3), transparent)',
                            zIndex: -1, transform: 'scale(1.1)',
                        }} />
                    </div>

                    {/* Details */}
                    <div style={{
                        flex: 1, minWidth: '260px',
                        background: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(12px)',
                        borderRadius: '16px',
                        padding: '1.5rem',
                        border: '1px solid rgba(194,24,91,0.2)',
                    }}>
                        <h1 style={{
                            fontFamily: '"Black Han Sans", "Arial Black", sans-serif',
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 900, color: '#FF69B4',
                            textShadow: '0 0 40px rgba(194,24,91,0.6)',
                            lineHeight: 1, marginBottom: '0.5rem',
                        }}>
                            {movie.title}
                        </h1>

                        {/* IMDB Rating */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                            <span style={{
                                background: '#F5C518', color: '#000',
                                fontWeight: 900, fontSize: '0.85rem',
                                padding: '3px 10px', borderRadius: '6px',
                                letterSpacing: '1px',
                            }}>IMDb</span>
                            <span style={{ fontSize: '1.3rem', fontWeight: 700, color: '#F5C518' }}>
                                {movie.imdb_rating}
                            </span>
                            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>/10</span>
                        </div>

                        {/* Meta */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '1rem', fontSize: '0.9rem' }}>
                            <span style={{ color: 'rgba(255,255,255,0.6)' }}>📅 {movie.release_year}</span>
                            <span style={{ color: 'rgba(255,255,255,0.6)' }}>🎬 {movie.director}</span>
                        </div>

                        {/* Genres */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
                            {movie.genres.map((g, i) => (
                                <span key={i} style={{
                                    background: 'rgba(194,24,91,0.2)',
                                    border: '1px solid #C2185B',
                                    color: '#FF69B4', borderRadius: '999px',
                                    padding: '4px 14px', fontSize: '0.8rem', fontWeight: 600,
                                }}>
                                    {g}
                                </span>
                            ))}
                        </div>

                        {/* Description */}
                        <p style={{
                            color: 'rgba(255,255,255,0.75)',
                            lineHeight: 1.8, fontSize: '0.95rem',
                            whiteSpace: 'pre-line',
                        }}>
                            {movie.description}
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(194,24,91,0.3)', marginBottom: '2.5rem' }} />

                {/* Trailer */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{
                        fontFamily: '"Black Han Sans", sans-serif',
                        fontSize: '1.5rem', color: '#FF69B4',
                        marginBottom: '1rem', letterSpacing: '1px',
                    }}>
                        🎥 Movie
                    </h2>
                    <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 0 40px rgba(194,24,91,0.3)' }}>
                        <iframe
                            width="100%"
                            height="420"
                            src={movie.trailer}
                            title={`${movie.title} Trailer`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ display: 'block' }}
                        />
                    </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(194,24,91,0.3)', marginBottom: '2.5rem' }} />

                {/* Like / Dislike */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{
                        fontFamily: '"Black Han Sans", sans-serif',
                        fontSize: '1.5rem', color: '#FF69B4',
                        marginBottom: '1rem', letterSpacing: '1px',
                    }}>
                        Rate this movie
                    </h2>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button
                            onClick={() => setLiked(liked === 'like' ? null : 'like')}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                padding: '12px 28px', borderRadius: '999px',
                                border: `2px solid ${liked === 'like' ? '#FF69B4' : 'rgba(194,24,91,0.4)'}`,
                                background: liked === 'like' ? 'rgba(194,24,91,0.3)' : 'transparent',
                                color: liked === 'like' ? '#FF69B4' : 'rgba(255,255,255,0.6)',
                                cursor: 'pointer', fontWeight: 700, fontSize: '1rem',
                                transition: 'all 0.2s',
                                boxShadow: liked === 'like' ? '0 0 20px rgba(194,24,91,0.4)' : 'none',
                            }}
                        >
                            👍 Like
                        </button>
                        <button
                            onClick={() => setLiked(liked === 'dislike' ? null : 'dislike')}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                padding: '12px 28px', borderRadius: '999px',
                                border: `2px solid ${liked === 'dislike' ? '#FF69B4' : 'rgba(194,24,91,0.4)'}`,
                                background: liked === 'dislike' ? 'rgba(194,24,91,0.3)' : 'transparent',
                                color: liked === 'dislike' ? '#FF69B4' : 'rgba(255,255,255,0.6)',
                                cursor: 'pointer', fontWeight: 700, fontSize: '1rem',
                                transition: 'all 0.2s',
                                boxShadow: liked === 'dislike' ? '0 0 20px rgba(194,24,91,0.4)' : 'none',
                            }}
                        >
                            👎 Dislike
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(194,24,91,0.3)', marginBottom: '2.5rem' }} />

                {/* Comments */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{
                        fontFamily: '"Black Han Sans", sans-serif',
                        fontSize: '1.5rem', color: '#FF69B4',
                        marginBottom: '1.5rem', letterSpacing: '1px',
                    }}>
                        💬 Comments
                    </h2>

                    {/* Comment input */}
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '2rem' }}>
                        <input
                            type="text"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleComment()}
                            placeholder="Share your thoughts..."
                            style={{
                                flex: 1, padding: '12px 20px',
                                background: 'rgba(0,0,0,0.5)',
                                border: '1.5px solid rgba(194,24,91,0.4)',
                                borderRadius: '999px', color: 'white',
                                outline: 'none', fontSize: '0.95rem',
                                backdropFilter: 'blur(10px)',
                            }}
                            onFocus={e => e.target.style.borderColor = '#FF69B4'}
                            onBlur={e => e.target.style.borderColor = 'rgba(194,24,91,0.4)'}
                        />
                        <button
                            onClick={handleComment}
                            style={{
                                padding: '12px 24px', borderRadius: '999px',
                                background: 'linear-gradient(135deg, #C2185B, #880E4F)',
                                color: 'white', border: 'none',
                                cursor: 'pointer', fontWeight: 700,
                                boxShadow: '0 0 20px rgba(194,24,91,0.4)',
                                transition: 'transform 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            Post
                        </button>
                    </div>

                    {/* Comments list */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {comments.map((c, i) => (
                            <div key={i} style={{
                                background: 'rgba(0,0,0,0.4)',
                                border: '1px solid rgba(194,24,91,0.2)',
                                borderRadius: '16px', padding: '1rem 1.25rem',
                                backdropFilter: 'blur(10px)',
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                    <span style={{ color: '#FF69B4', fontWeight: 700, fontSize: '0.9rem' }}>
                                        {c.user}
                                    </span>
                                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
                                        {c.time}
                                    </span>
                                </div>
                                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                                    {c.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
                input::placeholder { color: rgba(255,255,255,0.35); }
            `}</style>
        </div>
    );
};

export default MovieView;
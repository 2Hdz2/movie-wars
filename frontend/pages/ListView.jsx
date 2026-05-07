import React, { useState } from "react";
import { Link } from "react-router-dom";

const movies = [
    {
        title: "Dune",
        director: "Denis Villeneuve",
        release_year: "2021-09-15",
        genres: ["Sci-Fi", "Adventure", "Drama"],
        description: "Paul Atreides must travel to the most dangerous planet in the universe to ensure the future of his family.",
        image: "http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg",
    },
    {
        title: "Inception",
        director: "Christopher Nolan",
        release_year: "2010-07-16",
        genres: ["Sci-Fi", "Thriller"],
        description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
        image: "http://image.tmdb.org/t/p/w342/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    },
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        release_year: "2014-11-07",
        genres: ["Sci-Fi", "Drama"],
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        image: "http://image.tmdb.org/t/p/w342/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
        title: "The Batman",
        director: "Matt Reeves",
        release_year: "2022-03-04",
        genres: ["Action", "Crime", "Drama"],
        description: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
        image: "http://image.tmdb.org/t/p/w342/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    },
    {
        title: "Oppenheimer",
        director: "Christopher Nolan",
        release_year: "2023-07-21",
        genres: ["Biography", "Drama", "History"],
        description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        image: "http://image.tmdb.org/t/p/w342/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    },
];

const ListView = () => {
    const [current, setCurrent] = useState(0);
    const visible = 4;

    const prev = () => setCurrent((c) => Math.max(c - 1, 0));
    const next = () => setCurrent((c) => Math.min(c + 1, movies.length - visible));

    return (
        <div className="rec-view px-8 py-6">
            <h2 className="text-white text-2xl font-bold mb-6">Let's Go To War!</h2>

            <div className="relative flex items-center">

                {/* Left Arrow */}
                <button
                    onClick={prev}
                    disabled={current === 0}
                    className="z-10 p-2 rounded-full mr-3 disabled:opacity-30 transition"
                    style={{ backgroundColor: '#C2185B' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Cards */}
                <div className="overflow-hidden w-full">
                    <div
                        className="flex gap-3 transition-all duration-500 ease-in-out"
                        style={{ transform: `translateX(-${current * (180 + 12)}px)` }}
                    >
                        {movies.map((movie, i) => (
                            <div
                                key={i}
                                className="relative overflow-hidden rounded-xl text-white shadow-lg transform hover:-translate-y-2 transition ease-in-out duration-500 hover:shadow-2xl"
                                style={{ minHeight: '400px', width: '280px', flexShrink: 0 }}
                            >
                                {/* Gradient */}
                                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                                {/* Image */}
                                <img
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src={movie.image}
                                    style={{ filter: "saturate(2.0) brightness(1.1) contrast(1.05)" }}
                                    alt={movie.title}
                                />

                                {/* Content */}
                                <div className="relative z-10 flex flex-col justify-end h-full p-3" style={{ minHeight: '300px' }}>
                                    <Link
                                        to="/movie"
                                        className="flex items-center w-min px-3 py-1 rounded-full whitespace-nowrap text-white text-sm font-bold mb-2"
                                        style={{ backgroundColor: '#C2185B' }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                        Watch
                                    </Link>
                                    <h3 className="text-base font-bold leading-tight">{movie.title}</h3>
                                    <p className="text-s text-gray-400">🎬 {movie.director}</p>
                                    <p className="text-s text-gray-400 mb-1">📅 {movie.release_year.slice(0, 4)}</p>
                                    <div className="flex flex-wrap gap-1 mb-1">
                                        {movie.genres.slice(0, 2).map((g, idx) => (
                                            <span key={idx} className="text-s px-2 py-0.5 rounded-full" style={{ backgroundColor: '#880E4F' }}>{g}</span>
                                        ))}
                                    </div>
                                    <p className="text-s text-gray-100 leading-relaxed line-clamp-2">{movie.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={next}
                    disabled={current >= movies.length - visible}
                    className="z-10 p-2 rounded-full ml-3 disabled:opacity-30 transition"
                    style={{ backgroundColor: '#C2185B' }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

            </div>
        </div>
    );
};

export default ListView;
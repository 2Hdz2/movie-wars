import React, { useState } from "react";

const stats = [
    { label: 'Total Movies', value: '1,284', icon: '🎬', change: '+12 this week' },
    { label: 'Total Users', value: '48,920', icon: '👥', change: '+340 this week' },
    { label: 'Total Reviews', value: '9,301', icon: '💬', change: '+88 today' },
    { label: 'Active Sessions', value: '1,042', icon: '🟢', change: 'Live now' },
];

const recentMovies = [
    { title: 'Dune', director: 'Denis Villeneuve', year: '2021', genres: ['Sci-Fi', 'Drama'], status: 'Published' },
    { title: 'Oppenheimer', director: 'Christopher Nolan', year: '2023', genres: ['Biography', 'Drama'], status: 'Published' },
    { title: 'The Batman', director: 'Matt Reeves', year: '2022', genres: ['Action', 'Crime'], status: 'Draft' },
    { title: 'Inception', director: 'Christopher Nolan', year: '2010', genres: ['Sci-Fi', 'Thriller'], status: 'Published' },
    { title: 'Interstellar', director: 'Christopher Nolan', year: '2014', genres: ['Sci-Fi', 'Drama'], status: 'Published' },
];

const recentUsers = [
    { name: 'Alex Rivera', email: 'alex@gmail.com', joined: '2 hours ago', status: 'Active' },
    { name: 'Priya Nair', email: 'priya@gmail.com', joined: '5 hours ago', status: 'Active' },
    { name: 'Jake Thompson', email: 'jake@gmail.com', joined: '1 day ago', status: 'Banned' },
    { name: 'Sana Malik', email: 'sana@gmail.com', joined: '2 days ago', status: 'Active' },
];

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const navItems = [
        { id: 'overview', label: 'Overview', icon: '📊' },
        { id: 'movies', label: 'Movies', icon: '🎬' },
        { id: 'users', label: 'Users', icon: '👥' },
        { id: 'reviews', label: 'Reviews', icon: '💬' },
        { id: 'settings', label: 'Settings', icon: '⚙️' },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', color: 'white', fontFamily: 'system-ui, sans-serif' }}>

            {/* Sidebar */}
            <div style={{
                width: sidebarOpen ? '240px' : '70px',
                background: 'rgba(0,0,0,0.7)',
                backdropFilter: 'blur(20px)',
                borderRight: '1px solid rgba(194,24,91,0.2)',
                display: 'flex', flexDirection: 'column',
                transition: 'width 0.3s ease',
                flexShrink: 0,
                position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 50,
            }}>
                {/* Logo */}
                <div style={{
                    padding: '1.5rem 1rem',
                    borderBottom: '1px solid rgba(194,24,91,0.2)',
                    display: 'flex', alignItems: 'center', gap: '10px',
                    cursor: 'pointer',
                }} onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🎥</span>
                    {sidebarOpen && (
                        <span style={{
                            fontFamily: '"Black Han Sans", "Arial Black", sans-serif',
                            fontSize: '1rem', fontWeight: 900,
                            color: '#FF69B4',
                            textShadow: '0 0 20px rgba(194,24,91,0.6)',
                            whiteSpace: 'nowrap',
                        }}>
                            MOVIE WARS
                        </span>
                    )}
                </div>

                {/* Admin badge */}
                {sidebarOpen && (
                    <div style={{ padding: '1rem', borderBottom: '1px solid rgba(194,24,91,0.2)' }}>
                        <div style={{
                            background: 'rgba(194,24,91,0.15)',
                            border: '1px solid rgba(194,24,91,0.3)',
                            borderRadius: '12px', padding: '0.75rem',
                            display: 'flex', alignItems: 'center', gap: '10px',
                        }}>
                            <div style={{
                                width: '36px', height: '36px', borderRadius: '50%',
                                background: 'linear-gradient(135deg, #C2185B, #880E4F)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1rem', flexShrink: 0,
                            }}>👤</div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>Admin</div>
                                <div style={{ color: '#FF69B4', fontSize: '0.7rem' }}>Super Admin</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Nav Items */}
                <nav style={{ flex: 1, padding: '1rem 0.5rem' }}>
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            style={{
                                width: '100%', display: 'flex', alignItems: 'center',
                                gap: '12px', padding: '12px 16px',
                                borderRadius: '12px', border: 'none', cursor: 'pointer',
                                marginBottom: '4px',
                                background: activeTab === item.id ? 'rgba(194,24,91,0.25)' : 'transparent',
                                color: activeTab === item.id ? '#FF69B4' : 'rgba(255,255,255,0.6)',
                                fontWeight: activeTab === item.id ? 700 : 400,
                                fontSize: '0.9rem',
                                transition: 'all 0.2s',
                                borderLeft: activeTab === item.id ? '3px solid #C2185B' : '3px solid transparent',
                                justifyContent: sidebarOpen ? 'flex-start' : 'center',
                            }}
                            onMouseEnter={e => { if (activeTab !== item.id) e.currentTarget.style.background = 'rgba(194,24,91,0.1)'; }}
                            onMouseLeave={e => { if (activeTab !== item.id) e.currentTarget.style.background = 'transparent'; }}
                        >
                            <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</span>
                            {sidebarOpen && <span>{item.label}</span>}
                        </button>
                    ))}
                </nav>

                {/* Logout */}
                <div style={{ padding: '1rem 0.5rem', borderTop: '1px solid rgba(194,24,91,0.2)' }}>
                    <button style={{
                        width: '100%', display: 'flex', alignItems: 'center',
                        gap: '12px', padding: '12px 16px', borderRadius: '12px',
                        border: 'none', cursor: 'pointer',
                        background: 'transparent',
                        color: 'rgba(255,255,255,0.4)',
                        fontSize: '0.9rem', transition: 'all 0.2s',
                        justifyContent: sidebarOpen ? 'flex-start' : 'center',
                    }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#FF69B4'; e.currentTarget.style.background = 'rgba(194,24,91,0.1)'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.background = 'transparent'; }}
                    >
                        <span style={{ fontSize: '1.1rem' }}>🚪</span>
                        {sidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, marginLeft: sidebarOpen ? '240px' : '70px', transition: 'margin-left 0.3s ease' }}>

                {/* Top Bar */}
                <div style={{
                    position: 'sticky', top: 0, zIndex: 40,
                    background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(16px)',
                    borderBottom: '1px solid rgba(194,24,91,0.2)',
                    padding: '1rem 2rem', display: 'flex',
                    justifyContent: 'space-between', alignItems: 'center',
                }}>
                    <h1 style={{
                        fontFamily: '"Black Han Sans", sans-serif',
                        fontSize: '1.5rem', color: '#FF69B4',
                        textShadow: '0 0 20px rgba(194,24,91,0.4)',
                        margin: 0,
                    }}>
                        {navItems.find(n => n.id === activeTab)?.icon} {navItems.find(n => n.id === activeTab)?.label}
                    </h1>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <div style={{
                            background: 'rgba(194,24,91,0.15)', border: '1px solid rgba(194,24,91,0.3)',
                            borderRadius: '999px', padding: '8px 16px',
                            fontSize: '0.8rem', color: '#FF69B4',
                        }}>
                            🟢 System Online
                        </div>
                    </div>
                </div>

                {/* Page Content */}
                <div style={{ padding: '2rem' }}>

                    {/* OVERVIEW TAB */}
                    {activeTab === 'overview' && (
                        <>
                            {/* Stats Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                                {stats.map((stat, i) => (
                                    <div key={i} style={{
                                        background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(12px)',
                                        border: '1px solid rgba(194,24,91,0.2)', borderRadius: '16px',
                                        padding: '1.5rem', transition: 'border-color 0.2s, transform 0.2s',
                                    }}
                                        onMouseEnter={e => { e.currentTarget.style.borderColor = '#C2185B'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(194,24,91,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                    >
                                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                                        <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FF69B4', marginBottom: '4px' }}>{stat.value}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>{stat.label}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'rgba(194,24,91,0.8)' }}>{stat.change}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Recent Movies Table */}
                            <div style={{
                                background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(194,24,91,0.2)', borderRadius: '16px',
                                padding: '1.5rem', marginBottom: '2rem',
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <h2 style={{ fontFamily: '"Black Han Sans", sans-serif', color: '#FF69B4', margin: 0, fontSize: '1.1rem' }}>
                                        🎬 Recent Movies
                                    </h2>
                                    <button
                                        onClick={() => setActiveTab('movies')}
                                        style={{
                                            background: 'rgba(194,24,91,0.2)', border: '1px solid #C2185B',
                                            color: '#FF69B4', borderRadius: '999px', padding: '6px 16px',
                                            cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700,
                                        }}>
                                        View All
                                    </button>
                                </div>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '1px solid rgba(194,24,91,0.2)' }}>
                                            {['Title', 'Director', 'Year', 'Genres', 'Status'].map(h => (
                                                <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: 'rgba(255,105,180,0.7)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentMovies.map((m, i) => (
                                            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }}
                                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(194,24,91,0.07)'}
                                                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                            >
                                                <td style={{ padding: '12px', fontWeight: 700, fontSize: '0.9rem' }}>{m.title}</td>
                                                <td style={{ padding: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{m.director}</td>
                                                <td style={{ padding: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{m.year}</td>
                                                <td style={{ padding: '12px' }}>
                                                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                                        {m.genres.map((g, j) => (
                                                            <span key={j} style={{ background: 'rgba(194,24,91,0.2)', border: '1px solid rgba(194,24,91,0.4)', color: '#FF69B4', borderRadius: '999px', padding: '2px 10px', fontSize: '0.7rem' }}>{g}</span>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td style={{ padding: '12px' }}>
                                                    <span style={{
                                                        background: m.status === 'Published' ? 'rgba(52,168,83,0.2)' : 'rgba(255,165,0,0.2)',
                                                        border: `1px solid ${m.status === 'Published' ? '#34A853' : 'orange'}`,
                                                        color: m.status === 'Published' ? '#34A853' : 'orange',
                                                        borderRadius: '999px', padding: '3px 12px', fontSize: '0.75rem', fontWeight: 600,
                                                    }}>{m.status}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Recent Users */}
                            <div style={{
                                background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(194,24,91,0.2)', borderRadius: '16px',
                                padding: '1.5rem',
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <h2 style={{ fontFamily: '"Black Han Sans", sans-serif', color: '#FF69B4', margin: 0, fontSize: '1.1rem' }}>
                                        👥 Recent Users
                                    </h2>
                                    <button
                                        onClick={() => setActiveTab('users')}
                                        style={{
                                            background: 'rgba(194,24,91,0.2)', border: '1px solid #C2185B',
                                            color: '#FF69B4', borderRadius: '999px', padding: '6px 16px',
                                            cursor: 'pointer', fontSize: '0.8rem', fontWeight: 700,
                                        }}>
                                        View All
                                    </button>
                                </div>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '1px solid rgba(194,24,91,0.2)' }}>
                                            {['Name', 'Email', 'Joined', 'Status'].map(h => (
                                                <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: 'rgba(255,105,180,0.7)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentUsers.map((u, i) => (
                                            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }}
                                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(194,24,91,0.07)'}
                                                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                            >
                                                <td style={{ padding: '12px', fontWeight: 700, fontSize: '0.9rem' }}>{u.name}</td>
                                                <td style={{ padding: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{u.email}</td>
                                                <td style={{ padding: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{u.joined}</td>
                                                <td style={{ padding: '12px' }}>
                                                    <span style={{
                                                        background: u.status === 'Active' ? 'rgba(52,168,83,0.2)' : 'rgba(235,67,53,0.2)',
                                                        border: `1px solid ${u.status === 'Active' ? '#34A853' : '#EB4335'}`,
                                                        color: u.status === 'Active' ? '#34A853' : '#EB4335',
                                                        borderRadius: '999px', padding: '3px 12px', fontSize: '0.75rem', fontWeight: 600,
                                                    }}>{u.status}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}

                    {/* MOVIES TAB */}
                    {activeTab === 'movies' && (
                        <div style={{
                            background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(194,24,91,0.2)', borderRadius: '16px', padding: '1.5rem',
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <h2 style={{ fontFamily: '"Black Han Sans", sans-serif', color: '#FF69B4', margin: 0 }}>All Movies</h2>
                                <button style={{
                                    background: 'linear-gradient(135deg, #C2185B, #880E4F)',
                                    color: 'white', border: 'none', borderRadius: '999px',
                                    padding: '10px 20px', cursor: 'pointer', fontWeight: 700,
                                    boxShadow: '0 0 20px rgba(194,24,91,0.4)',
                                }}>+ Add Movie</button>
                            </div>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid rgba(194,24,91,0.2)' }}>
                                        {['Title', 'Director', 'Year', 'Genres', 'Status', 'Actions'].map(h => (
                                            <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: 'rgba(255,105,180,0.7)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentMovies.map((m, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }}
                                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(194,24,91,0.07)'}
                                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                        >
                                            <td style={{ padding: '12px', fontWeight: 700 }}>{m.title}</td>
                                            <td style={{ padding: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{m.director}</td>
                                            <td style={{ padding: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{m.year}</td>
                                            <td style={{ padding: '12px' }}>
                                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                                    {m.genres.map((g, j) => (
                                                        <span key={j} style={{ background: 'rgba(194,24,91,0.2)', border: '1px solid rgba(194,24,91,0.4)', color: '#FF69B4', borderRadius: '999px', padding: '2px 10px', fontSize: '0.7rem' }}>{g}</span>
                                                    ))}
                                                </div>
                                            </td>
                                            <td style={{ padding: '12px' }}>
                                                <span style={{
                                                    background: m.status === 'Published' ? 'rgba(52,168,83,0.2)' : 'rgba(255,165,0,0.2)',
                                                    border: `1px solid ${m.status === 'Published' ? '#34A853' : 'orange'}`,
                                                    color: m.status === 'Published' ? '#34A853' : 'orange',
                                                    borderRadius: '999px', padding: '3px 12px', fontSize: '0.75rem', fontWeight: 600,
                                                }}>{m.status}</span>
                                            </td>
                                            <td style={{ padding: '12px' }}>
                                                <div style={{ display: 'flex', gap: '8px' }}>
                                                    <button style={{ background: 'rgba(194,24,91,0.2)', border: '1px solid rgba(194,24,91,0.4)', color: '#FF69B4', borderRadius: '8px', padding: '4px 12px', cursor: 'pointer', fontSize: '0.8rem' }}>Edit</button>
                                                    <button style={{ background: 'rgba(235,67,53,0.2)', border: '1px solid rgba(235,67,53,0.4)', color: '#EB4335', borderRadius: '8px', padding: '4px 12px', cursor: 'pointer', fontSize: '0.8rem' }}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* USERS TAB */}
                    {activeTab === 'users' && (
                        <div style={{
                            background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(194,24,91,0.2)', borderRadius: '16px', padding: '1.5rem',
                        }}>
                            <h2 style={{ fontFamily: '"Black Han Sans", sans-serif', color: '#FF69B4', marginBottom: '1.5rem' }}>All Users</h2>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid rgba(194,24,91,0.2)' }}>
                                        {['Name', 'Email', 'Joined', 'Status', 'Actions'].map(h => (
                                            <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: 'rgba(255,105,180,0.7)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentUsers.map((u, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }}
                                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(194,24,91,0.07)'}
                                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                        >
                                            <td style={{ padding: '12px', fontWeight: 700 }}>{u.name}</td>
                                            <td style={{ padding: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{u.email}</td>
                                            <td style={{ padding: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{u.joined}</td>
                                            <td style={{ padding: '12px' }}>
                                                <span style={{
                                                    background: u.status === 'Active' ? 'rgba(52,168,83,0.2)' : 'rgba(235,67,53,0.2)',
                                                    border: `1px solid ${u.status === 'Active' ? '#34A853' : '#EB4335'}`,
                                                    color: u.status === 'Active' ? '#34A853' : '#EB4335',
                                                    borderRadius: '999px', padding: '3px 12px', fontSize: '0.75rem', fontWeight: 600,
                                                }}>{u.status}</span>
                                            </td>
                                            <td style={{ padding: '12px' }}>
                                                <div style={{ display: 'flex', gap: '8px' }}>
                                                    <button style={{ background: 'rgba(194,24,91,0.2)', border: '1px solid rgba(194,24,91,0.4)', color: '#FF69B4', borderRadius: '8px', padding: '4px 12px', cursor: 'pointer', fontSize: '0.8rem' }}>Edit</button>
                                                    <button style={{ background: 'rgba(235,67,53,0.2)', border: '1px solid rgba(235,67,53,0.4)', color: '#EB4335', borderRadius: '8px', padding: '4px 12px', cursor: 'pointer', fontSize: '0.8rem' }}>Ban</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* REVIEWS TAB */}
                    {activeTab === 'reviews' && (
                        <div style={{
                            background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(194,24,91,0.2)', borderRadius: '16px', padding: '1.5rem',
                        }}>
                            <h2 style={{ fontFamily: '"Black Han Sans", sans-serif', color: '#FF69B4', marginBottom: '1.5rem' }}>All Reviews</h2>
                            {[
                                { user: 'Alex Rivera', movie: 'Dune', comment: 'Absolutely breathtaking visuals!', time: '2 hours ago' },
                                { user: 'Priya Nair', movie: 'Oppenheimer', comment: 'A masterpiece of storytelling.', time: '5 hours ago' },
                                { user: 'Jake Thompson', movie: 'Inception', comment: 'Mind-bending and brilliant.', time: '1 day ago' },
                            ].map((r, i) => (
                                <div key={i} style={{
                                    background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(194,24,91,0.15)',
                                    borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '1rem',
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                                }}>
                                    <div>
                                        <div style={{ display: 'flex', gap: '10px', marginBottom: '6px', alignItems: 'center' }}>
                                            <span style={{ color: '#FF69B4', fontWeight: 700 }}>{r.user}</span>
                                            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>on</span>
                                            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{r.movie}</span>
                                            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>{r.time}</span>
                                        </div>
                                        <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: '0.9rem' }}>{r.comment}</p>
                                    </div>
                                    <button style={{ background: 'rgba(235,67,53,0.2)', border: '1px solid rgba(235,67,53,0.4)', color: '#EB4335', borderRadius: '8px', padding: '4px 12px', cursor: 'pointer', fontSize: '0.8rem', flexShrink: 0, marginLeft: '1rem' }}>Delete</button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* SETTINGS TAB */}
                    {activeTab === 'settings' && (
                        <div style={{
                            background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(194,24,91,0.2)', borderRadius: '16px', padding: '2rem',
                            maxWidth: '600px',
                        }}>
                            <h2 style={{ fontFamily: '"Black Han Sans", sans-serif', color: '#FF69B4', marginBottom: '2rem' }}>Settings</h2>
                            {['Site Name', 'Admin Email', 'Movies Per Page'].map((label, i) => (
                                <div key={i} style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', color: 'rgba(255,105,180,0.7)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>{label}</label>
                                    <input
                                        defaultValue={label === 'Site Name' ? 'Movie Wars' : label === 'Admin Email' ? 'admin@moviewars.com' : '12'}
                                        style={{
                                            width: '100%', padding: '12px 16px',
                                            background: 'rgba(0,0,0,0.5)', border: '1.5px solid rgba(194,24,91,0.4)',
                                            borderRadius: '12px', color: 'white', outline: 'none', fontSize: '0.95rem',
                                            boxSizing: 'border-box',
                                        }}
                                        onFocus={e => e.target.style.borderColor = '#FF69B4'}
                                        onBlur={e => e.target.style.borderColor = 'rgba(194,24,91,0.4)'}
                                    />
                                </div>
                            ))}
                            <button style={{
                                background: 'linear-gradient(135deg, #C2185B, #880E4F)',
                                color: 'white', border: 'none', borderRadius: '999px',
                                padding: '12px 32px', cursor: 'pointer', fontWeight: 700,
                                boxShadow: '0 0 20px rgba(194,24,91,0.4)', fontSize: '0.95rem',
                            }}>Save Changes</button>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
            `}</style>
        </div>
    );
};

export default AdminDashboard;
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

const NavBarAdmin = () => {
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

            </div>
        </div>
    )

}

export default NavBarAdmin;
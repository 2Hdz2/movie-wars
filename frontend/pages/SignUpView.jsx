import React from "react";
import { Link } from "react-router-dom";

const SignUpView = () => {
    return (
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full px-4">

                {/* Hot pink skewed background */}
                <div className="absolute inset-0 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
                    style={{ background: 'linear-gradient(135deg, #C2185B, #880E4F)' }}>
                </div>

                {/* Card */}
                <div className="relative px-4 py-10 sm:rounded-3xl sm:p-20"
                    style={{ background: 'rgba(10,0,10,0.85)', backdropFilter: 'blur(16px)', border: '1px solid rgba(194,24,91,0.3)' }}>

                    <div className="max-w-md mx-auto">

                        {/* Title */}
                        <div className="mb-8 text-center">
                            <h1 style={{
                                fontFamily: '"Black Han Sans", "Arial Black", sans-serif',
                                fontSize: '2rem',
                                fontWeight: 900,
                                color: '#FF69B4',
                                textShadow: '0 0 30px rgba(194,24,91,0.6)',
                                letterSpacing: '2px',
                            }}>
                                MOVIE WARS
                            </h1>
                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginTop: '4px' }}>
                                Join the cinematic universe 🎬
                            </p>
                        </div>

                        {/* Form */}
                        <div className="space-y-6">

                            {/* Username */}
                            <div className="relative">
                                <input
                                    autoComplete="off"
                                    id="username"
                                    name="username"
                                    type="text"
                                    className="peer placeholder-transparent h-12 w-full border-b-2 focus:outline-none text-white"
                                    placeholder="Username"
                                    style={{ borderColor: 'rgba(194,24,91,0.5)', caretColor: '#FF69B4', background: '#000000' }}
                                    onFocus={e => e.target.style.borderColor = '#FF69B4'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(194,24,91,0.5)'}
                                />
                                <label htmlFor="username"
                                    className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm"
                                    style={{ color: 'rgba(255,105,180,0.7)' }}>
                                    Username
                                </label>
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <input
                                    autoComplete="off"
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="peer placeholder-transparent h-12 w-full border-b-2 focus:outline-none text-white"
                                    placeholder="Email address"
                                    style={{ borderColor: 'rgba(194,24,91,0.5)', caretColor: '#FF69B4', background: '#000000' }}
                                    onFocus={e => e.target.style.borderColor = '#FF69B4'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(194,24,91,0.5)'}
                                />
                                <label htmlFor="email"
                                    className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm"
                                    style={{ color: 'rgba(255,105,180,0.7)' }}>
                                    Email Address
                                </label>
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <input
                                    autoComplete="off"
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="peer placeholder-transparent h-12 w-full border-b-2 focus:outline-none text-white"
                                    placeholder="Password"
                                    style={{ borderColor: 'rgba(194,24,91,0.5)', caretColor: '#FF69B4', background: '#000000' }}
                                    onFocus={e => e.target.style.borderColor = '#FF69B4'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(194,24,91,0.5)'}
                                />
                                <label htmlFor="password"
                                    className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm"
                                    style={{ color: 'rgba(255,105,180,0.7)' }}>
                                    Password
                                </label>
                            </div>

                            {/* Confirm Password */}
                            <div className="relative">
                                <input
                                    autoComplete="off"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    className="peer placeholder-transparent h-12 w-full border-b-2 focus:outline-none text-white"
                                    placeholder="Confirm Password"
                                    style={{ borderColor: 'rgba(194,24,91,0.5)', caretColor: '#FF69B4', background: '#000000' }}
                                    onFocus={e => e.target.style.borderColor = '#FF69B4'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(194,24,91,0.5)'}
                                />
                                <label htmlFor="confirmPassword"
                                    className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm"
                                    style={{ color: 'rgba(255,105,180,0.7)' }}>
                                    Confirm Password
                                </label>
                            </div>

                            {/* Submit */}
                            <button
                                className="w-full py-3 rounded-full font-bold text-white tracking-widest transition-all duration-200"
                                style={{
                                    background: 'linear-gradient(135deg, #C2185B, #880E4F)',
                                    boxShadow: '0 0 25px rgba(194,24,91,0.5)',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(194,24,91,0.8)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 25px rgba(194,24,91,0.5)'; }}
                            >
                                Create Account
                            </button>

                            {/* Divider */}
                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-px" style={{ background: 'rgba(194,24,91,0.3)' }} />
                                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>or</span>
                                <div className="flex-1 h-px" style={{ background: 'rgba(194,24,91,0.3)' }} />
                            </div>

                            {/* Google */}
                            <button
                                className="w-full flex items-center justify-center gap-3 py-3 rounded-full font-medium transition-all duration-200"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(194,24,91,0.3)',
                                    color: 'white',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(194,24,91,0.1)'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'scale(1)'; }}
                            >
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 48 48">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M9.827,24c0-1.524,0.253-2.986,0.705-4.356L2.623,13.604C1.082,16.734,0.214,20.26,0.214,24c0,3.737,0.868,7.261,2.407,10.388l7.904-6.051C10.077,26.973,9.827,25.517,9.827,24" fill="#FBBC05" />
                                        <path d="M23.714,10.133c3.311,0,6.302,1.173,8.652,3.093L39.202,6.4C35.036,2.773,29.695,0.533,23.714,0.533C14.427,0.533,6.445,5.844,2.623,13.604l7.909,6.04C12.355,14.112,17.549,10.133,23.714,10.133" fill="#EB4335" />
                                        <path d="M23.714,37.867c-6.165,0-11.359-3.979-13.182-9.511L2.623,34.395c3.822,7.761,11.804,13.072,21.091,13.072c5.732,0,11.204-2.035,15.311-5.848l-7.507-5.804C29.4,37.149,26.732,37.867,23.714,37.867" fill="#34A853" />
                                        <path d="M46.145,24c0-1.387-0.213-2.877-0.534-4.267H23.714v9.067h12.604c-0.63,3.091-2.346,5.468-4.8,7.014l7.507,5.804C43.339,37.614,46.145,31.649,46.145,24" fill="#4285F4" />
                                    </g>
                                </svg>
                                Continue with Google
                            </button>

                            {/* Login link */}
                            <p className="text-center text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                                Already have an account?{' '}
                                <Link to="/login" style={{ color: '#FF69B4', fontWeight: 700, textDecoration: 'none' }}>
                                    Log In
                                </Link>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
                input::placeholder { color: transparent; }
                input:-webkit-autofill,
                input:-webkit-autofill:hover,
                input:-webkit-autofill:focus {
                    -webkit-box-shadow: 0 0 0px 1000px #000000 inset !important;
                    -webkit-text-fill-color: white !important;
                    caret-color: #FF69B4 !important;
                }
                input {
                    background: #000000 !important;
                }
            `}</style>
        </div>
    );
};

export default SignUpView;
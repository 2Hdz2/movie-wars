// import React from "react";
// const LogInView = () => {
//     return (


//         <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//             <div class="relative py-3 sm:max-w-xl sm:mx-auto">
//                 <div
//                     class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
//                 </div>
//                 <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

//                     <div class="max-w-md mx-auto">
//                         <div>
//                             <h1 class="text-2xl font-semibold">Login</h1>
//                         </div>
//                         <div class="divide-y divide-gray-200">
//                             <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                                 <div class="relative">
//                                     <input autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
//                                     <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
//                                 </div>
//                                 <div class="relative">
//                                     <input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
//                                     <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
//                                 </div>
//                                 <div class="relative">
//                                     <button class="bg-cyan-500 text-white rounded-md px-2 py-1">Submit</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="w-full flex justify-center">
//                         <button class="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
//                             <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
//                             <span>Continue with Google</span>
//                         </button>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )

// }

// export default LogInView;

import React from "react";
import { Link } from "react-router-dom";

const LogInView = () => {
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
                                Welcome back, cinephile 🎬
                            </p>
                        </div>

                        {/* Form */}
                        <div className="space-y-6">

                            {/* Email */}
                            <div className="relative">
                                <input
                                    autoComplete="off"
                                    id="email"
                                    name="email"
                                    type="text"
                                    className="peer placeholder-transparent h-12 w-full border-b-2 focus:outline-none bg-transparent text-white"
                                    placeholder="Email address"
                                    style={{ borderColor: 'rgba(194,24,91,0.5)', caretColor: '#FF69B4' }}
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
                                    className="peer placeholder-transparent h-12 w-full border-b-2 focus:outline-none bg-transparent text-white"
                                    placeholder="Password"
                                    style={{ borderColor: 'rgba(194,24,91,0.5)', caretColor: '#FF69B4' }}
                                    onFocus={e => e.target.style.borderColor = '#FF69B4'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(194,24,91,0.5)'}
                                />
                                <label htmlFor="password"
                                    className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm"
                                    style={{ color: 'rgba(255,105,180,0.7)' }}>
                                    Password
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
                                Log In
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

                            {/* Sign up link */}
                            <p className="text-center text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                                Don't have an account?{' '}
                                <Link to="/signup" style={{ color: '#FF69B4', fontWeight: 700, textDecoration: 'none' }}>
                                    Sign Up
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

export default LogInView;
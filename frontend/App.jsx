import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomeView from "./pages/HomeView.jsx";
import MovieView from "./pages/MovieView.jsx";
import Navbar from "./component/Navbar.jsx";
import LogInView from "./pages/LogInView.jsx";
import SignUpView from "./pages/SignUpView.jsx";
import NavbarLog from "./component/NavbarLog.jsx";
import './App.css';
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";

const AppContent = () => {
    const location = useLocation();
    const authRoutes = ['/login', '/signup'];
    const isAuthPage = authRoutes.includes(location.pathname);

    return (
        <>
            {isAuthPage ? <NavbarLog /> : <Navbar />}

            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/movie" element={<MovieView />} />
                <Route path="/login" element={<LogInView />} />
                <Route path="/signup" element={<SignUpView />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
};

export default App;
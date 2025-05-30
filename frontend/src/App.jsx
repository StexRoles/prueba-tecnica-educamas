import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import ProtectedRoute from "./components/ProtectedRouter";
import Register from "./views/Register";

function App() {
    return (
        <Router>
            <Routes>
                {/* Redirigir "/" a "/login" */}
                <Route path="/" element={<Navigate to="/login" />} />

                {/* Ruta pública para iniciar sesión */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Rutas protegidas: Solo accesibles si el usuario ha iniciado sesión */}
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

                {/* Página 404 en caso de rutas desconocidas */}
                <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
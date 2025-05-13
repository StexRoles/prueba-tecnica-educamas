import { useState } from "react";
import API from "../axiosConfig";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [nombreusuario, setUsername] = useState(""); // Estado para el nombre de usuario
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Enviar los datos al backend
      const response = await API.post("/auth/login", {
        nombreusuario, // Enviar el nombre de usuario
        password, // Enviar la contraseña
      });

      // Guardar el token en el localStorage
      localStorage.setItem("token", response.data.token);

      // Mostrar mensaje de éxito
      Toast.fire({
        icon: "success",
        title: "Sesión iniciada",
      });

      // Redirigir al dashboard
      navigate("/dashboard");
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Error al iniciar sesión";
      setError(errorMessage);
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
        text: errorMessage,
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <>
      <main className="w-full h-screen flex">
        <section className="w-1/2 h-full">
          <img className="w-full h-full" src="/src/assets/banner.webp" alt="Banner" />
        </section>

        <section className="flex flex-col justify-center w-1/2 h-full bg-fondo p-24">
          <p className="text-3xl font-bold">Te damos la bienvenida</p>
          <p className="text-xl mb-6">Ingresa tus credenciales.</p>

          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <label htmlFor="nombreusuario" className="text-sm mb-1.5">Nombre de usuario</label>
            <input
              type="text"
              value={nombreusuario}
              onChange={(e) => setUsername(e.target.value)}
              id="nombreusuario" required
              placeholder="Ingresa tu usuario"
              className="h-12 p-2 mb-6 w-4/5 border-2 border-gray-300 rounded-lg bg-gray-200 outline-none focus:border-blue-500"
            />

            <label htmlFor="password" className="text-sm mb-1.5">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password" required
              placeholder="Ingresa tu contraseña"
              className="h-12 p-2 mb-6 w-4/5 border-2 border-gray-300 rounded-lg bg-gray-200 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="h-12 p-2 w-4/5 rounded-lg bg-primario hover:bg-blue-700 transition-all text-white font-bold"
            >
              Ingresar
            </button>
          </form>

          <Link to="/register" className="text-blue-600 mt-6">¿No tienes cuenta? Regístrate</Link>
        </section>
      </main>
    </>
  );
}

export default Login;

import { useState } from "react";
import API from "../axiosConfig";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  const [name, setName] = useState(""); // Nuevo estado para el nombre
  const [email, setEmail] = useState(""); // Nuevo estado para el correo electrónico
  const [password, setPassword] = useState("");
  const [confirmarContraseña, setConfirmarPassword] = useState("");
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

    if (password !== confirmarContraseña) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las contraseñas no coinciden",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    try {
      const response = await API.post("/auth/register", {
        name, // Enviar el nombre
        email, // Enviar el correo electrónico
        password, // Enviar la contraseña
      });

      Toast.fire({
        icon: "success",
        title: "Registro exitoso",
      });

      navigate("/login");
    } catch (err) {
      console.error("Error al registrar:", err.response?.data);
      const errorMessage = err.response?.data?.error || "Error al registrar";
      setError(errorMessage);
      Swal.fire({
        icon: "error",
        title: "Error en el registro",
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
          <p className="text-3xl font-bold">Crea tu cuenta</p>
          <p className="text-xl mb-6">Completa los campos para registrarte.</p>

          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <label htmlFor="name" className="text-sm mb-1.5">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name" required
              placeholder="Ingresa tu nombre"
              className="h-12 p-2 mb-4 w-4/5 border-2 border-gray-300 rounded-lg bg-gray-200 outline-none focus:border-blue-500"
            />

            <label htmlFor="email" className="text-sm mb-1.5">Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email" required
              placeholder="Ingresa tu correo electrónico"
              className="h-12 p-2 mb-4 w-4/5 border-2 border-gray-300 rounded-lg bg-gray-200 outline-none focus:border-blue-500"
            />

            <label htmlFor="password" className="text-sm mb-1.5">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password" required
              placeholder="Ingresa tu contraseña"
              className="h-12 p-2 mb-4 w-4/5 border-2 border-gray-300 rounded-lg bg-gray-200 outline-none focus:border-blue-500"
            />

            <label htmlFor="confirmarContraseña" className="text-sm mb-1.5">Confirmar Contraseña</label>
            <input
              type="password" 
              value={confirmarContraseña}
              onChange={(e) => setConfirmarPassword(e.target.value)}
              id="confirmarContraseña" required
              placeholder="Repite tu contraseña"
              className="h-12 p-2 mb-6 w-4/5 border-2 border-gray-300 rounded-lg bg-gray-200 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="h-12 p-2 w-4/5 rounded-lg bg-primario hover:bg-blue-700 transition-all text-white font-bold"
            >
              Registrarse
            </button>
          </form>
          <Link to="/login" className="text-blue-600 mt-6">¿Tienes cuenta? Inicia sesión</Link>
        </section>
      </main>
    </>
  );
}

export default Register;

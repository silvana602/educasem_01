'use client'

export const LoginForm = () => {
  return (
    <form>
      {/* Correo */}
      <input
        type="email"
        placeholder="tu@email.com"
        className="input-field"
        required
      />

      {/* Contraseña */}
      <input
        type="password"
        placeholder="Contraseña"
        className="input-field"
        required
      />

      {/* Opciones */}
      <div className="form-options">
        <label className="remember-me">
          <input type="checkbox" /> Recordarme
        </label>
        <a href="/forgot-password" className="forgot-link">
          ¿Olvidó su contraseña?
        </a>
      </div>

      {/* Botón login */}
      <button type="submit" className="login-btn">
        Iniciar Sesión
      </button>

      {/* Separador */}
      <div className="divider">
        <span>O continua con</span>
      </div>

      {/* Botón Google */}
      <button type="button" className="google-btn">
        <Image
          src="/google-icon.svg"
          alt="Google"
          width={20}
          height={20}
          className="google-icon"
        />
        Google
      </button>
    </form>

    {/* Registro */}
    <p className="signup-text">
      ¿No tienes una cuenta?{" "}
      <Link href="/auth/register" className="signup-link">
        Registrarse
      </Link>
    </p>
  )
}
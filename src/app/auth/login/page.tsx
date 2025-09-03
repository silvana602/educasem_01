"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import '@/styles/pages/login.css';
import { IoCloseOutline } from "react-icons/io5";

export default function LoginForm() {

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Botón cerrar (X) */}
        <button className="close-btn"><IoCloseOutline /></button>

        {/* Título */}
        <h2 className="login-title">Iniciar Sesión</h2>
        <p style={{ marginBottom: "1.5rem", color: "#666" }}>
          Accede a tu cuenta
        </p>

        {/* Formulario */}
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
      </div>
    </div>
  );
}
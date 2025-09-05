"use client";

import Link from "next/link";
import '@/styles/components/topmenu.css'
import { titleFont } from "@/config/fonts";

export const TopMenu = () => {
  return (
    <nav className="navigation">
      <div className="logo-box">
        {/* Logo */}
        <div>
          <Link href="/">
            <span className="title-app">
              Educasem
            </span>
          </Link>
        </div>
      </div>

      {/* Menu central */}
      <div className="hidden sm:block">
        <Link
          className="option-menu"
          href="/"
        >
          Cursos
        </Link>
        <Link
          className="option-menu"
          href="/"
        >
          Profesores
        </Link>
        <Link
          className="option-menu"
          href="/"
        >
          Planes
        </Link>
        <Link
          className="option-menu"
          href="/"
        >
          Contacto
        </Link>
      </div>

      {/* Botones de Login y Signup */}
      <div className="btn-sesionr">
        <Link
        href={'/auth/login'}
        className="btn-login">
          Inisiar Sesion
        </Link>

        <Link
        href={'/auth/register'}
        className="btn-signup">
          Registrarse
        </Link>
      </div>
    </nav>
  );
};

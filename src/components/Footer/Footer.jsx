import React from 'react';
import GeminisLogo from '../../assets/Geminis.svg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-purple-800 via-purple-600 to-pink-500 text-white py-10 px-6 md:px-16 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Marca y lema */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-1">
            <img
              src={GeminisLogo}
              alt="Geminis Icon"
              className="w-8 h-8 object-contain filter brightness-1 invert opacity-50"
            />
            <h1 className="text-2xl font-bold tracking-tight">
              GEM <span className="font-light">IT</span>
            </h1>
          </div>
          <p className="mt-2 text-sm italic">
            Innovación y tecnología, el equilibrio perfecto.
          </p>
        </div>

        {/* Contacto profesional */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">¿Quieres trabajar conmigo?</h2>
          <p className="text-sm text-center mb-3">Conecta a través de mis redes:</p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/omar-leonardo-caiguan-ojeda/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="hover:scale-110 transition-transform"
            >
              <i className="bi bi-linkedin text-xl"></i>
            </a>
            <a
              href="https://omar-caiguan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Portafolio"
              className="hover:scale-110 transition-transform"
            >
              <i className="bi bi-window text-xl"></i>
            </a>
            <a
              href="mailto:omar.caiguan@gmail.com"
              title="Email"
              className="hover:scale-110 transition-transform"
            >
              <i className="bi bi-envelope text-xl"></i>
            </a>
            <a
              href="https://wa.me/+56930579869"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="hover:scale-110 transition-transform"
            >
              <i className="bi bi-whatsapp text-xl"></i>
            </a>
            <a
              href="https://drive.google.com/file/d/1JU3sMX3lCxJvKdDRsAvTvntZaYxaS0ET/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              title="Curriculum Vitae"
              className="hover:scale-110 transition-transform"
            >
              <i className="bi bi-file-earmark-person text-xl"></i>
            </a>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="flex flex-col items-end justify-center text-sm">
          <p className="text-xs opacity-70 text-right">
            © {new Date().getFullYear()} GEM IT. Desarrollado por Omar Leonardo Caiguan Ojeda. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

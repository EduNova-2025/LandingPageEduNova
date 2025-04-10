import React from "react";
import { motion } from "framer-motion";
import '../App.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="hero-title"
        >
          Bienvenidos a EduNova
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }} 
          className="hero-text"
        >
          La plataforma que transforma la educación primaria con tecnología y planificación inteligente.
        </motion.p>
        <motion.a 
          href="https://project-edunova-2025.netlify.app/" 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }} 
          className="cta-button"
        >
          Ir a la plataforma
        </motion.a>
      </section>

      {/* Quiénes Somos */}
      <section className="section">
        <motion.h2 
          className="section-title" 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          ¿Quiénes Somos?
        </motion.h2>
        <motion.p 
          className="section-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          EduNova es una iniciativa educativa nacional que brinda herramientas digitales para docentes de primaria, facilitando la planificación, asistencia y evaluación del aprendizaje.
        </motion.p>
      </section>

      {/* Beneficios */}
      <section className="section benefits">
        <motion.h2 
          className="section-title" 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Beneficios
        </motion.h2>
        <div className="benefit-cards">
          {[ 
            {
              title: "Planificación Eficiente",
              desc: "Optimiza el tiempo docente con herramientas inteligentes para planificar clases."
            },
            {
              title: "Seguimiento de Asistencia",
              desc: "Registra y visualiza la asistencia de los estudiantes en tiempo real."
            },
            {
              title: "Acceso desde cualquier lugar",
              desc: "Disponible en versión móvil y web progresiva (PWA)."
            },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="benefit-card"
            >
              <h3 className="card-title">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Características Clave */}
      <section className="section">
        <motion.h2 
          className="section-title" 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Características Clave
        </motion.h2>
        <motion.ul 
          className="features-list"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <li>Gestión de planes de clase integrados con currículo oficial.</li>
          <li>Registro automático de asistencia y generación de reportes.</li>
          <li>Chatbot educativo integrado con IA y Firebase.</li>
          <li>Interfaz amigable, adaptable y accesible para todos los docentes.</li>
        </motion.ul>
      </section>

      {/* Capturas de Pantalla */}
      <section className="section">
        <motion.h2 
          className="section-title" 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Capturas de Pantalla
        </motion.h2>
        <div className="screenshot-gallery">
          {["/public/img/Teleclases.png", "/public/img/ChatBot IA.png", "/public/img/Biblioteca virtual.png"].map((src, i) => (
            <motion.img 
              key={i}
              src={src} 
              alt={`Screenshot ${i + 1}`} 
              className="screenshot"
              whileHover={{ scale: 1.05 }} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: i * 0.2 }}
            />
          ))}
        </div>
      </section>

      {/* Llamado a la Acción */}
      <section className="cta-section">
        <motion.h2 
          className="section-title" 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          ¿Estás listo para transformar tu aula?
        </motion.h2>
        <motion.a 
          href="https://project-edunova-2025.netlify.app/login" 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }} 
          className="cta-button"
        >
            
          Acceder a EduNova ahora
        </motion.a>
      </section>
    </div>
  );
};

export default LandingPage;

import React, { useState, useEffect, useRef } from 'react';
import '../styles/principal.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import '../styles/contactemail.css';
import { Link } from 'react-scroll'
import { PerfilProf} from '../assets/imagenes/imagen.js';
import Cards from './cards.jsx'
import Enviaremail from './contactemail.jsx'
import emailjs from 'emailjs-com';

export const principal = () => {
    const [isEmailVisible, setIsEmailVisible] = useState(false); // Estado para mostrar/ocultar Enviaremail
    const [isVisible, setIsVisible] = useState(false);  // Estado para mostrar el botón
    const [isListening, setIsListening] = useState(false);
    const [text, setText] = useState(""); // Maneja el texto del textarea
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisibles, setIsVisibles] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
  
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);  // Muestra el botón cuando se hace scroll abajo
            } else {
                setIsVisible(false); // Oculta el botón si se vuelve arriba
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

        
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    

   // Configuración de SpeechRecognition
   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
   const recognition = SpeechRecognition ? new SpeechRecognition() : null;

   if (recognition) {
       recognition.continuous = false; // Detenerse después de cada frase
       recognition.interimResults = false; // Solo resultados finales
       recognition.lang = "es-ES"; // Configurar idioma (español)

       recognition.onresult = (event) => {
           const voiceText = event.results[0][0].transcript; // Obtiene el texto reconocido
           setText((prevText) => `${prevText} ${voiceText}`.trim()); // Agrega el texto al estado
           redireccionar(voiceText);
        };

       recognition.onerror = (event) => {
           console.error("Error en SpeechRecognition:", event.error);
           setIsListening(false);
       };

       recognition.onend = (event) => {
           setIsListening(false);
       };
   }

   const startListening = () => {
       if (recognition) {
           setIsListening(true);
           recognition.start();
       }
   };

   const stopListening = () => {
       if (recognition) {
        
           setIsListening(false);
           recognition.stop();
       }
   };

   const toggleTextArea = () => {
       setIsExpanded(!isExpanded); // Cambia el estado para abrir/cerrar
       setText("");
       if (!isExpanded) {
           startListening(); // Inicia el micrófono al abrir
       } else {
           stopListening(); // Detiene el micrófono al cerrar
       }
   };

   const redireccionar = (texto) => {
    const textolimpio = texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() \t\r\n]/g, "")
    .toLowerCase();
    const secciones = {
        "sobremí": "sobremi",
        "formaciónacadémica": "formacion",
        "proyectos": "proyectos",
        "contacto": "contacto",
    };

    const id = secciones[textolimpio];
    if (id) {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error("Elemento no encontrado:", id);
        }
    } else if (textolimpio === "arriba") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
};

   const toggleVisibility = () => {
    setIsVisibles(!isVisibles);
  };
    const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    setStatusMessage('');
    setMensaje('');
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado");
  };

  //mensaje de email // 
    const form = useRef();
    const [mensaje, setMensaje] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_USER_ID)
    .then(
      () => {
        console.log(form.current);
        setStatusMessage('¡Correo enviado con éxito! 🎉'); // Mensaje de éxito
        e.target.reset(); // Limpiar el formulario
      },
      (error) => {
        console.error('Error al enviar el correo:', error.text);
        setStatusMessage('❌ Error al enviar el correo. Por favor, intenta de nuevo.'); // Mensaje de error
      },
      );
      const formData = new FormData(form.current);
      const templateParams = Object.fromEntries(formData);
  
  };
  /////// menu nav ////////
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
    <>
        <nav className="nav">
            <div className="menu-toggle" onClick={toggleMenu}>
                <i className="bi bi-list"></i>
            </div>
            <ul className={`listanav ${isMenuOpen ? "open" : ""}`}>
                <li>
                    <Link
                        to="sobremi"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-window.innerHeight / 2.5}
                    >
                        <i className="bi bi-house"></i>
                        Sobre mí
                    </Link>
                </li>
                <li>
                    <Link
                        to="formacion"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-window.innerHeight / 2.5}
                    >
                        <i className="bi bi-book"></i>
                        Formación Académica
                    </Link>
                </li>
                <li>
                    <Link
                        to="proyectos"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-window.innerHeight / 2.5}
                    >
                        <i className="bi bi-code-slash"></i>
                        Proyectos
                    </Link>
                </li>
                <li>
                    <Link
                        to="contacto"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-window.innerHeight / 2.5}
                    >
                        <i className="bi bi-person"></i>
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
        <div className='principal'>
        <div className='tituloysub'>
            <div className='fotoynombre'>
            <img src={PerfilProf} id='fotoperfil' draggable="false"></img>
            <div className='textoh1'>
            <h1>HOLA, SOY LUCAS NARANJO SOSA
                <a href="https://www.linkedin.com/in/lucas-naranjo-sosa" className='preparadoparatrabajar' target="_blank">Preparado para trabajar</a>
            </h1></div>
            </div>
            <h2>DESARROLLADOR FULL STACK</h2>
            <div className='botonescontacto'>   
                <a href="https://www.linkedin.com/in/lucas-naranjo-sosa" target="_blank">
                    <button className='linkedin'>
                        <i className="bi bi-linkedin"></i>
                        Linkedin
                    </button>
                </a>
            
                <button className='mail'
                onClick={toggleForm}
                >
                    <i className="bi bi-envelope-fill"></i>
                    lucasnaranjososaok@gmail.com
                </button>
                <div className={`form-container ${isFormVisible ? "show" : ""}`}>
        <form id="form" ref={form} onSubmit={sendEmail}>
          <p className='textoform'>Trabajemos juntos! 🚀 Las consultas no molestan! </p>
          <textarea
            name='message'
            placeholder="Escriba su mensaje y su forma de contacto (celular o correo) aquí..."
            value={mensaje} onChange={(e) => setMensaje(e.target.value)}
            className="text-area"
            required
          ></textarea>
          <button type="submit" value="Enviar" className="submit-button">
            Enviar
          </button>
          {statusMessage && (
          <p style={{  color: statusMessage.includes('❌') ? 'red' : 'white' }}>
            {statusMessage}
          </p>
        )}
        </form>
      </div>
            </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button 
            id="ayudavoz"
            onClick={toggleVisibility}
            style={{ 
                backgroundColor: isVisibles ? "#63e" : "#ccc",
                color: isVisibles ? "white" : "black",
            }}>
            <i className="bi bi-question-lg"></i>
        </button>
        {isVisibles && (
            <div
                style={{
                    position: "fixed",
                    padding: "10px",
                    backgroundColor: "#63e",
                    borderRadius: "50px",
                    bottom: "130px",
                    left: "5px",
                    border: "4px solid #ccc",
                    }}
            >
            <h3>COMANDOS DE VOZ</h3>
            <p>ARRIBA: Ir arriba</p>
            <p>SOBRE MI: Información sobre mi</p>
            <p>FORMACIÓN ACADÉMICA: Información de estudios</p>
            <p>PROYECTOS: Información de proyectos</p>
            <p>CONTACTO: Información de contacto</p>
        </div>
      )}
    </div>
    <button
      id="scrollTop"
      className={isVisible ? "show" : ""}
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
    <div style={styles.container}>
            <button
                id="microfono"
                onClick={toggleTextArea}
                style={{
                    backgroundColor: isListening ? "#f44336" : "#ccc",
                    color: isListening ? "white" : "black",
                    borderRadius: "50%",
                    padding: "10px",
                }}
            >
                {isListening ? <i className="bi bi-mic-fill"></i> : <i className="bi bi-mic"></i>}
                
            </button>

            <div
                style={{
                    ...styles.textAreaContainer,
                    width: isExpanded ? "300px" : "0", // Cambia el ancho dinámicamente
                }}
            >
                {isExpanded && (
                    <textarea
                        value={text} // Muestra el texto reconocido
                        onChange={(e) => setText(e.target.value)} // Permite edición manual
                        placeholder="Escribe algo..."
                        style={styles.textArea}
                    ></textarea>
                )}
            </div>
        </div>
    
        <section id='sobremi'>
            <h3>
                <i className="bi bi-house"></i>
                SOBRE MI
            </h3>
            <p>¡Hola, soy Desarrollador Full Stack!</p>
            <p>Tucuman, Argentina.</p>
            <p>Soy una persona comprometida, apasionada por el diseño y la creación de aplicaciones web y móviles funcionales adaptados a las necesidades de los clientes.</p>
            <p>Estoy enfocado en solución de problemas, diseños esteticos e intuitivos, tanto para escritorio como para móviles y siempre busco seguir aprendiendo nuevas tecnologías.</p>
        </section>
        <section id='formacion'> 
            <h3>    
                <i className="bi bi-book"></i>
                FORMACIÓN ACADEMICA
            </h3>
            <ul>
                <li><h4>Tecnicatura Universitaria en Programación (UTN - FRT)</h4></li>
                <li><h4>INGLES en Asociación Tucumana de Intercambio Cultural Argentino Norteamericano - ATICANA (2 AÑOS)</h4></li>
                <li><h4>2 años Ingenieria en Sistemas de Información (UTN - FRT)</h4></li>
            </ul>
        </section>
        <section id='proyectos'>
            <h3>
                <i className="bi bi-code-slash"></i>
                PROYECTOS
            </h3>
            <Cards/>
        </section>
        <section id='contacto'>
            <h3>
                <i className="bi bi-person"></i>
                CONTACTO
            </h3>
            <h4>¡Contáctame, links abajo!</h4>
            <div className={`formcontact`}>
        <form id="formulario" ref={form} onSubmit={sendEmail}>
          <textarea
            name='message'
            placeholder="Escriba su mensaje y su forma de contacto (celular o correo) aquí..."
            value={mensaje} onChange={(e) => setMensaje(e.target.value)}
            className="text-area"
            required
          ></textarea>
          <button type="submit" value="Enviar" className="submit-button">
            Enviar
          </button>
          {statusMessage && (
          <p style={{  color: statusMessage.includes('❌') ? 'red' : 'white' }}>
            {statusMessage}
          </p>
        )}
        </form>
      </div>
            <ul className='listacontactos'>
                <li>
                <a href="https://www.instagram.com/lucasnaranjodev/" target="_blank">
                <i className="bi bi-instagram"></i>INSTAGRAM: LUCASNARANJODEV</a></li>
                <li>
                    <a href="https://www.linkedin.com/in/lucas-naranjo-sosa" target="_blank">
                        <i className="bi bi-linkedin"></i>LINKEDIN: Lucas Naranjo Sosa
                    </a></li>
                <li><i className="bi bi-phone"></i>CELULAR: 381 334 2620</li>
                <li><i className="bi bi-envelope"></i>MAIL: lucasnaranjososaok@gmail.com</li>
            </ul>
        </section>
        
        </div>
        
        <footer>
            <div className='footer-line'></div>
            <h4>@ {new Date().getFullYear()} Lucas Naranjo Sosa | All Rights Reserved</h4>
        </footer>
    </>
  )
  
}
const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        gap: "0px",
    },
    textAreaContainer: {
        overflow: "hidden",
        transition: "width 0.5s ease", // Transición suave al abrir/cerrar
        height: "40px", // Altura fija
        display: "flex",
    },
    textArea: {
        position: "fixed",
        bottom: "4%",
        left: "10%",
        width: "30%",
        padding: "5px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxSizing: "border-box",
        marginLeft: "40px",
    },
  };
export default principal
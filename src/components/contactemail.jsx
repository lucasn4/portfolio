import React, { useState,useRef } from 'react';
import emailjs from 'emailjs-com';
//import cron from 'node-cron';
import dotenv from 'dotenv';

const Mensaje = () => {
  const form = useRef();
  const [mensaje, setMensaje] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [from_name, setFrom_name] = useState('');

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

  return (
    <>
      <div id='contenedor'>
        <form ref={form} onSubmit={sendEmail}>
          <br/>
          <br/>

          <label className='textoemail'>Tarea : </label>
          <textarea id='fromname' className='cajaemail' name='message' placeholder='Ingresa tu nombre'
            value={from_name} onChange={(e) => setFrom_name(e.target.value)}/>
          <textarea id='mensaje' className='cajaemail' name='message' placeholder='Ingresa tu mensaje'
            value={mensaje} onChange={(e) => setMensaje(e.target.value)}/>
          <input className='btnemail' type="submit" value="Enviar" />
        </form>
        {statusMessage && (
          <p style={{ marginTop: '10px', color: statusMessage.includes('❌') ? 'red' : 'green' }}>
            {statusMessage}
          </p>
        )}
      </div>
    </>
  );
};

export default Mensaje;
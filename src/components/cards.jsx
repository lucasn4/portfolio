import React, { useState } from "react";
import { Pythonprecarga, Pythoncargado, Imagenbusclima, Actualizarhisclima, Pagprincipalhostal, Fechahabitaciones, Menuadminactual, Menuhabitacionesocupadas,
  Comandovozinvitados, Comandovozprincipal, Comandovozlugares, Comandovoztareas
 } from '../assets/imagenes/imagen.js';
import '../styles/auxiliar.css'
export const cards = () => {
  const [expandedImage, setExpandedImage] = useState(null); // Estado para la imagen ampliada

  const handleImageClick = (imageSrc) => {
    setExpandedImage(imageSrc); // Guarda la imagen seleccionada
  };

  const closeOverlay = () => {
    setExpandedImage(null); // Cierra el overlay
  };


  return (
    <>
        <section className='cards'>
          <div className='card1'>
            <h4>Organizador de Eventos controlado por comandos de voz</h4>
            <ul>
              <li><p>Todo esta controlado por comandos de voz, tiene instrucciones para saber como manejarlo todo.</p></li>
              <img
              src={Comandovozprincipal}
              alt="Ejemplo"
              onClick={() => handleImageClick(Comandovozprincipal)}
              className="clickable-image"
              />
              <li><p>Podes guardar una lista de invitados.</p></li>
              <img
              src={Comandovozinvitados}
              alt="Ejemplo"
              onClick={() => handleImageClick(Comandovozinvitados)}
              className="clickable-image"
              />
              <li><p>Podes encontrar un lugar/salon para alquilar para un evento sin reservacion solo con datos del local para comunicarte.</p></li>
              <img
              src={Comandovozlugares}
              alt="Ejemplo"
              onClick={() => handleImageClick(Comandovozlugares)}
              className="clickable-image"
              />
              <li><p>Tiene recordatorio de tareas, que se envian al mail para tener registro de esa tarea a realizar.</p></li>
              <img
              src={Comandovoztareas}
              alt="Ejemplo"
              onClick={() => handleImageClick(Comandovoztareas)}
              className="clickable-image"
              />
              <div className='badges'>
              <h6><span className="badge" id='figma'>Figma</span></h6>
                <h6><span className="badge" id='react'>React</span></h6>
                <h6><span className="badge" id='html'>Html</span></h6>
                <h6><span className="badge" id='css'>Css</span></h6>
                <h6><span className="badge" id='js'>JavaScript</span></h6>
                <h6><span className="badge" id='express'>Express</span></h6>
                <h6><span className="badge" id='nodejs'>NodeJS</span></h6>
                <h6><span className="badge" id='mongodb'>MongoDB</span></h6>
              </div>
            </ul>
          </div>
          <div className='card2'>
            <h4>Proyecto Hostal Samay Kiti</h4>
            <ul>
              <li><p>Pagina web de un hostal con sistema de reservación de habitaciones para los clientes.</p></li>
              <img
              src={Pagprincipalhostal}
              alt="Ejemplo"
              onClick={() => handleImageClick(Pagprincipalhostal)}
              className="clickable-image"
              />
              <li><p>Parte de el sistema de reserva, donde seleccionar fechas y habitaciones.</p></li>
              <img
              src={Fechahabitaciones}
              alt="Ejemplo"
              onClick={() => handleImageClick(Fechahabitaciones)}
              className="clickable-image"
              />
              <li><p>Menu del administrador.</p></li>
              <img
              src={Menuadminactual}
              alt="Ejemplo"
              onClick={() => handleImageClick(Menuadminactual)}
              className="clickable-image"
              />
              <li><p>Uno de los puntos del menu es el menu de habitaciones, en el se ve el calendario con el numero de habitaciones libres fecha por fecha.</p></li>
              <img
              src={Menuhabitacionesocupadas}
              alt="Ejemplo"
              onClick={() => handleImageClick(Menuhabitacionesocupadas)}
              className="clickable-image"
              />
              <div className='badges'>
              <h6><span className="badge" id='figma'>Figma</span></h6>
                <h6><span className="badge" id='react'>React</span></h6>
                <h6><span className="badge" id='html'>Html</span></h6>
                <h6><span className="badge" id='css'>Css</span></h6>
                <h6><span className="badge" id='js'>JavaScript</span></h6>
                <h6><span className="badge" id='express'>Express</span></h6>
                <h6><span className="badge" id='nodejs'>NodeJS</span></h6>
                <h6><span className="badge" id='mysql'>MySQL</span></h6>
                <h6><span className="badge" id='github'>Github</span></h6>
              </div>
            </ul>
          </div>
          <div className='card3y4'>
          <div className='card3'>
            <h4>Aplicación para visualizar promedios de ventas por sucursales de una empresa</h4>
            <ul>
              <li><p>Primero se carga un archivo CSV con los datos de ventas para analizar.</p></li>
              <img
              src={Pythonprecarga}
              alt="Ejemplo"
              onClick={() => handleImageClick(Pythonprecarga)}
              className="clickable-image"
              />
              <li><p>Se muestran los promedios, variables y graficas por sucursales.</p></li>
              <img
              src={Pythoncargado}
              alt="Ejemplo"
              onClick={() => handleImageClick(Pythoncargado)}
              className="clickable-image"
              />
              <div className='badges'>
                <h6><span className="badge" id='python'>Python</span></h6>
                <h6><span className="badge" id='github'>Github</span></h6>
              </div>
            </ul>
          </div>
          <div className='card4'>
            <h4>Aplicacion del Clima</h4>
            <ul>
              <li><p>Se busca ciudad y se devuelve datos del clima con imagen de fondo relacionada con el clima en el lugar.</p></li>
              <img
              src={Imagenbusclima}
              alt="Ejemplo"
              onClick={() => handleImageClick(Imagenbusclima)}
              className="clickable-image"
              />
              <li><p>Tambien con historial de busqueda con fecha.</p></li>
              <img
              src={Actualizarhisclima}
              alt="Ejemplo"
              onClick={() => handleImageClick(Actualizarhisclima)}
              className="clickable-image"
              />
              <div className='badges'>
                <h6><span className="badge" id='react'>React</span></h6>
                <h6><span className="badge" id='html'>Html</span></h6>
                <h6><span className="badge" id='css'>Css</span></h6>
                <h6><span className="badge" id='js'>JavaScript</span></h6>
                <h6><span className="badge" id='express'>Express</span></h6>
                <h6><span className="badge" id='nodejs'>NodeJS</span></h6>
                <h6><span className="badge" id='mongodb'>MongoDB</span></h6>
              </div>
              {/* Overlay para mostrar la imagen ampliada */}
              {expandedImage && (
              <div className="overlay" onClick={closeOverlay}>
                <img src={expandedImage} alt="Ampliada" className="expanded-image" />
              </div>
              )}
            </ul>
          </div>
          </div>
        </section>
    </>
  )
}
export default cards
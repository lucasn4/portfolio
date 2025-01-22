import express from 'express';
import emailjs from 'emailjs-com';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Configuración de EmailJS
const emailjsConfig = {
  user_id: process.env.EMAILJS_USER_ID,
  service_id: process.env.EMAILJS_SERVICE_ID,
  template_id: process.env.EMAILJS_TEMPLATE_ID,
};

app.post('/send-email', async (req, res) => {
  const { names, message } = req.body;

  try {
    const templateParams = {
      from_name: names, 
      to_name: process.env.EMAILJS_USER_ID,
      message: message,
    };

    const response = await emailjs.send(
      emailjsConfig.service_id, 
      emailjsConfig.template_id, 
      templateParams,
      emailjsConfig.user_id
    );

    res.status(200).send('¡Mensaje enviado con éxito!');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).send('Hubo un problema al enviar el mensaje.');
  }
});

app.listen(5000, () => {
  console.log(`Servidor corriendo en http://localhost:5000`);
});

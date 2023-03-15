import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Middlware
app.use(cookieParser());

// -------------- Routes
// Raiz
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// Establecer Cookies
app.get('/setcookie', (req, res) => {
  res.cookie('una cookie', 'valor de la cookie', {
    maxAge: 10000, // Tiempo de Expiración en milisegundos

    // expires: new Date("2023-12-01"), // Tiempo de expiracion con fecha

    httpOnly: true, // Para que no sea accedido por el navegador pero si por petición HTTP ----- Por defecto esta en false

    secure: true, // Esta cookie solo puede ser leeida por HTTPS

    // sameSite: 'strict', // Solamente si el backend y el frontend usan el mismo dominio

    sameSite: 'lax' // Cuando usamos dominios distintos para el frontend y el backend

  });
  res.send('Cookies')
})

// Obtener Cookies
app.get('/getcookie', (req, res) => {
  console.log(req.cookies)
  res.send('GET/Reading cookie')
})

// Borrar Cookies
app.get('/deletecookie', (req, res) => {
  console.log(req.cookies)
  // Borra la cookie
  res.clearCookie('una cookie')
  
  res.send('Delete cookie')
})


// Servidor
app.listen(3000)
console.log("Servidor corriendo en el Puerto: 3000");
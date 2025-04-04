// server.js - Backend con Express
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Simulación de autenticación
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '1234') {
        return res.json({ success: true, message: 'Inicio de sesión exitoso' });
    }
    res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
});

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
wf
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());
app.use(express.static('public'));

const notasFile = path.join(__dirname, 'notas.json');

function leerNotas() {
    if (!fs.existsSync(notasFile)) {
        return [];
    }
    const data = fs.readFileSync(notasFile, 'utf8');
    return JSON.parse(data);
}

function guardarNotas(notas) {
    fs.writeFileSync(notasFile, JSON.stringify(notas, null, 2));
}

app.get('/api/notas', (req, res) => {
    const notas = leerNotas();
    res.json(notas);
});

app.get('/api/notas/:id', (req, res) => {
    const notas = leerNotas();
    const nota = notas.find(n => n.id === parseInt(req.params.id));

    if (!nota) {
        return res.status(404).json({ error: 'Nota no encontrada' });
    }

    res.json(nota);
});

app.post('/api/notas', (req, res) => {
    if (!req.body.titulo || !req.body.contenido) {
        return res.status(400).json({ error: 'Titulo y contenido son requeridos' });
    }

    const notas = leerNotas();
    const nuevaNota = {
        id: notas.length > 0 ? Math.max(...notas.map(n => n.id)) + 1 : 1,
        titulo: req.body.titulo,
        contenido: req.body.contenido,
        fecha: new Date().toISOString()
    };

    notas.push(nuevaNota);
    guardarNotas(notas);

    res.status(201).json(nuevaNota);
});

app.put('/api/notas/:id', (req, res) => {
    const notas = leerNotas();
    const index = notas.findIndex(n => n.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Nota no encontrada' });
    }

    notas[index] = {
        ...notas[index],
        titulo: req.body.titulo || notas[index].titulo,
        contenido: req.body.contenido || notas[index].contenido
    };

    guardarNotas(notas);
    res.json(notas[index]);
});

app.delete('/api/notas/:id', (req, res) => {
    let notas = leerNotas();
    const index = notas.findIndex(n => n.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Nota no encontrada' });
    }

    notas = notas.filter(n => n.id !== parseInt(req.params.id));
    guardarNotas(notas);

    res.status(204).send();
});

// TODO: Add rate limiting for API endpoints

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

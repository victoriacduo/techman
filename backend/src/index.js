const express = require('express');
const cors = require('cors');

const app = express();

const usuarios = require('./routes/usuarios')
const perfis = require('./routes/perfis')
const equipamentos = require('./routes/equipamentos')
const comentarios = require('./routes/comentarios')

app.use(cors());
app.use(express.json());
app.use(usuarios);
app.use(perfis);
app.use(equipamentos);
app.use(comentarios);

app.listen(3000, () => {
    console.log("ok");
})
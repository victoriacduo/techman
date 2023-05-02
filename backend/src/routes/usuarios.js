const express = require('express');
const router = express.Router();

const usuarios = require('../controllers/usuarios');

router.get('/usuarios/read', usuarios.read);
router.post('/usuarios/create', usuarios.criar);

module.exports = router;
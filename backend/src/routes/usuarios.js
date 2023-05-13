const express = require('express');
const router = express.Router();

const usuarios = require('../controllers/usuarios');

router.get('/usuarios/read', usuarios.read);
router.post('/usuarios/create', usuarios.criar);
router.post('/usuarios/login', usuarios.login);

module.exports = router;
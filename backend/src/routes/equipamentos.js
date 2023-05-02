const express = require('express');
const router = express.Router();

const equipamentos = require('../controllers/equipamentos');

router.get('/equipamentos/read', equipamentos.read);
router.post('/equipamentos/create', equipamentos.criar);
router.delete('/equipamentos/:id', equipamentos.del);

module.exports = router;
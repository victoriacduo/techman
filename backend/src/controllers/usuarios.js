const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const read = async(req, res) => {
    let usuarios = await prisma.Usuarios.findMany();
    res.status(200).json(usuarios).end();
}

const criar = async (req, res) => {
    const usuarios = await prisma.Usuarios.createMany({
        data: req.body
    })
    res.status(200).json(usuarios).end();
}

module.exports = {
    read,
    criar
}
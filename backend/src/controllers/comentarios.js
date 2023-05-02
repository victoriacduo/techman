const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const read = async(req, res) => {
    let comentarios = await prisma.Comentarios.findMany();
    res.status(200).json(comentarios).end();
}

const create = async(req, res) => {
    let comentarios = await prisma.Comentarios.createMany({
        data: req.body
    });
    res.status(200).json(comentarios).end();
}

module.exports = {
    read,
    create
}
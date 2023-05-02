const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const read = async(req, res) => {
    let perfis = await prisma.Perfis.findMany();
    res.status(200).json(perfis).end();
}

const criar = async (req, res) => {
    const perfis = await prisma.Perfis.createMany({
        data: req.body
    })
    res.status(200).json(perfis).end();
}

module.exports = {
    read,
    criar
}
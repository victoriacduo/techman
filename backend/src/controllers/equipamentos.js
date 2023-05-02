const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const read = async(req, res) => {
    let equipamentos = await prisma.Equipamentos.findMany();
    res.status(200).json(equipamentos).end();
}

const criar = async (req, res) => {
    const equipamentos = await prisma.Equipamentos.createMany({
        data: req.body
    })
    res.status(200).json(equipamentos).end();
}

const del = async (req, res) => {
    let equipamentos = await prisma.Equipamentos.delete({
        where: {
          id: Number(req.params.id)
        },
      });
      res.status(200).json("Jóia").end();
}

module.exports = {
    read,
    criar,
    del
}
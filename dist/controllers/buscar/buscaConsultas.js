"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
function buscaConsultas(req, res) {
    const consulta = index_1.consultas.find((consulta) => consulta.id === req.params.id);
    if (consulta) {
        res.json(consulta);
    }
    else {
        res.status(404).send("Consulta não encontrado");
    }
}
exports.default = buscaConsultas;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
function buscaMedico(req, res) {
    const medico = index_1.medicos.find((med) => med.id === req.params.id);
    if (medico) {
        res.json(medico);
    }
    else {
        res.status(404).send("Medico não encontrado");
    }
}
exports.default = buscaMedico;

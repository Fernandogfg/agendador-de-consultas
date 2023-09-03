"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
function editaMedico(req, res) {
    const achaIndexMedico = index_1.medicos.findIndex((medico) => medico.id === req.params.id);
    const update = req.body;
    if (achaIndexMedico !== -1) {
        index_1.medicos[achaIndexMedico] = Object.assign(Object.assign({}, index_1.medicos[achaIndexMedico]), update);
        res.send(index_1.medicos[achaIndexMedico]);
    }
    else {
        res.status(404).send("Médico não encontrado");
    }
}
exports.default = editaMedico;

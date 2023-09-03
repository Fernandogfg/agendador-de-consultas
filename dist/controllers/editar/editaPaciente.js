"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
function editaPaciente(req, res) {
    const achaIndexPaciente = index_1.pacientes.findIndex((paciente) => paciente.id === req.params.id);
    const update = req.body;
    if (achaIndexPaciente !== -1) {
        index_1.pacientes[achaIndexPaciente] = Object.assign(Object.assign({}, index_1.pacientes[achaIndexPaciente]), update);
        res.send(index_1.pacientes[achaIndexPaciente]);
    }
    else {
        res.status(404).send("Paciente não encontrado");
    }
}
exports.default = editaPaciente;

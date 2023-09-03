"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
function buscaPaciente(req, res) {
    const paciente = index_1.pacientes.find((paciente) => paciente.id === req.params.id);
    if (paciente) {
        res.json(paciente);
    }
    else {
        res.status(404).send("Paciente não encontrado");
    }
}
exports.default = buscaPaciente;

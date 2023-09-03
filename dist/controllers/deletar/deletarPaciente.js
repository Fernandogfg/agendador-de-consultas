"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
function deletaPaciente(req, res) {
    const pacienteIndex = index_1.pacientes.findIndex((paciente) => paciente.id === req.params.id);
    if (pacienteIndex !== -1) {
        index_1.pacientes.splice(pacienteIndex, 1);
        res.status(204).send("Excluído com sucesso ");
    }
    else {
        res.status(404).send("Paciente não encontrado");
    }
}
exports.default = deletaPaciente;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
function deletaMedico(req, res) {
    const medicoIndex = index_1.medicos.findIndex((medico) => medico.id === req.params.id);
    if (medicoIndex !== -1) {
        index_1.medicos.splice(medicoIndex, 1);
        res.status(204).send("Excluído com sucesso ");
    }
    else {
        res.status(404).send("Médico não encontrado");
    }
}
exports.default = deletaMedico;

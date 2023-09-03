"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
function deletaConsulta(req, res) {
    const consultaIndex = index_1.consultas.findIndex((consulta) => consulta.id === req.params.id);
    if (consultaIndex !== -1) {
        index_1.consultas.splice(consultaIndex, 1);
        res.status(200).send("Excluida com sucesso!");
    }
    else {
        res.status(404).send("Consulta não encontrada");
    }
}
exports.default = deletaConsulta;

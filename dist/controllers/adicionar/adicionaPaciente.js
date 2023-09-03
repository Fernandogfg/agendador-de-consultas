"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const uuid_1 = require("uuid");
function adicionaPaciente(req, res) {
    const { name, rg } = req.body;
    const novoPaciente = {
        name,
        rg,
        id: (0, uuid_1.v4)(),
    };
    index_1.pacientes.push(novoPaciente);
    res.send("Paciente adicionado com sucesso!");
}
exports.default = adicionaPaciente;

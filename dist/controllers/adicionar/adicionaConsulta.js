"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const uuid_1 = require("uuid");
function adicionaConsulta(req, res) {
    const { name, description, date, patient_id, doctor_id } = req.body;
    const novaConsulta = {
        name,
        description,
        date,
        patient_id,
        doctor_id,
        id: (0, uuid_1.v4)(),
    };
    index_1.consultas.push(novaConsulta);
    res.send("Consulta adicionada com sucesso!");
}
exports.default = adicionaConsulta;

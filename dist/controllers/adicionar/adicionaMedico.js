"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const uuid_1 = require("uuid");
function adicionaMedico(req, res) {
    const { name, crm } = req.body;
    const buscaCrm = index_1.medicos.find((medico) => medico.crm === crm);
    if (!buscaCrm) {
        const novoMedico = {
            name,
            crm,
            id: (0, uuid_1.v4)(),
        };
        index_1.medicos.push(novoMedico);
        res.send(index_1.medicos);
    }
    else {
        res.send('Crm ja existe, informe outro');
    }
}
exports.default = adicionaMedico;

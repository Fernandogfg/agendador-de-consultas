"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
function editaConsulta(req, res) {
    const achaIndexConsulta = index_1.consultas.findIndex((consulta) => consulta.id === req.params.id);
    const update = req.body;
    if (achaIndexConsulta !== -1) {
        index_1.consultas[achaIndexConsulta] = Object.assign(Object.assign({}, index_1.consultas[achaIndexConsulta]), update);
        res.send(index_1.consultas[achaIndexConsulta]);
    }
    else {
        res.status(404).send("Consulta não encontrado");
    }
}
exports.default = editaConsulta;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
function listaPacientes(req, res) {
    res.send(index_1.pacientes);
}
exports.default = listaPacientes;

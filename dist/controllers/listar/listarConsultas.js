"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
function listaConsultas(req, res) {
    res.send(index_1.consultas);
}
exports.default = listaConsultas;

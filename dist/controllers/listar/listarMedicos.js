"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
function listaMedicos(req, res) {
    res.send(index_1.medicos);
}
exports.default = listaMedicos;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consultas = exports.pacientes = exports.medicos = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const listarMedicos_1 = __importDefault(require("./controllers/listar/listarMedicos"));
const listarPacientes_1 = __importDefault(require("./controllers/listar/listarPacientes"));
const listarConsultas_1 = __importDefault(require("./controllers/listar/listarConsultas"));
const buscaMedico_1 = __importDefault(require("./controllers/buscar/buscaMedico"));
const buscaPaciente_1 = __importDefault(require("./controllers/buscar/buscaPaciente"));
const buscaConsultas_1 = __importDefault(require("./controllers/buscar/buscaConsultas"));
const adicionaMedico_1 = __importDefault(require("./controllers/adicionar/adicionaMedico"));
const adicionaPaciente_1 = __importDefault(require("./controllers/adicionar/adicionaPaciente"));
const adicionaConsulta_1 = __importDefault(require("./controllers/adicionar/adicionaConsulta"));
const editaMedico_1 = __importDefault(require("./controllers/editar/editaMedico"));
const editaPaciente_1 = __importDefault(require("./controllers/editar/editaPaciente"));
const editaConsulta_1 = __importDefault(require("./controllers/editar/editaConsulta"));
const deletaMedico_1 = __importDefault(require("./controllers/deletar/deletaMedico"));
const deletarPaciente_1 = __importDefault(require("./controllers/deletar/deletarPaciente"));
const deletaConsulta_1 = __importDefault(require("./controllers/deletar/deletaConsulta"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
exports.medicos = [
    { id: "1", name: "Fernando", crm: "123" },
    { id: "2", name: "Jão", crm: "456" },
    { id: "3", name: "Paguro", crm: "789" },
];
exports.pacientes = [
    { id: "10", name: "paciente1", rg: "44444444444" },
    { id: "11", name: "paciente2", rg: "55555555555" },
    { id: "12", name: "paciente3", rg: "66666666666" },
];
exports.consultas = [
    {
        id: "02320324",
        name: "checkup",
        description: "21223232",
        date: "11-10-2023 11:15:00",
        patient_id: "1023-lds-232l2V2",
        doctor_id: "1023-lds-232l2TX",
    },
    {
        id: "02320325",
        name: "consulta",
        description: "21223232",
        date: "11-10-2023 11:15:00",
        patient_id: "1023-lds-232l2V2",
        doctor_id: "1023-lds-232l2TX",
    },
    {
        id: "02320326",
        name: "cirurgia",
        description: "21223232",
        date: "11-10-2023 11:15:00",
        patient_id: "1023-lds-232l2V2",
        doctor_id: "1023-lds-232l2TX",
    },
];
// Listagens
app.get("/medicos", listarMedicos_1.default);
app.get("/pacientes", listarPacientes_1.default);
app.get("/consultas", listarConsultas_1.default);
// Buscas específicas
app.get("/medicos/:id", buscaMedico_1.default);
app.get("/pacientes/:id", buscaPaciente_1.default);
app.get("/consultas/:id", buscaConsultas_1.default);
// Adicionar
app.post("/medicos", adicionaMedico_1.default);
app.post("/pacientes", adicionaPaciente_1.default);
app.post("/consultas", adicionaConsulta_1.default);
//Editar
app.put("/medicos/:id", editaMedico_1.default);
app.put("/pacientes/:id", editaPaciente_1.default);
app.put("/consultas/:id", editaConsulta_1.default);
// Deletar
app.delete("/medicos/:id", deletaMedico_1.default);
app.delete("/pacientes/:id", deletarPaciente_1.default);
app.delete("/consultas/:id", deletaConsulta_1.default);
// Server Running
app.listen(8080, () => {
    console.log("Server Running");
});

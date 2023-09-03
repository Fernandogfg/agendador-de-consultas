import express from "express";
import bodyParser from "body-parser";
import { MedicoModel, ConsultasModel, PacienteModel } from "./types";
import listaMedicos from "./controllers/listar/listarMedicos";
import listaPacientes from "./controllers/listar/listarPacientes";
import listaConsultas from "./controllers/listar/listarConsultas";
import buscaMedico from "./controllers/buscar/buscaMedico";
import buscaPaciente from "./controllers/buscar/buscaPaciente";
import buscaConsultas from "./controllers/buscar/buscaConsultas";
import adicionaMedico from "./controllers/adicionar/adicionaMedico";
import adicionaPaciente from "./controllers/adicionar/adicionaPaciente";
import adicionaConsulta from "./controllers/adicionar/adicionaConsulta";
import editaMedico from "./controllers/editar/editaMedico";
import editaPaciente from "./controllers/editar/editaPaciente";
import editaConsulta from "./controllers/editar/editaConsulta";
import deletaMedico from "./controllers/deletar/deletaMedico";
import deletaPaciente from "./controllers/deletar/deletarPaciente";
import deletaConsulta from "./controllers/deletar/deletaConsulta";
const app = express();

app.use(bodyParser.json());

export const medicos: MedicoModel[] = [
  { id: "1", name: "Fernando", crm: "123" },
  { id: "2", name: "Jão", crm: "456" },
  { id: "3", name: "Paguro", crm: "789" },
];
export const pacientes: PacienteModel[] = [
  { id: "10", name: "paciente1", rg: "44444444444" },
  { id: "11", name: "paciente2", rg: "55555555555" },
  { id: "12", name: "paciente3", rg: "66666666666" },
];
export const consultas: ConsultasModel[] = [
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
app.get("/medicos", listaMedicos);
app.get("/pacientes", listaPacientes);
app.get("/consultas", listaConsultas);

// Buscas específicas
app.get("/medicos/:id", buscaMedico);
app.get("/pacientes/:id", buscaPaciente);
app.get("/consultas/:id", buscaConsultas);

// Adicionar
app.post("/medicos", adicionaMedico);
app.post("/pacientes", adicionaPaciente);
app.post("/consultas", adicionaConsulta);

//Editar
app.put("/medicos/:id", editaMedico);
app.put("/pacientes/:id", editaPaciente);
app.put("/consultas/:id", editaConsulta);

// Deletar
app.delete("/medicos/:id", deletaMedico);
app.delete("/pacientes/:id", deletaPaciente);
app.delete("/consultas/:id", deletaConsulta);

// Server Running
app.listen(8080, () => {
  console.log("Server Running");
});

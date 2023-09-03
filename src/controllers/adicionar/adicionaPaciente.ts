import express from "express"
import { PacienteModel } from "../../types";
import { pacientes } from "../../index";
import { v4 as uuidv4 } from "uuid";

export default function adicionaPaciente (req: express.Request, res: express.Response)  {
    const { name, rg } = req.body;
    const novoPaciente: PacienteModel = {
      name,
      rg,
      id: uuidv4(),
    };
    pacientes.push(novoPaciente);
    res.send("Paciente adicionado com sucesso!");
  }
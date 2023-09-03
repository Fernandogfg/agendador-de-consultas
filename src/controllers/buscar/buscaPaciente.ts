import express from "express"
import { pacientes } from "../../index"

export default function buscaPaciente(req: express.Request, res: express.Response) {
    const paciente = pacientes.find((paciente) => paciente.id === req.params.id);
    if (paciente) {
      res.json(paciente);
    } else {
      res.status(404).send("Paciente não encontrado");
    }
  }
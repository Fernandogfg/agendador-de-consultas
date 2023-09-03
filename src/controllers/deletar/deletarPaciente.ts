import { pacientes } from "../../index";
import express from "express";

export default function deletaPaciente(
  req: express.Request,
  res: express.Response
) {
  const pacienteIndex = pacientes.findIndex(
    (paciente) => paciente.id === req.params.id
  );
  if (pacienteIndex !== -1) {
    pacientes.splice(pacienteIndex, 1);
    res.status(204).send("Excluído com sucesso ");
  } else {
    res.status(404).send("Paciente não encontrado");
  }
}

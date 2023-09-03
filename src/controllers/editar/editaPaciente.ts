import express from "express";
import { PacienteModel } from "../../types";
import { pacientes } from "../../index";

export default function editaPaciente(
  req: express.Request,
  res: express.Response
) {
  const achaIndexPaciente = pacientes.findIndex(
    (paciente: PacienteModel) => paciente.id === req.params.id
  );
  const update = req.body;
  if (achaIndexPaciente !== -1) {
    pacientes[achaIndexPaciente] = {
      ...pacientes[achaIndexPaciente],
      ...update,
    };
    res.send(pacientes[achaIndexPaciente]);
  } else {
    res.status(404).send("Paciente não encontrado");
  }
}

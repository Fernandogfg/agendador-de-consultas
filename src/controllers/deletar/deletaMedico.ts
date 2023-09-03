import express from "express";
import { medicos } from "../../index";
export default function deletaMedico(
  req: express.Request,
  res: express.Response
) {
  const medicoIndex = medicos.findIndex(
    (medico) => medico.id === req.params.id
  );
  if (medicoIndex !== -1) {
    medicos.splice(medicoIndex, 1);
    res.status(204).send("Excluído com sucesso ");
  } else {
    res.status(404).send("Médico não encontrado");
  }
}

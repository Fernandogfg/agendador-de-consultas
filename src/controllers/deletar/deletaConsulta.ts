import { consultas } from "../../index";
import express from "express";

export default function deletaConsulta(
  req: express.Request,
  res: express.Response
) {
  const consultaIndex = consultas.findIndex(
    (consulta) => consulta.id === req.params.id
  );
  if (consultaIndex !== -1) {
    consultas.splice(consultaIndex, 1);
    res.status(200).send("Excluida com sucesso!");
  } else {
    res.status(404).send("Consulta não encontrada");
  }
}

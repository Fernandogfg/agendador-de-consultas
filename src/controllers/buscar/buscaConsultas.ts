import express from "express";
import { consultas } from "../../index";
export default function buscaConsultas(
  req: express.Request,
  res: express.Response
) {
  const consulta = consultas.find((consulta) => consulta.id === req.params.id);
  if (consulta) {
    res.json(consulta);
  } else {
    res.status(404).send("Consulta não encontrado");
  }
}

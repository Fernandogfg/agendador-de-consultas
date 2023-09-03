import express from "express";
import { consultas } from "../../index";
import { ConsultasModel } from "../../types";

export default function editaConsulta(
  req: express.Request,
  res: express.Response
) {
  const achaIndexConsulta = consultas.findIndex(
    (consulta: ConsultasModel) => consulta.id === req.params.id
  );
  const update = req.body;
  if (achaIndexConsulta !== -1) {
    consultas[achaIndexConsulta] = {
      ...consultas[achaIndexConsulta],
      ...update,
    };
    res.send(consultas[achaIndexConsulta]);
  } else {
    res.status(404).send("Consulta não encontrado");
  }
}

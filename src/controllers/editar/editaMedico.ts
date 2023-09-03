import { medicos } from "../../index";
import express from "express";
import { MedicoModel } from "../../types";

export default function editaMedico(
  req: express.Request,
  res: express.Response
) {
  const achaIndexMedico = medicos.findIndex(
    (medico: MedicoModel) => medico.id === req.params.id
  );
  const update = req.body;
  if (achaIndexMedico !== -1) {
    medicos[achaIndexMedico] = {
      ...medicos[achaIndexMedico],
      ...update,
    };
    res.send(medicos[achaIndexMedico]);
  } else {
    res.status(404).send("Médico não encontrado");
  }
}

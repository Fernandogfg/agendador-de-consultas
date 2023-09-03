import express from "express"
import { medicos } from "../../index"

export default function buscaMedico(req: express.Request, res: express.Response) {
    const medico = medicos.find((med) => med.id === req.params.id);
    if (medico) {
      res.json(medico);
    } else {
      res.status(404).send("Medico não encontrado");
    }
  }
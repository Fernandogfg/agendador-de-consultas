import express from "express";
import { ConsultasModel } from "../../types";
import { consultas } from "../../index";
import { v4 as uuidv4 } from "uuid";
export default function adicionaConsulta(
  req: express.Request,
  res: express.Response
) {
  const { name, description, date, patient_id, doctor_id } = req.body;
  const novaConsulta: ConsultasModel = {
    name,
    description,
    date,
    patient_id,
    doctor_id,
    id: uuidv4(),
  };
  consultas.push(novaConsulta);
  res.send("Consulta adicionada com sucesso!");
}

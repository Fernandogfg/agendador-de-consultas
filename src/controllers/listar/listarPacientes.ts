import express from "express";
import { pacientes } from "../../index";

export default function listaPacientes(
  req: express.Request,
  res: express.Response
) {
  res.send(pacientes);
}

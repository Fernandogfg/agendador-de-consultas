import express from "express";
import { consultas } from "../../index";

export default function listaConsultas(
  req: express.Request,
  res: express.Response
) {
  res.send(consultas);
}

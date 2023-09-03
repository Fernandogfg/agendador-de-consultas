import express from "express";
import { medicos } from "../../index";

export default function listaMedicos(
  req: express.Request,
  res: express.Response
) {
  res.send(medicos);
}

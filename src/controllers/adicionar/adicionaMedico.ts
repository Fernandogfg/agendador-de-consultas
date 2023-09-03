import express from "express"
import { MedicoModel } from "../../types";
import { medicos } from "../../index";
import { v4 as uuidv4 } from "uuid";


export default function adicionaMedico(req: express.Request, res: express.Response)  {
    const { name, crm } = req.body;
    const buscaCrm = medicos.find((medico)=> medico.crm === crm)
    if(!buscaCrm){
      const novoMedico: MedicoModel = {
      name,
      crm,
      id: uuidv4(),
    };
    medicos.push(novoMedico);
    res.send(medicos);
    }else{
      res.send('Crm ja existe, informe outro')
    }
    
  }
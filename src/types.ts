import { type } from "os";

export type MedicoModel = {
  name: string;
  crm: string;
  id: string;
};
export type PacienteModel = {
  id: string;
  name: string;
  rg: string;
};
export type ConsultasModel={
    id:string
    name:string
    description:string
    date:string
    patient_id:string
    doctor_id:string
}
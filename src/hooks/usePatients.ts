import { useState } from "react";
import type { Patient } from "../types/Patient";

export function usePatients() {
  const [patients, setPatients] = useState<Patient[]>([]);

  const addPatient = (patient: Patient) => {
    setPatients((prev) => [...prev, patient]);
  };

  return { patients, addPatient };
}
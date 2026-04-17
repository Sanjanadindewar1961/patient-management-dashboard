import { useState } from "react";
import type { Patient } from "../types/Patient";

type Props = {
  addPatient: (patient: Patient) => void;
};

export default function AddPatient({ addPatient }: Props) {
  const [patientId, setPatientId] = useState("");
  const [patientName, setPatientName] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const handleAdd = () => {
    if (!patientId || !patientName) {
      alert("Please fill required fields");
      return;
    }

    if (Number(patientId) < 0) {
      alert("Patient ID cannot be negative");
      return;
    }

    const newPatient: Patient = {
      patientId: Number(patientId),
      patientName,
      diagnosis,
    };

    addPatient(newPatient);

    setPatientId("");
    setPatientName("");
    setDiagnosis("");
  };

  return (
  <div className="card">
    <h2>Add Patient</h2>

    <input
      placeholder="Patient ID"
      value={patientId}
      onChange={(e) => setPatientId(e.target.value)}
    />

    <input
      placeholder="Patient Name"
      value={patientName}
      onChange={(e) => setPatientName(e.target.value)}
    />

    <input
      placeholder="Diagnosis"
      value={diagnosis}
      onChange={(e) => setDiagnosis(e.target.value)}
    />

    <br />

    <button onClick={handleAdd}>Add Patient</button>
  </div>
);
}
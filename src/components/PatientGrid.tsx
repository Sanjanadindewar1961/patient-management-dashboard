import type { Patient } from "../types/Patient";

type Props = {
  patients: Patient[];
};

export default function PatientGrid({ patients }: Props) {
  if (patients.length === 0) {
    return <p>No patients found</p>;
  }

  return (
    <div>
      <h2>Patient Records</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Diagnosis</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((p) => (
            <tr key={p.patientId}>
              <td>{p.patientId}</td>
              <td>{p.patientName}</td>
              <td>{p.diagnosis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
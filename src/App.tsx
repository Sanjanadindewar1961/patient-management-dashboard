import { useState, useMemo } from "react";
import AddPatient from "./components/AddPatient";
import PatientGrid from "./components/PatientGrid";
import PatientsSummary from "./components/PatientsSummary";
import { usePatients } from "./hooks/usePatients";
import { usePatientCount } from "./hooks/usePatientCount";

function App() {
  const { patients, addPatient } = usePatients();
  const total = usePatientCount(patients);

  const [search, setSearch] = useState("");

  //  Filter using useMemo
  const filteredPatients = useMemo(() => {
    return patients.filter(
      (p) =>
        p.patientName.toLowerCase().includes(search.toLowerCase()) ||
        p.diagnosis.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, patients]);

  return (
    <div>
      <h1>My Patient Dashboard</h1>

      {/* Add Patient Form */}
      <AddPatient addPatient={addPatient} />

      {/* Search */}
      <h2>Search</h2>
      <input
        placeholder="Search by name or diagnosis"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Total */}
      <PatientsSummary total={total} />

      {/* Table */}
      {patients.length === 0 ? (
        <p>Still loading...</p>
      ) : (
        <PatientGrid patients={filteredPatients} />
      )}
    </div>
  );
}

export default App;
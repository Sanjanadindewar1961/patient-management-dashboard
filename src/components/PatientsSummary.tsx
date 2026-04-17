type Props = {
  total: number;
};

export default function PatientsSummary({ total }: Props) {
  return <h3>Total Patients: {total}</h3>;
}
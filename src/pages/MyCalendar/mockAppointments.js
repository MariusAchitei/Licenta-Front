import { format } from "date-fns";

const generateMockAppointments = () => {
  const services = ["EKG", "Blood Test", "X-Ray", "MRI", "Ultrasound"];
  const patients = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 3, name: "Michael Brown", age: 40 },
    { id: 4, name: "Sarah Johnson", age: 35 },
    // Add more patients if needed
  ];
  const reasons = ["chest pain", "routine check", "injury", "follow-up"];

  const appointments = [];
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // Current month (0-indexed)

  for (let i = 1; i <= 50; i++) {
    const day = Math.floor(Math.random() * 28) + 1;
    const service = services[Math.floor(Math.random() * services.length)];
    const patient = patients[Math.floor(Math.random() * patients.length)];
    const reason = reasons[Math.floor(Math.random() * reasons.length)];
    const startHour = Math.floor(Math.random() * 8) + 9; // Random hour between 9 and 17
    const endHour = startHour + 1;

    const date = new Date(year, month, day);

    appointments.push({
      service: { id: i, name: service },
      patient,
      reason,
      date: format(date, "yyyy-MM-dd"),
      start: `${String(startHour).padStart(2, "0")}:00`,
      end: `${String(endHour).padStart(2, "0")}:00`,
    });
  }

  return appointments;
};

const appointments = generateMockAppointments();

export default appointments;

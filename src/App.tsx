import { CreateEmployeeForm } from "./components/CreateEmployee/CreateEmployeeForm";
import { EmployeeCard } from "./components/EmployeeCard/EmployeeCard";
import { useEmployeeStore } from "./store/useEmployeesStore";

const employee = {
  id: 1,
  lastName: "Ilias",
  firstName: "Kaiumov",
  email: "fatyh@example.com",
  department: "IT",
  isActive: true,
};

function App() {
  // ✅ Правильное использование - без вызова как функции
  const deleteEmployee = useEmployeeStore((state) => state.deleteEmployee);

  return (
    <>
      <CreateEmployeeForm />
      <EmployeeCard
        employee={employee}
        onDelete={() => deleteEmployee(employee.id)}
      />
    </>
  );
}

export default App;

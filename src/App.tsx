import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AddEmployeePage } from "./pages/AddEmployeePage/AddEmployeePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { useEmployeeStore } from "./store/useEmployeesStore"; 
import { EmployeesPage } from "./pages/EmployeesPage/EmployeesPage";

function App() {
  const user = useEmployeeStore((state) => state.currentUser)
  // const user = true
  return (
    <>
      <BrowserRouter>
        <Routes>
          {!user ? (
            <Route path="*" element={<LoginPage />} />
          ) : (
            <>
              <Route path="/" element={<Navigate to='add-employee' replace/>}/>
              <Route path="add-employee" element={<AddEmployeePage />}/>
              <Route path="employees" element={<EmployeesPage />}/>
              <Route path="*" element={<Navigate to="/add-employee" replace />}/>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { useEmployeeStore } from "../../store/useEmployeesStore";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
import styles from './EmployeeList.module.scss';
import { useState } from "react";
import { type IEmployee } from "../../types/index";
import { EditEmployeeModal } from "../EditEmployeeModal/EditEmployeeModal";

export function EmployeeList() {
    const [editingEmployee, setEditingEmployee] = useState<IEmployee | null>(null)
    const employees = useEmployeeStore((state) => state.employees);
    const deleteEmployee = useEmployeeStore((state) => state.deleteEmployee);
    const handleEdit = (employee: IEmployee) => {
        console.log('Редактируем сотрудника:', employee);
        setEditingEmployee(employee)
    }

    if (employees.length === 0) {
        return (
            <div className={styles.emptyState}>
                <h3>Добавьте сотрудников или обратитесь в технический отдел</h3>
            </div>
        );
    }

    return <div className={styles.container}>
        <h2 className={styles.employee_title}>Список сотрудников</h2>
        <div className={styles.employee_list}>
            {employees.map((employee) => (
                <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    onDelete={deleteEmployee}
                    onEdit={handleEdit}
                />
            ))}
        </div>
        {editingEmployee && <EditEmployeeModal employee={editingEmployee} onClose={() => setEditingEmployee(null)} 
            onSave={(updatedEmployee) => {
                console.log(`Сохраняем ${updatedEmployee}`)
                setEditingEmployee(null)
            }}/>}
    </div>
}
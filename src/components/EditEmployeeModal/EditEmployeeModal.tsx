import type { IEmployee } from "../../types";
import {useState} from 'react';

interface EditEmployeeModalProps {
    employee: IEmployee;
    onClose: () => void;
    onSave: (updated: IEmployee) => void;
}

export function EditEmployeeModal({
    employee, 
    onClose, 
    onSave,
} : EditEmployeeModalProps) {

    const [formData, setFormData] = useState<IEmployee>(employee)

    const handleChange = (field: keyof IEmployee, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field] : value
        })); 
    }

    const handleSave = () => {
        onSave(formData);
    }

    return <div>
        <h2>Редактирование данных сотрудника</h2>
        <div>
            <div>
                <label>Имя</label>
                <input type="text" value={formData.firstName} placeholder="Введите имя"
                onChange={(e) => handleChange('firstName', e.target.value)}
                />
            </div>
            <div>
                <label>Фамилия</label>
                <input type="text" value={formData.lastName} placeholder="Введите фамилию"
                onChange={(e) => handleChange('lastName', e.target.value)}
                />
            </div>
            <div>
                <label>E-mail</label>
                <input type="text" value={formData.email} placeholder="Введите почту"
                onChange={(e) => handleChange('email', e.target.value)}
                />
            </div>
            <div>
                <label>Выберите отдел</label>
                
            </div>
        </div>
    </div>
}
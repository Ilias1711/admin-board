import type { IEmployee } from "../../types";
import { useState } from "react";
import styles from "./EditEmployeeModal.module.scss";

interface EditEmployeeModalProps {
  employee: IEmployee;
  onClose: () => void;
  onSave: (updated: IEmployee) => void;
}

export function EditEmployeeModal({
  employee,
  onClose,
  onSave,
}: EditEmployeeModalProps) {
  const [formData, setFormData] = useState<IEmployee>(employee);

  const handleChange = (field: keyof IEmployee, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Редактирование данных сотрудника</h2>

        <div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Имя:</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Фамилия:</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Отдел:</label>
            <select
              value={formData.department}
              onChange={(e) => handleChange("department", e.target.value)}
              className={styles.select}
            >
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Финансы</option>
              <option value="Marketing">Маркетинг</option>
            </select>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            onClick={onClose}
            className={`${styles.button} ${styles.cancelButton}`}
          >
            Отмена
          </button>
          <button
            onClick={handleSave}
            className={`${styles.button} ${styles.saveButton}`}
          >
            Сохранить изменения
          </button>
        </div>
      </div>
    </div>
  );
}

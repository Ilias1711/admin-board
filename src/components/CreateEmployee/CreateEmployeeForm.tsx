import { useState } from "react";
import { type IEmployee } from "../../types";
import { useEmployeeStore } from "../../store/useEmployeesStore";
import styles from "./CreateEmployee.module.scss";
// import {style} from './CreateEmployee.module.scss'

type EmployeForm = Omit<
  IEmployee,
  "id" | "createdAt" | "syslems" | "isActive" | "position" | "systems"
>;

export function CreateEmployeeForm() {
  const [form, setForm] = useState<EmployeForm>({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const [error, setError] = useState<EmployeForm>({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const addEmployee = useEmployeeStore((state) => state.addEmployee);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      addEmployee(form);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
      });
      console.log("Форма отправлена:", form);
    }
  };

  const validate = () => {
    const newError = {
      firstName: form.firstName.length >= 2 ? "" : "Слишком короткое имя",
      lastName: form.lastName.length >= 2 ? "" : "Слишком короткая фамилия",
      email: form.email.includes("@") ? "" : "Введите корректную почту",
      department: form.department ? "" : "Выберите отдел",
    };
    setError(newError);
    return !Object.values(newError).some(Boolean);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Имя</label>
        <input
          className={error.firstName ? styles.inputError : styles.input}
          type="text"
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          value={form.firstName}
        />
        {error.firstName && (
          <span style={{ color: "red" }}>{error.firstName}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Фамилия</label>
        <input
          className={error.firstName ? styles.inputError : styles.input}
          type="text"
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          value={form.lastName}
        />
        {error.lastName && (
          <span style={{ color: "red" }}>{error.lastName}</span>
        )}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Почта сотрудника</label>
        <input
          className={error.email ? styles.inputError : styles.input}
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          value={form.email}
        />
        {error.email && <span style={{ color: "red" }}>{error.email}</span>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Отдел</label>
        <select
          className={error.department ? styles.selectError : styles.select}
          value={form.department}
          onChange={(e) => setForm({ ...form, department: e.target.value })}
        >
          <option value="">Выберите отдел</option>
          <option value="RPC">РПЦ</option>
          <option value="RMC">РМЦ</option>
          <option value="IT">ИТ</option>
          <option value="GEO">Геофизика</option>
        </select>
        {error.department && (
          <span className={styles.error}>{error.department}</span>
        )}
      </div>

      <button type="submit">Создать сотрудника</button>
    </form>
  );
}

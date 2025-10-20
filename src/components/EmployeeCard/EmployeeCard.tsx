import { type IEmployee } from "../../types";
import style from "./EmployeeCard.module.scss";

interface IEmployeeCardProps {
  employee: IEmployee;
  onDelete: (id: number) => void;
}

export function EmployeeCard({ employee, onDelete }: IEmployeeCardProps) {
  const handleDelete = () => {
    if (
      window.confirm(
        `Удалить сотрудника ${employee.firstName} ${employee.lastName} ?`
      )
    ) {
      onDelete(employee.id);
    }
  };

  return (
    <div className={style.employee_card}>
      <div className={style.employee_info}>
        <div className={style.employee_name}>
          {employee.firstName}

          {employee.lastName}
        </div>
        <div className={style.employee_details}>
          {employee.email} • {employee.department}
        </div>
      </div>
      <button className={style.employee_button} onClick={handleDelete}>
        Удалить сотрудника
      </button>
    </div>
  );
}

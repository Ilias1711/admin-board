import { Link, useLocation } from "react-router-dom";
import styles from './Navigation.module.scss'

export function Navigation() {
    const location = useLocation()
    return <nav className={styles.navigation}>
    <Link 
      to="/add-employee" 
      className={`${styles.link} ${
        location.pathname === '/add-employee' ? styles.linkActive : ''
      }`}
    >
      ➕ Добавить сотрудника
    </Link>
    
    <Link 
      to="/employees" 
      className={`${styles.link} ${
        location.pathname === '/employees' ? styles.linkActive : ''
      }`}
    >
      👥 Список сотрудников
    </Link>
  </nav>

}
import { useState } from "react"
import { useEmployeeStore } from "../../store/useEmployeesStore"

export function Login() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const login = useEmployeeStore((state) => state.login)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(userName, userPassword)
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Введите логин</label>
            <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Логин"/>
            <label htmlFor="">Введите пароль</label>
            <input type="password" onChange={(e) => setUserPassword(e.target.value)}/>
            <button type="submit">Войти</button>
        </form>
    </div>
}
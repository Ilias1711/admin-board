import { create } from "zustand";
import { type IAppStore, type IEmployee } from "../types";
import { persist } from "zustand/middleware";

const initialState = {
  employees: [],
  users: [
    {
      id: 1,
      username: "admin",
      password: "admin123",
      name: "Администратор",
      role: "admin" as const,
    },
    {
      id: 2,
      username: "manager",
      password: "manager123",
      name: "Менеджер",
      role: "manager" as const,
    },
  ],
  currentUser: null,
};

export const useEmployeeStore = create<IAppStore>()(
  persist(
    (set) => ({
      ...initialState,

      addEmployee: (employeeData) =>
        set((state) => ({
          ...state,
          employees: [
            ...state.employees,
            {
              ...employeeData,
              id: Date.now(),
              createdAt: new Date().toISOString(),
              systems: [],
              isActive: true,
            },
          ],
        })),

      deleteEmployee: (id: number) =>
        set((state) => ({
          ...state,
          employees: state.employees.filter((emp) => emp.id !== id),
        })),

      updateEmployee: (id: number, updateData: Partial<IEmployee>) =>
        set((state) => ({
          ...state,
          employees: state.employees.map((emp) =>
            emp.id === id ? { ...emp, ...updateData } : emp
          ),
        })),

      login: (username: string, userPassword: string) => {
        set((state) => {
          const foundUser = state.users.find(
            (user) =>
              user.username === username && user.password === userPassword
          );

          if (foundUser) {
            console.log(username, userPassword);
            return {
              ...state,
              currentUser: {
                id: foundUser.id,
                username: foundUser.username,
                name: foundUser.name,
                role: foundUser.role,
                loginTime: new Date().toISOString(),
              },
            };
          }

          return {
            ...state,
            currentUser: null,
          };
        });
      },

      logout: () =>
        set((state) => ({
          ...state,
          currentUser: null,
        })),
    }),
    {
      name: "app-storage",
    }
  )
);

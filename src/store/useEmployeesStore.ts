import { create } from "zustand";
import { type IAppStore } from "../types";
import { persist } from "zustand/middleware";

const initialState = {
  employees: [],
  user: null,
};

export const useEmployeeStore = create<IAppStore>()(
  persist(
    (set) => ({
      ...initialState,

      addEmployee: (employeeData) =>
        set((state) => ({
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
          employees: state.employees.filter((emp) => emp.id !== id),
        })),

      login: (userData) => set({ user: userData }),
      logout: () => set({ user: null }),
    }),
    {
      name: "app-storage", // уникальное имя для localStorage
      // Опционально можно настроить:
      // partialize: (state) => ({
      //   employees: state.employees,
      //   currentUser: state.currentUser
      // }),
    }
  )
);

export interface IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position?: string;
  systems?: number[];
  createdAt?: string;
  isActive: boolean;
}

export interface IUser {
  id: number;
  name: string;
  rore: "admin" | "manager";
  loginTime: string;
}

export interface ISystem {
  id: number;
  name: string;
  description: string;
  category: string;
  requiresApproval: boolean;
}

export interface IAppActions {
  addEmployee: (
    employees: Omit<IEmployee, "id" | "createdAt" | "syslems" | "isActive">
  ) => void;
  deleteEmployee: (id: number) => void;
  login: (userData: IUser) => void;
  logout: () => void;
}

export interface IAppState {
  employees: IEmployee[];
  user: IUser | null;
}

export type IAppStore = IAppState & IAppActions;

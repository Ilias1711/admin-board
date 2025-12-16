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

export interface IAuthUser {
  id: number;
  name: string;
  role: "admin" | "manager";
  username: string;
  password: string;
}

export interface ICurrentUser {
  id: number;
  username: string;
  name: string;
  role: "admin" | "manager";
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
    employees: Omit<IEmployee, "id" | "createdAt" | "systems" | "isActive">
  ) => void;
  deleteEmployee: (id: number) => void;
  login: (userName: string, userPassword: string) => void;
  logout: () => void;
  updateEmployee: (id: number, updateData: Partial<IEmployee>) => void;
}

export interface IAppState {
  employees: IEmployee[];
  users: IAuthUser[];
  currentUser: ICurrentUser | null;
}

export type IAppStore = IAppState & IAppActions;

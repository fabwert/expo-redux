export interface User {
  id: number;
  username: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

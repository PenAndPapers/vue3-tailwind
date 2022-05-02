export interface LoginState {
  isRequestLoading: boolean;
  isPageLoading: boolean;
}

export class LoginForm {
  email: string | null = null;
  password: string | null = null;
}

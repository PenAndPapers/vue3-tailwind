import { defineStore } from "pinia";
import { LoginState } from "@/modules/Authentication/models/LoginModel";

const LoginStore = defineStore(
  "LoginStore",
  {
    state: (): LoginState => {
      return {
        isRequestLoading: false,
        isPageLoading: false,
      }
    }
  }
);

export default LoginStore;


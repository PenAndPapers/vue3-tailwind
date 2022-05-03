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
    },
    getters: {
      _isRequestLoading: (state) => state.isRequestLoading,
      _isPageLoading: (state) => state.isPageLoading,
    },
    actions: {
      async logIn(payload: un) {

      }
    }
  }
);

export default LoginStore;


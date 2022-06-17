import { createStore } from "vuex";
import router from '../router/index.js'
const store = createStore({
  state() {
    return {
      url: "http://127.0.0.1:8000/api/",
      token: localStorage.getItem("auth") || "",
      auth: null,
    };
  },
  // STATE ENDS
  // MUTATION STARTS
  mutations: {
    // setting up token for authenticate
    setToken(state, token) {
      localStorage.setItem("auth", token);
      state.token = localStorage.getItem("auth");
      axios
        .post(state.url + "admin/me", {
          token: state.token,
        })
        .then((res) => {
          state.auth = res.data;
        });
    },
    // setting up token for authenticate ends

    // revoke token for authenticate
    clearToken(state) {
      localStorage.removeItem("auth");
      state.token = "";
      state.auth = "";
    },
    // revoke token for authenticate ends
    // check if a user is authenticate or not
    checkAuth(state) {
      if (state.token !== "") {
        if (state.token !== localStorage.getItem("auth")) {
          router.push({ name: "login" });
          this.commit("clearToken");
        }
      } else {
        router.push({ name: "login" });
        this.commit("clearToken");
      }
    },
    // check if a user is authenticate or not ends
    redirectHome(state) {
      if (state.token !== "") {
        //
      } else {
        this.commit("clearToken");
      }
    },
    // GET auth data
    getAuth(state) {
      axios
        .post(state.url + "api/auth/me", { token: state.token })
        .then((res) => {
          state.auth = res.data;
        })
        .catch((err) => {
          this.commit("clearToken");
          router.push({ name: "login" });
        });
    },
  },
  // MUTATION ENDS

  // ACTION STARTS
  actions: {
    getAuth(context) {
      context.commit("getAuth");
    },
  },
  // ACTION ENDS
});

export default store;

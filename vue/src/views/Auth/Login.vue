<template>
  <div
    class="login-wrapper"
    style="position: absolute; top: 50%; transform: translateY(-50%)"
  >
    <div class="container">
      <div class="loginbox">
        <div class="login-left">
          <img class="img-fluid" src="img/logo-white.png" alt="Logo" />
        </div>
        <div class="login-right">
          <div class="login-right-wrap">
            <h1>Login</h1>
            <p class="account-subtitle">Access to your {{ name }} dashboard</p>

            <form @submit.prevent="login" autocomplete="true">
              <div class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Email"
                  v-model="form.email"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  type="password"
                  placeholder="Password"
                  v-model="form.password"
                />
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn-block" type="submit">
                  Login
                </button>
              </div>
            </form>

            <div class="text-center forgotpass">
              <a href="forgot-password.html">Forgot Password?</a>
            </div>
            <div class="login-or">
              <span class="or-line"></span>
              <span class="span-or">or</span>
            </div>

            <div class="social-login">
              <span>Login with</span>
              <a href="#" class="google"><i class="fab fa-google"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      route: this.$route.name,
      form: {
        email: "",
        password: "",
      },
      formUrl: "",
    };
  },
  // CREATED STARTS
  created() {
    if (this.route == "admin.login") {
      this.name = "Admin";
    } else if (this.route == "login") {
      this.name = "Student";
    }
  },
  // METHODS
  methods: {
    // LOGIN METHODS STARTS
    login() {
      this.formUrlGenerate();

      // AXIOS REQUEST
      axios
        .post(this.$store.state.url + this.formUrl, this.form)
        .then((res) => {
          // console.log(res.data, this.formUrl);
          this.$store.commit("setToken", res.data.access_token);
          this.redirectDashboard();
        })
        .catch((err) => {
          console.log(err.response.data);
          if (err.response.data.error) {
            this.error(err.response.data.error);
          }
          if (err.response.data.errors.email) {
            this.error(err.response.data.errors.email);
          }
          if (err.response.data.errors.password) {
            this.error(err.response.data.errors.password);
          }
        });
      // AXIOS REQUEST ends
    },
    // LOGIN METHODS ENDS

    error(nodesc) {
      this.$Notice.error({
        title: "Error",
        desc: nodesc ? nodesc : "",
      });
    },

    // GENERATE FORM URL
    formUrlGenerate() {
      if (this.route == "admin.login") {
        this.formUrl = "admin/login";
      } else if (this.route == "login") {
        this.formUrl = "student/login";
      }
    },
    // GENERATE FORM URL
    // REDIRECT DASHBOARD
    redirectDashboard() {
      if (this.route == "admin.login") {
        this.$router.push({ name: "admin.dashboard" });
      }
    },
    // REDIRECT DASHBOARD END
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div
    class="header"
    v-if="$route.name != 'admin.login' && $route.name != 'login'"
  >
    <div class="header-left">
      <a href="index.html" class="logo text-dark">
        <svg
          class="logo"
          viewBox="0 0 128 128"
          width="24"
          height="24"
          data-v-596b9dc5=""
        >
          <path
            fill="#42b883"
            d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
            data-v-596b9dc5=""
          ></path>
          <path
            fill="#35495e"
            d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
            data-v-596b9dc5=""
          ></path>
        </svg>
        <span class="fw-bold" style="font-size: 1.4rem; color: #42b883">
          VUE JS</span
        >
      </a>
      <a href="index.html" class="logo logo-small">
        <svg
          class="logo"
          viewBox="0 0 128 128"
          width="24"
          height="24"
          data-v-596b9dc5=""
        >
          <path
            fill="#42b883"
            d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
            data-v-596b9dc5=""
          ></path>
          <path
            fill="#35495e"
            d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
            data-v-596b9dc5=""
          ></path>
        </svg>
      </a>
    </div>

    <a href="javascript:void(0);" id="toggle_btn">
      <i class="fas fa-align-left"></i>
    </a>

    <div class="top-nav-search">
      <form>
        <input type="text" class="form-control" placeholder="Search here" />
        <button class="btn" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>

    <a class="mobile_btn" id="mobile_btn">
      <i class="fas fa-bars"></i>
    </a>

    <ul class="nav user-menu">
      <li class="nav-item dropdown has-arrow">
        <a
          href="blank-page.html#"
          class="dropdown-toggle nav-link"
          data-bs-toggle="dropdown"
        >
          <span class="user-img"
            ><img
              class="rounded-circle"
              src="img/profiles/avatar-01.jpg"
              width="31"
              alt="Ryan Taylor"
          /></span>
        </a>
        <div class="dropdown-menu">
          <div class="user-header">
            <div class="avatar avatar-sm">
              <img
                src="img/profiles/avatar-01.jpg"
                alt="User Image"
                class="avatar-img rounded-circle"
              />
            </div>
            <div class="user-text">
              <h6>Ryan Taylor</h6>
              <p class="text-muted mb-0">Administrator</p>
            </div>
          </div>
          <a class="dropdown-item" href="profile.html">My Profile</a>
          <a class="dropdown-item" href="login.html" @click.prevent="logout"
            >Logout</a
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("clearToken");
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped></style>

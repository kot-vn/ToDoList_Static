<template>
  <div class="account-pages my-5 pt-sm-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="bg-header py-4">
            <div class="app-name">To Do List</div>
          </div>
          <LoginView v-if="form === 'login'" />
          <RegisterView v-else />
          <AuthFooter></AuthFooter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import LoginView from "@/components/LoginView.vue";
import AuthFooter from "@/components/AuthFooter.vue";
import RegisterView from "@/components/RegisterView.vue";

export default {
  components: {
    LoginView,
    AuthFooter,
    RegisterView,
  },
  data() {
    return {};
  },
  computed: {
    ...mapFields("authStore", {
      form: "form",
    }),
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/styles/auth.scss";
</style>

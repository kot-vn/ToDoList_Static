<template>
  <div class="card overflow-hidden">
    <div class="card-body pt-0">
      <div class="form-title">Register</div>
      <div class="pt-2">
        <span>
          <form class="form-horizontal">
            <span>
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  type="text"
                  id="username"
                  v-model="username"
                  class="form-control"
                />
              </div>
            </span>
            <span>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  class="form-control"
                />
              </div>
            </span>
            <span>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  v-model="password"
                  class="form-control"
                />
              </div>
            </span>
            <span>
              <div class="form-group">
                <label for="re-password">Reenter Password</label>
                <input
                  type="password"
                  id="re-password"
                  v-model="rePassword"
                  class="form-control"
                />
              </div>
            </span>
            <div class="mt-3">
              <button class="btn btn-success btn-block mb-3">Submit</button>
            </div>
          </form>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapFields("authStore", {
      username: "username",
      email: "email",
      password: "password",
      rePassword: "rePassword",
    }),
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>

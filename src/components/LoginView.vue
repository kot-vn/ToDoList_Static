<template>
  <div class="card overflow-hidden">
    <div class="card-body pt-0">
      <div class="form-title">Login</div>
      <div class="pt-2">
        <span>
          <form class="form-horizontal">
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
            <div class="mt-3">
              <button class="btn btn-success btn-block mb-3">Login</button>
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
      email: "email",
      password: "password",
    }),
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>

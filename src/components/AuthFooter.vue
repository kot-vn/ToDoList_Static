<template>
  <div class="mt-5 text-center">
    <div>
      <p>
        Don't have an account?
        <a
          href="#"
          v-if="form === 'login'"
          class="font-weight-medium text-success"
          @click="form = 'register'"
        >
          Register here
        </a>
        <a
          href="#"
          v-else
          @click="form = 'login'"
          class="font-weight-medium text-success"
        >
          Login here
        </a>
      </p>
      <p></p>
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
      form: "form",
    }),
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>

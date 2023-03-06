<template>
  <div class="account-pages my-5 pt-sm-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="bg-header py-4">
            <div class="app-name">To Do List</div>
          </div>
          <div class="card overflow-hidden">
            <div class="card-body pt-0">
              <div class="form-title">Login</div>
              <div class="pt-2">
                <span>
                  <form class="form-horizontal">
                    <span>
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" class="form-control" />
                      </div>
                    </span>
                    <span>
                      <div class="form-group">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          class="form-control"
                        />
                      </div>
                    </span>
                    <div class="mt-3">
                      <button class="btn btn-success btn-block mb-3">
                        Login
                      </button>
                    </div>
                  </form>
                </span>
              </div>
            </div>
          </div>
          <div class="mt-5 text-center">
            <div>
              <p>
                Don't have an account?
                <a href="#" class="font-weight-medium text-success">
                  Register here
                </a>
              </p>
              <p></p>
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
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/auth.scss";
</style>

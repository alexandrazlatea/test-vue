<template>

    <!-- Option Panel -->

    <!-- Content area start -->
    <form @submit.prevent="handleLogin" v-if="status.loggedIn != true" >
        <div class="modal-container">
            <div class="modal fade" id="modalLoginForm"  v-if="status.loggedIn != true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog user-popup" role="document">
                    <div class="modal-content user-popup-modal-content">
                        <div class="modal-header text-center">
                            <h4 class="modal-title font-weight-bold">Login</h4>
                            <button type="button" class="close user-popup-header" data-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" v-model="username" name="username" class="form-control user-popup-input" :class="{ 'is-invalid': submitted && !username }" />
                            <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
                        </div>
                        <div class="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" v-model="password" name="password" class="form-control user-popup-input" :class="{ 'is-invalid': submitted && !password }" />
                            <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                            <div v-show="submitted && status.error" class="invalid-feedback">{{ status.error}}</div>
                        </div>
                        <div class="form-group user-popup-controls-container">
                            <button class="btn btn-deep-orange user-popup-control-btn">Login</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <a class="login-btn btn btn-default btn-rounded mb-4" id="login-btn" data-toggle="modal" data-target="#modalLoginForm"></a>
            </div>
        </div>
    </form>
    <!-- Content area end -->
</template>
<script>
    import { mapState, mapActions, mapMutations } from 'vuex';
    export default {
        name: 'Login',
        data(){
            return {
                username : "",
                password : "",
                submitted: false

            }
        },
        created() {
            console.log('intra aici')
//            this.logout();

        },
        mutations: {
            ...mapMutations('account', ['loginSuccess']),
            loginSuccess(state) {
                alert()
            }
        },

        getters() {
            console.log(this.status);
        },

        mounted() {
            this.openLogin()
        },
        watch: {
            status(){
               if (this.status.loggedIn) {
                   this.closeModal()
               }
            }
        },
        computed: {
            ...mapState('account', ['status']),
            currentLocation() { return this.$store.state.loggedIn },
        },
        created () {
            // reset login status
//            this.logout();
        },
        methods: {
            ...mapActions('account', ['login', 'logout']),
            openLogin() {
                document.querySelector('#login-btn').click()
            },
            handleLogin (e) {
                this.submitted = true;
                const { username, password } = this;
                if (username && password) {
                    this.login({ username, password })
                }
            },
            closeModal () {
                document.querySelector('.close').click()
            }

        }

    }
</script>

<style scopped>
.login-btn {
  display: none;
}
</style>
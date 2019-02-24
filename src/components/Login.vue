<template>

    <!-- Option Panel -->

    <!-- Content area start -->
    <form @submit.prevent="handleLogin" v-if="status.loggedIn != true" >
        <div class="modal-container">
            <div class="modal fade" id="modalLoginForm"  v-if="status.loggedIn != true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <h4 class="modal-title w-100 font-weight-bold">Login</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body mx-3">
                            <div class="md-form mb-5">
                                <label for="username">Username</label>
                                <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
                                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
                            </div>
                            <div class="md-form mb-5">
                                <label htmlFor="password">Password</label>
                                <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button class="btn btn-deep-orange">Login</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <a class=" register-btn btn btn-default btn-rounded mb-4" id="login-btn" data-toggle="modal" data-target="#modalLoginForm">Launch
                    Modal Register Form</a>
            </div>
        </div>
    </form>
    <!-- Content area end -->
</template>
<script>
    import { mapState, mapActions } from 'vuex';

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
        watch: {

            loggedIn() {
                console.log('The counter has changed!')
            }
        },
        getters() {
            console.log(this.status);
        },

        mounted() {
            this.openLogin()
        },
        computed: {
            ...mapState('account', ['status'])
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

        }

    }
</script>

<style scopped>
    .login-btn {
        display:none;
    }

</style>
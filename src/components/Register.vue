<template>

    <!-- Option Panel -->

    <!-- Content area start -->
    <form @submit.prevent="handleSubmit" >
        <div class="modal-container">
            <div  class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog user-popup" role="document">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <h4 class="modal-title font-weight-bold">Sign up</h4>
                            <button type="button" class="close user-popup-header" data-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" v-model="user.firstName" v-validate="'required'" name="firstName" class="form-control user-popup-input" :class="{ 'is-invalid': submitted && errors.has('firstName') }" />
                            <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">{{ errors.first('firstName') }}</div>
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" v-model="user.lastName" v-validate="'required'" name="lastName" class="form-control user-popup-input" :class="{ 'is-invalid': submitted && errors.has('lastName') }" />
                            <div v-if="submitted && errors.has('lastName')" class="invalid-feedback">{{ errors.first('lastName') }}</div>
                        </div>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" v-model="user.username" v-validate="'required'" name="username" class="form-control user-popup-input" :class="{ 'is-invalid': submitted && errors.has('username') }" />
                            <div v-if="submitted && errors.has('username')" class="invalid-feedback">{{ errors.first('username') }}</div>
                        </div>
                        <div class="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" v-model="user.password" v-validate="{ required: true, min: 6 }" name="password" class="form-control user-popup-input" :class="{ 'is-invalid': submitted && errors.has('password') }" />
                            <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
                            <div v-if="status.error" class="invalid-feedback ">{{ status.error }}</div>
                        </div>
                        <div class="form-group user-popup-controls-container">
                            <button class="btn btn-primary user-popup-control-btn" :disabled="status.registering">Register</button>
                            <img v-show="status.registering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            <button type="button" class="btn btn-link user-popup-control-text" data-dismiss="modal" aria-label="Close">
                                Cancel
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <a class=" register-btn btn btn-default btn-rounded mb-4" id="register-btn" data-toggle="modal" data-target="#modalRegisterForm"></a>
            </div>
        </div>
    </form>
    <!-- Content area end -->
</template>
<script>
    import { mapState, mapActions, mapMutations } from 'vuex'

    export default {
        name: 'Register',
        data () {
            return {
                user: {
                    firstName: '',
                    lastName: '',
                    username: '',
                    password: ''
                },
                submitted: false
            }
        },
        computed: {
            ...mapState('account', ['status'])
        },
        created() {
          if (status.loggedIn == true) {
              console.log('created')
          }
          console.log('intra aici')
            this.logout();

        },
        watch: {
            status(){
                if (this.status.loggedIn) {
                    this.closeModal()
                }
                if (this.status.error) {
                    console.log(this.status.error, 'errpr')
                }
            }
        },
        mounted() {
            if (status.loggedIn == true) {
                console.log('created')
            }
            this.openRegistration()
        },
        created () {
            // reset login status
            this.logout();
        },
        methods: {
            ...mapActions('account', ['login', 'logout']),
            openRegistration() {
                document.querySelector('#register-btn').click()
            },
            ...mapActions('account', ['register']),
            handleSubmit(e) {
                this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.register(this.user);
                    }
                });
            },
            closeModal () {
                console.log('intra')
                document.querySelector('.close').click()
            }
        }

    }
</script>

<style scopped>
    .invalid-feedback {
        display: block;
    }
    .register-btn {
        display:none;
    }
    .modal-content {
        padding: 24px;
    }

</style>
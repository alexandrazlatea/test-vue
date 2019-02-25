<template>
    <div class="top-container">
        <div class="top">
            <div class="container">
                <div class="row">
                    <!-- /.col-md-6 -->
                    <div class="col-lg-6 col-sm-12 mobile-center">
                        <div class="wrap-top">

                            <div class="flat-top flat-language">
                                <ul class="unstyled">
                                    <li v-if="status.loggedIn != true" class="pointer-cursor user-control" @click="loginClicked">
                                        <i class="fa fa-user-circle"></i>
                                        <span>Log In</span>
                                    </li>
                                    <li v-if="status.loggedIn != true" class="pointer-cursor user-control" @click="register">
                                        <i class="fa fa-user-plus"></i>
                                        <span>Sign Up</span>
                                    </li>
                                    <li v-if="status.loggedIn == true" class="pointer-cursor user-control" @click="logoutClicked">
                                        <span>Logout</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container -->

        </div>
        <div class="register" v-if="showRegister">
            <Register ref="register"></Register>
        </div>
        <div class="login" v-if="showLogin">
            <Login ref="openLogin"></Login>
        </div>
    </div>


</template>

<script>
    import Register from './Register.vue';
    import Login from './Login.vue';
    import { mapState, mapActions } from 'vuex'


    export default {
        name: 'Top',
        data() {
            return {
                showRegister: null,
                showLogin: null,
            }
        },
        components: {
            Register,
            Login
        },
        computed: {
            ...mapState('account', ['status'])
        },
        methods: {
            ...mapActions('account', ['logout']),
            loginClicked() {
                this.showLogin = true;
                if (this.$refs['openLogin']) {
                    this.$refs['openLogin'].openLogin();
                }
            },
            register() {
                this.showRegister = true;
                if (this.$refs['register']) {
                    this.$refs['register'].openRegistration();
                }
            },
            logoutClicked() {
                this.logout()
            }
        }
    };

</script>

<style>
    .top {
        padding: 8px 0px;
        background-color: #edeff1;
        color: #28293a;
        font-size: 14px;
    }

    .flat-top {
        float: right;
    }

    /* Flat Socials
    -------------------------------------------------------------- */
    .social-links li {
        display: inline-block;
        padding: 0px 6px;
    }

    .social-links li:last-child {
        padding-right: 0;
    }

    /* Flat Language
    -------------------------------------------------------------- */
    .flat-language {
        width: 62%;
    }

    .flat-language .current a {
        padding: 0 14px 0 2px;
    }

    .flat-language .current > a:after {
        content: "\f107";
        right: -0px;
        top: -5px;
    }

    .flat-language > ul > li > ul {
        position: absolute;
        left: 0;
        top: 100%;
        width: 130px;
        margin-top: 15px;
        padding: 5px 0px;
        background-color: #646a7c;
        z-index: 9999;
    }

    .flat-language .current:hover ul {
        margin-top: 0px;
    }

    .flat-language > ul > li > ul li {
        padding: 1px 0 2px 15px;
        line-height: 24px;
    }

    .flat-language > ul > li > ul li a {
        display: block;
    }

    .flat-language ul li {
        display: inline-block;
        padding: 0 10px;
    }

    /* Flat-Infomation
    -------------------------------------------------------------- */
    .flat-information li {
        line-height: 30px;
        font-size: 14px;
        padding-left: 2px;
    }

    .flat-information li i {
        margin-right: 10px;
    }

    /* educare-info Header.vue
    -------------------------------------------------------------- */
    .wrap-educare-info-header {
        padding: 37px 0px 30px;
    }

    .wrap-educare-info-header .educare-info-section {
        float: right;
        margin: 0 0 0 48px;
    }

    .educare-info-section .info-icon {
        float: left;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin: 3px 20px 0px 0px;
        box-shadow: 0 0 14px 1px #eee;
        color: #86bc42;
        border: 1px solid #ebebeb;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .educare-info-section .info-icon i {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    .educare-info-section .info-text {
        overflow: hidden;
    }

    .educare-info-section .info-text h6 {
        margin-bottom: 0;
    }

    .educare-info-section .info-text p {
        font-size: 14px;
    }

    /* educare-info phone */
    .educare-info.educare-info-phone span {
        font-size: 18px;
        font-weight: 700;
    }

    .educare-info.educare-info-phone i {
        font-size: 16px;
        padding-right: 8px;
    }

    .educare-search {
        position: absolute;
        right: 0px;
        top: 100%;
        width: 320px;
    }

    .educare-search.show {
        z-index: 9999;
        top: 100%;
    }

    .show-search.active i:before {
        content: "\f00d";
    }

    .educare-search #searchform-all #input-search {
        width: 100%;
        padding: 0 10px 0 20px;
        margin-bottom: 0;
        height: 45px;
    }

    .educare-search #searchform-all #searchsubmit {
        position: absolute;
        right: 0px;
        top: 0px;
        cursor: pointer;
        background: transparent;
        padding: 3px;
        border: none;
        opacity: 0.3;
        text-align: center;
        font-size: 0;
        font-weight: 700;
        /*background-image: url(../images/icon/arrow.png);*/
        background-repeat: no-repeat;
        background-position: center;
        width: 55px;
        height: 45px;
    }

    .educare-search #searchform-all #searchsubmit:hover {
        opacity: 1;
    }
</style>
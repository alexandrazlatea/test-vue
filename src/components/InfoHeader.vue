<template>
    <div class="header educare-info-header clearfix">
        <div class="container">
            <div class="header-wrap clearfix">
                <div class="row">
                    <div class="col-lg-3">
                        <div id="logo" class="logo">  <img src="../../public/images/logo.png" >  </div>
                        <!-- /.logo -->

                    </div>
                    <div class="col-lg-9">
                        <div class="wrap-educare-info-header clearfix">
                            <aside class="educare-info educare-info-section">
                                <div class="btn-click"> <a href="#" class="flat-button"></a> </div>
                            </aside>
                            <aside class="educare-info educare-info-section">
                                <div class="texteducare-info clearfix">
                                    <div class="info-icon"> <i class="fa fa-map-marker"></i> </div>
                                    <div class="info-text">
                                        <h6>40 Paris Sreet 154/2</h6>
                                        <p>France City, France</p>
                                    </div>
                                </div>
                            </aside>
                            <aside class="educare-info educare-info-section">
                                <div class="texteducare-info clearfix">
                                    <div class="info-icon"> <i class="fa fa-phone"></i> </div>
                                    <div class="info-text">
                                        <h6>321-2145-2154</h6>
                                        <p>admin@yourdomain.com</p>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
            </div>
            <!-- /.header-wrap -->

        </div>
    </div>
</template>

<script>
    export default {
        name: 'InfoHeader'
    }
</script>

<style>
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
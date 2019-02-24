<template>
    <div id="banner-style6" class="banner-style6 padding">
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-sm-1 col-lg-2"></div>
                    <div class="col-xs-12 col-sm-10 col-lg-8 text-center">
                        <h2 class="text-uppercase">learn from <span class="color_red">the best</span></h2>

                        <p class="heading_space">Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing
                            vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. </p>
                    </div>
                    <div class="col-sm-1 col-lg-2"></div>
                </div>
                <div class="row clearfix">
                    <div class="col-md-12 col-sm-12">
                        <div class="team_carousel1 owl-carousel">

                            <!--Staff Member-->
                            <div class="staff-member">
                                <div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <figure class="image-box"><img src="../../../public/images/team_3.jpg" alt="" />
                                        <div class="overlay-box">
                                            <ul class="social-icon-two">
                                                <li><a href="#"><span class="fa fa-facebook-f"></span></a></li>
                                                <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                                                <li><a href="#"><span class="fa fa-pinterest-p"></span></a></li>
                                            </ul>
                                        </div>
                                    </figure>
                                    <div class="lower-content">
                                        <h3><a href="#">JENNY AARON</a></h3>
                                        <div class="designation">Teacher</div>
                                    </div>
                                </div>
                            </div>

                            <!--Staff Member-->
                            <div class="staff-member">
                                <div class="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <figure class="image-box"><img src="../../../public/images/team_4.jpg" alt="" />
                                        <div class="overlay-box">
                                            <ul class="social-icon-two">
                                                <li><a href="#"><span class="fa fa-facebook-f"></span></a></li>
                                                <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                                                <li><a href="#"><span class="fa fa-pinterest-p"></span></a></li>
                                            </ul>
                                        </div>
                                    </figure>
                                    <div class="lower-content">
                                        <h3><a href="#">STEVEN FINCH</a></h3>
                                        <div class="designation">Teacher</div>
                                    </div>
                                </div>
                            </div>

                            <!--Staff Member-->
                            <div class="staff-member">
                                <div class="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <figure class="image-box"><img src="../../../public/images/team-1.jpg" alt="" />
                                        <div class="overlay-box">
                                            <ul class="social-icon-two">
                                                <li><a href="#"><span class="fa fa-facebook-f"></span></a></li>
                                                <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                                                <li><a href="#"><span class="fa fa-pinterest-p"></span></a></li>
                                            </ul>
                                        </div>
                                    </figure>
                                    <div class="lower-content">
                                        <h3><a href="#">GARRY MILLER</a></h3>
                                        <div class="designation">Teacher</div>
                                    </div>
                                </div>
                            </div>

                            <!--Staff Member-->
                            <div class="staff-member">
                                <div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <figure class="image-box" ><img src="../../../public/images/team_3.jpg" alt="" />
                                        <div class="overlay-box">
                                            <ul class="social-icon-two">
                                                <li><a href="#"><span class="fa fa-facebook-f"></span></a></li>
                                                <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                                                <li><a href="#"><span class="fa fa-pinterest-p"></span></a></li>
                                            </ul>
                                        </div>
                                    </figure>
                                    <div class="lower-content">
                                        <h3><a href="#">JENNY AARON</a></h3>
                                        <div class="designation">Teacher</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--/col-->
            </div>
        </div>
    </div>

</template>
<script>

    export default {
        name: 'LearnFromTheBest',
    }
</script>
<style>

    .banner-style6 .staff-member {
        position: relative;
    }
    .banner-style6 .staff-member .inner-box {
        position: relative;
    }
    .banner-style6 .staff-member .inner-box .image-box {
        position: relative;
    }
    .banner-style6 .staff-member .inner-box .image-box img {
        width: 100%;
        display: block;
    }
    .banner-style6 .staff-member .inner-box .image-box .overlay-box {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        text-align: center;
        opacity: 0;
        background-color: rgba(255, 255, 255, 0.85);
        transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        -ms-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
    }
    .banner-style6 .staff-member .inner-box:hover .overlay-box {
        opacity: 1;
    }
    .banner-style6 .staff-member .inner-box .image-box .overlay-box .social-icon-two {
        position: absolute;
        left: 0px;
        top: 50%;
        margin-top: -25px;
        width: 100%;
    }
    .banner-style6 .staff-member .inner-box .lower-content {
        position: relative;
        text-align: center;
        padding: 15px 0px 0px;
    }
    .banner-style6 .staff-member .inner-box .lower-content h3 a {
        position: relative;
        color: #1c1c1c;
        font-size: 16px;
        font-weight: 700;
        transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        -ms-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
    }
    .banner-style6 .staff-member .inner-box .lower-content h3 a:hover {
        color: #00adef;
    }
    .banner-style6 .staff-member .inner-box .lower-content .designation {
        position: relative;
        color: #777777;
    }
    .banner-style6 .social-icon-two {
        position: relative;
    }
    .banner-style6 .social-icon-two li {
        position: relative;
        display: inline-block;
        margin: 0px 4px;
    }
    .banner-style6 .social-icon-two a {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 40px;
        color: #443f45;
        font-size: 16px;
        text-align: center;
        line-height: 38px;
        border: 1px solid #443f45;
        -webkit-transition: all 300ms ease;
        -ms-transition: all 300ms ease;
        -o-transition: all 300ms ease;
        -moz-transition: all 300ms ease;
        transition: all 300ms ease;
    }
    .banner-style6 .social-icon-two a:hover {
        color: #00adef;
        border-color: #00adef;
    }
    .banner-style6 .social-icon-two a span {
        line-height: 38px;
    }
    .banner-style6 .owl-nav {
        text-align: center;
        max-width: 100px;
        margin: 20px auto 0 auto;
        position: relative;
        opacity: 1;
    }
    .banner-style6 .owl-prev i, .banner-style6 .owl-next i {
        font-size: 20px;
        color: #fff;
    }
    .banner-style6 .owl-prev, .banner-style6 .owl-next {
        background: #00adef;
        padding: 12px 15px;
    }
    .team_carousel1 {
        margin: 40px 0 0 0;
    }
    .staff-member h3 {
        margin: 0;
    }
</style>
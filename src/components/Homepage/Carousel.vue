<template>
    <div class="slider_section header_height">
        <ul id="main-slider" class="owl-carousel main_slider">
            <li class="main_slide" style="background-image: url(./images/slide-new2.jpg);">
                <div class="display-table">
                    <div class="table-cell">
                        <div class="container">
                            <div class="slider_content">
                                <h3>You only have to know one thing</h3>
                                <h1>You can learn anything</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br>
                                    It has survived not only five centuries.</p>
                                <div class="educare-btn-style1">
                                    <div class="educare-btn-effect"></div>
                                    <a href="#"> Start now ! </a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="main_slide" style="background-image: url(./images/slide-new2.jpg);">
                <div class="display-table">
                    <div class="table-cell">
                        <div class="container">
                            <div class="slider_content">
                                <h3>You only have to know one thing</h3>
                                <h1>You can learn anything</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br>
                                    It has survived not only five centuries.</p>
                                <div class="educare-btn-style1">
                                    <div class="educare-btn-effect"></div>
                                    <a href="#"> Start now ! </a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <!-- /.slider_section -->
</template>
<script>
export default {
    name: 'Carousel'
}
</script>
<style>
    .slider_section .slider_content {
    }
    .slider_section .slider_content h1 {
    }
    .slider_section .slider_content h1 p {
    }
    .main_slider {
    }
    .main_slider .main_slide {
        height: 620px;
        background-repeat: no-repeat;
        background-position: center center;
        -webkit-background-size: cover;
        background-size: cover;
    }
    .main_slider .owl-nav {
    }
    .main_slider .owl-nav div {
        background-color: #86bc42;
        color: #ddd;
        width: 44px;
        height: 75px;
        font-size: 20px;
        text-align: center;
        line-height: 75px;
        position: absolute;
        left: 0;
        top: calc(50% - 40px);
        transition: all 0.5s ease-in-out;
    }
    .main_slider .owl-nav div:hover {
        background-color: #86bc42;
        color: #fff;
        transition: all 0.5s ease-in-out;
    }
    .main_slider .owl-nav div.owl-next {
        left: auto;
        right: 0;
    }
    .main_slider .owl-dots {
        width: 100%;
        display: block;
        text-align: center;
        position: absolute;
        left: 0;
        bottom: 25px;
    }
    .main_slider .owl-dots div {
        border: 2px solid #222;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        display: inline-block;
        margin: 0 3px;
        transition: all 0.5s ease-in-out;
    }
    .main_slider .owl-dots div.active {
        border: 2px solid #222;
        background-color: #222;
        transition: all 0.5s ease-in-out;
    }
    /* ==========================================================================
       Banner Section
       ========================================================================== */
    .banner_section {
        background-repeat: no-repeat;
        background-position: center center;
        -webkit-background-size: cover;
        background-size: cover;
        height: 400px;
        background-attachment: scroll;
    }
    .banner_content {
        padding: 100px 0;
    }
    .banner_content h2 {
        font-weight: 800;
        font-size: 45px;
    }
    .main_slider .owl-nav div {
        display: none;
    }
    .slider_section :hover .owl-nav div {
        display: block;
    }
    .display-table {
        width: 100%;
        height: 100%;
        display: table;
    }
    .table-cell {
        display: table-cell;
        vertical-align: middle;
    }
    .slider_content {
        text-align: center;
    }
    .slider_content h3 {
        color: #fff;
    }
    .slider_content h1 {
        text-transform: uppercase;
        color: #fff;
        font-size: 60px;
    }
    .slider_content p {
        color: #fff;
        font-size: 18px;
        margin: 30px 0 0 0;
        line-height: 22px;
    }
    /* feature section  */
    .educare_fearures_section {
        width: 100%;
        padding: 140px 0px 140px 0px;
    }
    .educare_fearures_section a {
        color: #fff;
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        border-radius: 25px;
        white-space: nowrap;
        transition: all 0.3s ease;
    }
    .educare_fearures_section .educare-btn-style1 {
        margin: 0;
    }
    .educare_fearures_section .educare-btn-style1 a {
        font-size: 14px;
    }
</style>
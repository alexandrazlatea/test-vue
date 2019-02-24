<template>
    <div id="about-sev" class="padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-sm-12 col-xs-12">
                    <div class="row">
                        <div class="col-lg-12 bottom40">
                            <h2 class="text-uppercase">About EduCare<span class="color_red"> Online Courses</span></h2>
                            <div class="line_1"></div>
                            <div class="line_2"></div>
                            <div class="line_3"></div>
                        </div>
                    </div>
                    <div class="about-sev-tag">
                        <h4>A little about us and a breif history of how we started.</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan when an unknown printer took a galley of type and scramble. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <ul>
                            <li><i class="fa fa-check-square" aria-hidden="true"></i> Pleasure and praising pain was born</li>
                            <li><i class="fa fa-check-square" aria-hidden="true"></i> The great explorer of the truth</li>
                            <li><i class="fa fa-check-square" aria-hidden="true"></i> Anyone who loves or pursues or desires</li>
                            <li><i class="fa fa-check-square" aria-hidden="true"></i> The printing and typesetting industry.</li>
                        </ul>
                        <div class="founder-text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            <h3>- John Deo, Founder.</h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-sm-12 col-xs-12">
                    <div class="about-sev-img" style="background-image: url(../../images/about.png);"> <img :src="image_about" alt="image"> </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import image_about from "../../../public/images/about.png";
    export default {
        name: 'About',
        data: function () {
            return {
                image_about: "../../../public/images/about.png",
            }
        }
    }
</script>

<style>
    .about-sev-img img {
        width: 100%;
    }
    .about-sev-tag h4 {
        font-style: italic;
        font-weight: normal;
        margin-bottom: 15px;
        font-size: 20px;
    }
    .about-sev-tag p {
        padding-bottom: 15px;
        line-height: 24px;
    }
    .about-sev-tag ul {
        margin-bottom: 15px;
    }
    .about-sev-tag ul li {
        font-weight: 400;
        font-style: italic;
        line-height: 32px;
        display: inline-block;
        width: 48%;
    }
    .about-sev-tag ul li i {
        font-size: 16px;
        display: inline-block;
        padding-right: 15px;
    }
    .about-sev-tag .founder-text {
        padding-left: 40px;
        position: relative;
        border-left: 2px solid #ddd;
        padding-top: 32px;
        padding-bottom: 0px;
    }
    .about-sev-tag .founder-text::before {
        position: absolute;
        top: 0;
        left: 10px;
        font-family: "FontAwesome";
        content: "\f10d";
        color: #f0f0f0;
        font-size: 22px;
    }
    .about-sev-tag .founder-text p {
        font-size: 16px;
        font-weight: 300;
        line-height: 28px;
        font-style: italic;
        margin: 0;
    }
    .about-sev-tag .founder-text h3 {
        font-size: 18px;
        font-weight: 400;
        margin: 0;
    }
    .about-sev-tag h4 {
        color: #86bc42;
    }
    .about-sev-tag ul li i {
        color: #86bc42;
    }
    .about-sev-tag .founder-text h3 {
        color: #86bc42;
    }
    .color_red {
        color: #86bc42;
    }
</style>
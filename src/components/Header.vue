<template>
    <header id="header" class="header header-main educare-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="educare-header-wrapper">
                        <div class="nav-wrap clearfix">
                            <nav id="mainnav" class="mainnav">
                                <ul class="menu">
                                    <li class="active"> <a href="index.html">Home</a>
                                        <!--<ul class="submenu">-->
                                            <!--<li><a href="index.html">Homepage Style 01</a></li>-->
                                            <!--<li><a href="index-v2.html">Homepage Style 02</a></li>-->
                                            <!--<li><a href="index-v3.html">Homepage Style 03</a></li>-->
                                            <!--<li><a href="index-v4.html">Homepage Style 04</a></li>-->
                                        <!--</ul>-->
                                        <!-- /.submenu -->
                                    </li>
                                    <li><a href="about-us.html">About Us</a>
                                        <!--<ul class="submenu">-->
                                            <!--<li><a href="about.html">About Us 01</a></li>-->
                                            <!--<li><a href="about-v2.html">About Us 02</a></li>-->
                                        <!--</ul>-->
                                        <!-- /.submenu -->

                                    </li>
                                    <li><a href="courses.html">Courses</a>
                                        <!--<ul class="submenu">-->
                                            <!--<li><a href="courses.html">Courses Style 01</a></li>-->
                                            <!--<li><a href="courses-v2.html">Courses Style 02</a></li>-->
                                            <!--<li><a href="courses-details.html">Courses Details</a></li>-->
                                        <!--</ul>-->
                                        <!-- /.submenu -->
                                    </li>
                                    <li><a href="events-v1.html">Events</a>
                                        <ul class="submenu">                      <li><a href="events-v1.html">Events </a> </li>
                                            <li><a href="events-details.html">Event Details</a></li>
                                        </ul>
                                        <!-- /.submenu -->
                                    </li>
                                    <li><a href="team-v1.html">pages</a>
                                        <ul class="submenu">
                                            <li><a href="team-v1.html">Our Team Style 01</a> </li>
                                            <li><a href="faq.html">FAQ</a> </li>
                                            <li><a href="pricing.html">Pricing</a> </li>
                                            <li><a href="page-404.html">Error 404</a> </li>
                                        </ul>
                                        <!-- /.submenu -->
                                    </li>
                                    <li> <a href="gallery.html">Gallery</a>
                                        <ul class="submenu">
                                            <li><a href="gallery.html">Gallery 2 Column</a> </li>
                                            <li><a href="gallery-v2.html">Gallery 3 Column</a> </li>
                                            <li><a href="gallery-v3.html">Gallery 4 Column</a> </li>
                                            <li><a href="gallery-v4.html">Gallery Full Width</a> </li>
                                        </ul>
                                        <!-- /.submenu -->
                                    </li>
                                    <li><a href="news-list.html">News</a>
                                        <ul class="submenu">
                                            <li><a href="news-grid.html">News List</a> </li>
                                            <li><a href="news-details.html">News Details</a></li>
                                        </ul>
                                        <!-- /.submenu -->
                                    </li>
                                    <li><a href="contact.html">Contact</a>
                                        <!--<ul class="submenu right">-->
                                            <!--<li><a href="contact.html">Contact Style 01</a></li>-->
                                            <!--<li><a href="contact-v2.html">Contact Style 02</a></li>-->
                                        <!--</ul>-->
                                        <!-- /.submenu -->
                                    </li>
                                </ul>
                                <!-- /.menu -->
                            </nav>
                            <!-- /.mainnav -->
                            <div class="educare-search">
                                <form action="#" id="searchform-all" method="get">
                                    <div>
                                        <input type="text" id="input-search" class="sss" placeholder="Search...">
                                        <input type="submit" id="searchsubmit">
                                    </div>
                                </form>
                            </div>
                            <ul class="menu educare-ex-nav">
                                <li id="s" class="show-search"> <a href="#search" class="flat-search"><i class="fa fa-search"></i></a> </li>
                                <li class="shopping-cart"> <a href="#"> <i class="fa fa-shopping-cart"></i> </a>
                                    <div class="educare-shoping-box">
                                        <div class="shopping-cart-section">
                                            <ul class="cart_list product_list_educare-info margin-bottom-20">
                                                <li class="mini_cart_item"> no product </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="educare-btn-menu"> <span></span> </div>
                            <!-- //mobile menu button -->
                        </div>
                        <!-- /.nav-wrap -->

                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style>
    #header {
    z-index: 999;
    }
    .header .logo {
    margin: 20px 0 0 0;
    }
    .header.header-backgroundf61 {
    background-color: #1c0f61;
    }
    /* Header.vue Fix */
    .header.downscrolled {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 999;
    box-shadow: 0px 10px 27px 0px rgba(0, 0, 0, 0.15);
    }
    .header-absolute.downscrolled {
    background-color: #fff
    }
    .header.downscrolled #mainnav.style2 > ul > li > a, .header.downscrolled .educare-ex-nav.style2 li a {
    line-height: 60px;
    }
    .header.header-style2.downscrolled .logo, .header.header-style4.downscrolled .logo {
    margin-top: 15px;
    }
    .downscrolled .margin-top36 {
    margin-top: 19px;
    }
    .downscrolled .margin-top26 {
    margin-top: 6px;
    }
    .header.header-style3.downscrolled .logo {
    margin: 15px 0 0 21px;
    }
    .header-style3.downscrolled .btn-click.style2 .flat-button {
    padding: 17px 28px 19px 28px;
    }
    /* Menu Extra */
    .menu.educare-ex-nav li a {
    padding: 0px 12px;
    display: block;
    }
    .menu.educare-ex-nav li:last-child a {
    padding-right: 2px;
    }
    /* Shopping-Cart
    -------------------------------------------------------------- */
    .shopping-cart .educare-shoping-box {
    position: absolute;
    width: 300px;
    right: 0;
    top: 120%;
    padding: 40px 30px 20px 30px;
    z-index: 9999;
    text-align: left;
    }
    .shopping-cart:hover .educare-shoping-box {
    top: 100%;
    }
    /* Navigation */
    .nav-wrap .mainnav {
    float: left;
    }
    .menu.educare-ex-nav {
    padding-left: 20px;
    float: right;
    }
    .menu.educare-ex-nav > li {
    display: inline-block;
    font-size: 16px;
    }
    #mainnav > ul {
    text-align: right;
    }
    #mainnav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    }
    #mainnav > ul > li {
    display: inline-block;
    margin-right: -5px;
    }
    #mainnav > ul > li > a {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    display: block;
    }
    #mainnav > ul > li > a, .educare-ex-nav li a {
    padding: 0 25px 0px 30px;
    line-height: 60px;
    }
    #mainnav > ul > li:nth-child(4) > a {
    padding: 0px 28px 0px 30px;
    }
</style>
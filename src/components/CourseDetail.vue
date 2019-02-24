<template>
<div v-if="course">
    <div class="container">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe classs="embed-responsive-item" :src="course.video"></iframe>
        </div>
        <div class="row section-content">
            <div class="col-sm-8">
                <div class="blog-detail-content pb20">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</h3>
                    <div class="blog-detail-meta pb30">
                        <ul class="meta">
                            <li>26 April 2018 <span class="ml10">/</span></li>
                            <li class="ml10">by<a class="black" href="#"> Smith</a><span class="ml10">/</span></li>
                            <li class="ml10">Teacher</li>
                        </ul>
                    </div>
                    <!-- / blog-detail-meta-->
                    <div class="blog-detail-text pb30">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>

                    <div class="blog-detail-text pb20">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <!-- /blog-text -->
                    <div class="quate-text pb20">
                        <blockquote> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco . </blockquote>
                    </div>
                    <div class="blog-detail-text pt20 ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                    <!-- /blog-text -->

                </div>
                <!-- /blog-detail-content -->

                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item"> <a class="nav-link active" href="#profile" role="tab" data-toggle="tab"> Fun at School</a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#buzz" role="tab" data-toggle="tab">Organic Food</a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#references" role="tab" data-toggle="tab">Laboratories</a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#successful" role="tab" data-toggle="tab">Successful Students</a> </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane fade in active" id="profile">
                        <div class="blog-detail-text pb20">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div class="blog-detail-text pb20">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="buzz">
                        <div class="blog-detail-text pb20">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="references">
                        <div class="blog-detail-text pb20">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div class="blog-detail-text pb20">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="successful">
                        <div class="blog-detail-text pb20">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>

                <!-- /comment-area -->
            </div>
            <!-- /col-md-8 -->

            <div class="col-sm-4">
                <div class="course-widget-price">
                    <h4 class="course-title">COURSE FEATURES</h4>
                    <ul>
                        <li> <i class="fa fa-clock-o" aria-hidden="true"></i> <span>Starts</span> <span class="time">April 01, 2018</span> </li>
                        <li> <i class="fa fa-exclamation-circle" aria-hidden="true"></i> <span>Duration</span> <span class="time">5 Months</span> </li>
                        <li> <i class="fa fa-leanpub" aria-hidden="true"></i> <span>Class Duration</span> <span class="time">10:00 - 01:00</span> </li>
                        <li> <i class="fa fa-graduation-cap" aria-hidden="true"></i> <span>Institution</span> <span class="time">Educare University</span> </li>
                        <li> <i class="fa fa-user-plus" aria-hidden="true"></i> <span>Seats Available</span> <span class="time">25 Student</span> </li>
                        <li>  <i class="fa fa-th-list" aria-hidden="true"></i> <span>Level</span> <span class="time">All level</span> </li>
                    </ul>
                    <h5 class="bt-course">Course Price: <span>$500.00</span></h5>
                    <div class="educare-btn-style1">
                        <div class="educare-btn-effect"></div>
                        <a href="#"> ENROLL COURSE </a> </div>
                </div>
                <section class="style2 style2_right">
                    <div class="col-md-12 col-sm-12 col-xs-12 right_team">
                        <div class="team_common">
                            <div class="member_img pos_relative"><a href="#"><img :src="team_1" alt="member image"></a> </div>
                            <div class="member_info text-center pos_relative"><a href="#" class="d_inline fw_600">John Smith</a><span class="d_block">Teacher</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <div class="hoverlay">
                                    <ul>
                                        <li><a href="#" title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#" title="Vimeo" target="_blank"><i class="fa fa-vimeo"></i></a></li>
                                        <li><a href="#" title="Google-plus" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="course-widget-price ">
                    <h4 class="course-title">Categories</h4>
                    <div class="categories-list right_cate_list">
                        <ul class="categories-list-item">
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Template</a></li>
                            <li><a href="#">Photography</a></li>
                            <li><a href="#">Development</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /col-md-4 -->
        </div>
    </div>
</div>
</template>
<script>
   export default {
       name: 'CourseDetail',
       props: ['course'],
       data: function() {
           return {
               team_1: "../../src/images/team-1.jpg",
           }
       }
   }
</script>
<style>

</style>
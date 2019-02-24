<template>
    <div class="col-lg-4 col-sm-6 col-xs-12">
        <div class="imageBox">
            <div class="productImage clearfix" @click="onCourseSelect"><img :src="thumbnailUrl" alt="Image"> <span class="sticker"><i class="fa fa-clock-o" aria-hidden="true"></i>{{ course.duration }}</span> </div>
            <div class="productCaption clearfix">
                <h3><a href="single-course-right-sidebar.html">{{ course.name }}</a></h3>
                <div class="product-meta"> <span class="author">by: {{ course.teacher }}</span> </div>
                <div class="rating"> <span class="rating-star"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> </span> <span class="rating-review">(20 Reviews)</span> </div>
                <div class="caption-bottom">
                    <div class="user"> <i class="fa fa-user-o" aria-hidden="true"></i> <span class="course-user">{{ course.users_enrolled }} <br>
                  Enroled</span> </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CourseListItem',
        props: ['course'],
        computed: {
            thumbnailUrl() {
                return this.course.thumbnail_url
            }
        },
        methods: {
            onCourseSelect() {
               this.$emit ('courseSelect', this.course)
            }
        }
    }
</script>
<style scopped>

</style>
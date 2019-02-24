<template>
    <div class="container" v-if="courses">
        <div class="row">
            <div class="col-sm-1 col-lg-2"></div>
            <div class="col-xs-12 col-sm-10 col-lg-8 text-center">
                <h2 class="text-uppercase">Popular <span class="color_red">Courses</span></h2>

            </div>
            <div class="col-sm-1 col-lg-2"></div>
        </div>
        <div class="col-lg-12">
            <div class="row">
            <CourseListItem
                        v-for="course in courses"
                        :course="course"
                        @courseSelect="onCourseSelect"
                >
                </CourseListItem>
            </div>
        </div>
    </div>
</template>
<script>
    import CourseListItem from './CourseListItem.vue'
    export default {
       name: 'CourseList',
       components: {
           CourseListItem
       },
       props: ['courses'],
        methods: {
            onCourseSelect(course) {
                this.$emit('courseSelect', course)
            }
        }
    }
</script>
<style>

</style>
<template >
    <div v-if="selectedCourse == null " >
        <Top></Top>
        <InfoHeader></InfoHeader>
        <Header></Header>
        <Carousel></Carousel>
        <About></About>
        <LearnFromTheBest></LearnFromTheBest>
        <!--<SearchBar @termChange="onTermChange"></SearchBar>-->
        <CourseList @courseSelect="onCourseSelect" :courses="courses"></CourseList>
    </div>

    <div  v-else>
        <Top></Top>
        <InfoHeader></InfoHeader>
        <Header></Header>
        <!--<Carousel></Carousel>-->
        <CourseDetail :course="selectedCourse"></CourseDetail>
    </div>
</template>

<script>
    import axios from 'axios'
    import SearchBar from '../components/SearchBar.vue';
    import Top from '../components/Top.vue';
    import InfoHeader from '../components/InfoHeader.vue'
    import Carousel from '../components/Homepage/Carousel.vue'
    import About from '../components/Homepage/About.vue'
    import LearnFromTheBest from '../components/Homepage/LearnFromTheBest.vue'
    import CourseList from '../components/CourseList.vue'
    import Header from '../components/Header.vue'
    import CourseDetail from '../components/CourseDetail.vue'
    import ApiCourses from '../_store/courses';
    import { mapState, mapActions } from 'vuex'

export default {
    name: "HomePage",
    data() {
        return { courses: [], selectedCourse: null };
    },
    components: {
        Top,
        InfoHeader,
        Header,
        Carousel,
        About,
        LearnFromTheBest,
//        SearchBar,
        CourseList,
        CourseDetail
    },
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all
        })
    },
    created () {
        this.getAllUsers();
        ApiCourses.getCourses()
            .then(course => {
                console.log(course, '')
                this.courses = course
            })
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        }),
        onCourseSelect(course) {
            this.selectedCourse = course;
        },
    }
};
</script>
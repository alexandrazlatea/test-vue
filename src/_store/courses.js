import axios from 'axios';

export default {
    getCourses () {
        return axios.get('../../public/data/courses.json').then(response => {
            return response.data;
    })
        ;
    }
}
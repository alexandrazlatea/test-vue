import config from 'config';
import axios from 'axios';
import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(username, password) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
        body: {username: username, password: password}
    };

    return axios.post('https://mylearningservice.gear.host/RESTMyLearning.svc/userlogin', requestOptions.body)
        .then(user => {
        // login successful if there's a jwt token in the response
        user = JSON.parse(user.data['LoginUserResult']);
        if (user && user['0'] && user['0'].Token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user['0']));
        } else {
            return Promise.reject(user.status);
        }

        return user;
    });
}

function logout() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        axios.defaults.headers.common['Authorization'] = user.token;
        // remove user from local storage to log user out
        return axios.post(`https://mylearningservice.gear.host/RESTMyLearning.svc/userlogout`, user)
            .then(response_user => {
            localStorage.removeItem('user');

    });
    }


}

function register(user) {

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Max-Age": "1728000"

        }
    };
    const requestOptions = {
        method: 'POST',
        headers: axiosConfig,
        data: user
    }

    return axios.post(`https://mylearningservice.gear.host/RESTMyLearning.svc/users/add`, user)
        .then(response_user => {
        response_user = JSON.parse(response_user.data['AddUserResult']);
            // login successful if there's a jwt token in the response
            if (response_user &&  response_user['0'] && response_user['0'].Token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(response_user['0']));
            } else {
                return Promise.reject(response_user.status);
            }
    });
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}


function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
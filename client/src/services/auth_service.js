import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login(user_name, password) {
        return axios
            .post(API_URL + "signin", {
                user_name,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(user_name, email, password, full_name, address, gender, team, country) {
        return axios.post(API_URL + "signup", {
            user_name,
            email,
            password,
            full_name,
            address,
            gender,
            team,
            country
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();

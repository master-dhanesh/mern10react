import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});

export default instance;

// https://jsonplaceholder.typicode.com/users
// https -> protocal
// jsonplaceholder -> domain/name
// typicode.com -> subdomain
// /users -> endpoint/route

// import the axios library
import axios from "axios";

// return a new version of axios with useful settings applied
export default axios.create({
    baseURL: "http://test.restful.training/api/tasks",
    params: {
        key: "88cd89cd70dfeffd0ad109b912f7eb98b814a140",
    },
    headers: {
        Accept: "application/json",
    },
});

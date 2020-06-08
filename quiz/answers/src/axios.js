// import the axios library
import axios from "axios";

// return a new version of axios with useful settings applied
export default axios.create({
    baseURL: "https://restful.training/api/tasks",
    headers: {
        Accept: "application/json",
        Authorization: "Bearer 88cd89cd70dfeffd0ad109b912f7eb98b814a140",
    },
});

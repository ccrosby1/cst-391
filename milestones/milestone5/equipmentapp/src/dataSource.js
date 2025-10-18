/**
 * Axios configured to backend API entrypoint
 */
import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:5000'
});
import axios from "axios";

export default {
    attendConcert: function(eventData) {
        return axios.post("/api/concerts", eventData);
    }
}
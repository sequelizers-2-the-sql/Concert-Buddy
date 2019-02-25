import axios from "axios";

export default {
    attendConcert: function(eventData) {
        return axios.post("/api/concerts", eventData);
    },
    getConcert: function(id) {
        return axios.get("/api/concerts/" + id);
    },
    getMyEvents: function(id) {
        return axios.get("/api/users/" + id);
    },
    removeEvent: function(id, ud) {
        return axios.put("/api/users/" + id, ud);
    }
}
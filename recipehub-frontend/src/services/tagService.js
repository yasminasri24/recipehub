import api from "./api";

export const getTags = () => {

    return api.get("/tags");

};

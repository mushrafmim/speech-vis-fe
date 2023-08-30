import http from "../../http-common";


const sub_URL = "dima806/multiple_accent_classification"

async function predictAccent(data: File) {
    return http.post(sub_URL, data);
}

export {
    predictAccent
};
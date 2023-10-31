import { local_server } from "../../http-common";


const sub_URL = "dima806/multiple_accent_classification"

const test_sub_url = "/api/langacc"

async function predictAccent(data: File) {
    return local_server.post(test_sub_url, data);
}

export {
    predictAccent
};
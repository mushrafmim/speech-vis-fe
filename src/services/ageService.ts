import http, { local_server } from "../../http-common";

const sub_URL = "/versae/wav2vec2-base-finetuned-coscan-age_group"

const test_sub_url = "/api/agecat"

async function predictAgeCategory(data: FormData) {
    return local_server.post(test_sub_url, data);
}


export {
    predictAgeCategory
}
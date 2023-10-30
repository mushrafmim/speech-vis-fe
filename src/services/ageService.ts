import http from "../../http-common";

const sub_URL = "/versae/wav2vec2-base-finetuned-coscan-age_group"
async function predictAgeCategory(data: Blob) {
    return http.post(sub_URL, data);
}


export {
    predictAgeCategory
}
import http from "../../http-common";

const sub_URL = "alefiury/wav2vec2-large-xlsr-53-gender-recognition-librispeech"
const test_sub_URL = "api/data"


async function predictGender(data: FormData) {
    return http.post(sub_URL, data);
}


export {
    predictGender
}
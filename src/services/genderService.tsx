import http from "../../http-common";

const sub_URL = "alefiury/wav2vec2-large-xlsr-53-gender-recognition-librispeech"


async function predictGender(data: File) {
    return http.post(sub_URL, data);
}


export {
    predictGender
}
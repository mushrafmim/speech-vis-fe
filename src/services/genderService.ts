import http from "../../http-common";
import { local_server } from "../../http-common";

const sub_URL = "alefiury/wav2vec2-large-xlsr-53-gender-recognition-librispeech"
const test_sub_URL = "api/gender"


async function predictGender(data: FormData) {
    return local_server.post(test_sub_URL, data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}


export {
    predictGender
}
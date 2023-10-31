import http, { local_server } from "../../http-common"

const sub_URL = "ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"

const test_sub_URL = "api/emotion"

async function predictEmotion(data: FormData) {
    return local_server.post(test_sub_URL, data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

export {
    predictEmotion
}
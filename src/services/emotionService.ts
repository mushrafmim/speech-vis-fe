import http from "../../http-common"

const sub_URL = "ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"

async function predictEmotion(data: File) {
    return http.post(sub_URL, data)
}

export {
    predictEmotion
}
import http from "../../http-common"


const sub_URL = "jonatasgrosman/wav2vec2-large-xlsr-53-english"

async function generateTranscript(data: File) {
    return http.post(sub_URL, data)
}

export {
    generateTranscript
}
import { local_server } from "../../http-common"

async function generateTranscript(data: FormData) {
    return local_server.post("api/transcript", data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

export {
    generateTranscript
}
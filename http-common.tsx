import axios from "axios"

const huggingFaceURL = "https://api-inference.huggingface.co/models"


export default axios.create({
    baseURL: huggingFaceURL,
    headers: {
        Authorization: "Bearer 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",
    }
})


const local_server = axios.create({
    baseURL: 'http://127.0.0.1:5000'
})

export {
    local_server
}
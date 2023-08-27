import axios from "axios"


export default axios.create({
    baseURL: "https://api-inference.huggingface.co/models/versae/wav2vec2-base-finetuned-coscan-age_group",
    headers: {
        Authorization: "Bearer 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",
    }
})
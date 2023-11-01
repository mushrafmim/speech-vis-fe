import { local_server } from "../../http-common";

async function getPitch(formdata: FormData) {
    return local_server.post("api/pitch", formdata, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

export {
    getPitch
}
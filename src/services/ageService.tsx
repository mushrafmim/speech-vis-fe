import http from "../../http-common";


async function predictAgeCategory(data: File) {
    return http.post("/", data);
}


export {
    predictAgeCategory
}
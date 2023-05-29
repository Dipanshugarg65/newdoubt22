


const url = 'http://localhost:7000'

export const uploadImage = (request, response)=>{
    if (!request.file){
        return response.status(404).json ({msg: "File Not found In Uploads"}); 
    }

    const imageUrl = `${url}/file/${request.file.filename}`;
    return response.status(200).json(imageUrl);
}
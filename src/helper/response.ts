class Response {
    
    setResponse(success: number, responseCode: number, message: any, result: any, bodyData?: any) {
        result.statusCode = responseCode;
        result.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        result.setHeader("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        result.setHeader("Access-Control-Allow-Credentials",true);
        result.setHeader("Content-Type", "application/json");
        result.send({
            success: success,
            status_code: responseCode,
            message: message,
            data: bodyData
        });
    }
}
export const response =  new Response();
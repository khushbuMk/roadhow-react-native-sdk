function errorHandling(resp:any) {
    var error = false
    var errorTitle = ""
    switch (resp.statusCode) {
        case 500:
            console.log("Internal Server Error")
            errorTitle = "Internal Server Error"
            error = true
            break;

        case 404:
            console.log("Response Not Found")
            errorTitle = "Response Not Found"
            error = true
            break;

        case 401:
            console.log("Unathorized Request")
            errorTitle = "Unathorized Request"
            error = true
            break;

        case 400:
            console.log("Validation Error")
            errorTitle = "Validation Error"
            error = true
            break;

        case 201: 
        case 202: 
        case 204:
            console.log("Create/Update/Delete item")
            errorTitle = ""
            error = true
            break; 

        case 200:
            console.log("Expected Response")
            break;

        default:
            // 429 may be - Too many request response
            console.log("Unexpected Response")
            errorTitle = "Unexpected Response"
            error = true
            break;
    }
    return {error, errorTitle}
    
}

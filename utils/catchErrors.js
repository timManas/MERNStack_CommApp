function catchErrors(error, displayError)  {
    let errorMsg;
    if (error.response) {
        // Request was made and server responded with a status code 2xx 
        errorMsg = error.response.data;
        console.error("Error response", errorMsg)

        // Cloudinary image upload
        if (error.response.data.error) {
            errorMsg = error.response.data.error.message;
        }
        
    } else if (error.request) {
        // Request was made but no response was received
        errorMsg = error.request;
        console.error("Error request", errorMsg)

    } else {
        // Something else happened. Unknown reason
        errorMsg = error.message;
        console.error("Error Message", errorMsg)
    }

    displayError(errorMsg)  // Callback  
}

export default catchErrors


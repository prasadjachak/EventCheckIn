using AutoWrapper.Wrappers;

namespace EventCheckin.Api.Models
{
    public class CustomApiResponse : ApiResponse
    {
        public CustomApiResponse()
        {
        }

        public CustomApiResponse(bool isSuccess = true) 
        {
            IsSuccess = isSuccess;
        }
        public CustomApiResponse(string message, object result = null, int statusCode = 200, string apiVersion = "1.0.0.0", bool isSuccess = true)
        {
            StatusCode = statusCode;
            Message = message;
            Result = result;
            Version = apiVersion;
            IsSuccess = isSuccess;
        }

        public CustomApiResponse(object result, int statusCode = 200, bool isSuccess = true)
        {
            StatusCode = statusCode;
            Result = result;
            IsSuccess = isSuccess;
        }

        public CustomApiResponse(int statusCode, object apiError, bool isSuccess = true)
        {
            StatusCode = statusCode;
            ResponseException = apiError;
            IsError = true;
            IsSuccess = isSuccess;
        }

        public bool IsSuccess { get; set; }
    }
}

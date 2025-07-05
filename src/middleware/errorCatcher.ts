import { HttpStatusEnum } from "elysia-http-status-code/status";

export interface CustomError extends Error {
  status?: number;
    validator?: {
      schema?: {
        properties?: any;
      };
    };
}

  export const errorMessages = ({
    code, error, set
  }:any) => {
    console.error("Error ",error);
    console.info("Code ",code);
    
    let status = error?.status ?? set.status // HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
    let message = "Internal Server Error";
    let errors: string | undefined;

    switch (code) {
      case 'PARSE':
        status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
        message = "Data could not be parsed";
        errors = error.message;
        break;
      case 'AUTHORIZATION_ERROR':
        status = HttpStatusEnum.HTTP_401_UNAUTHORIZED;
        message = "You are not Authorized";
        errors = error.message;
        break;
      case 'UNAUTHORIZED':
        status = HttpStatusEnum.HTTP_401_UNAUTHORIZED;
        message = "Unauthorized";
        errors = error.message;
        break;
      case 401:
        status = HttpStatusEnum.HTTP_401_UNAUTHORIZED;
        message = "Unauthorized User";
        errors = error.message;
        break;
      case 'FORBIDDEN':
        status = HttpStatusEnum.HTTP_403_FORBIDDEN;
        message = "Forbidden";
        errors = error.message;
        break;
      case 'VALIDATION':
        status = HttpStatusEnum.HTTP_422_UNPROCESSABLE_ENTITY;
        message = "Validation failed";
        errors = error.message;
        break;
      case 'VALIDATION_ERROR':
        status = HttpStatusEnum.HTTP_400_BAD_REQUEST;
        message = "Invalid body parameters";
        errors = error.validator ?? error.message;
        break;
      case 'PrismaClientInitializationError':
        status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
        message = "Persistent storage error";
        errors = error.message ?? "Database may not be ready";
        break;
      case 'NoSuchBucket':
        status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
        message = "Unable to store data. Directory not found 😒";
        errors = error.message;
        break;
      case 'NOT_FOUND':
        status = HttpStatusEnum.HTTP_404_NOT_FOUND;
        message = "Route not found 🚧";
        errors = error?.message;
        break;
      case 'UNKNOWN':
        status = HttpStatusEnum.HTTP_500_INTERNAL_SERVER_ERROR;
        message = "An unidentified error occured";
        errors = error.message;
        break;
      // default:
      //   return { code: set.status, message: 'An unhandled error occurred', note: error.message };
    }

    
    // switch(error.name){
    //   case 'ServiceUnavailableError':
    //     return handleServiceUnavailableError(error, set)
    //   case 'PrismaClientInitializationError':
    //     return handleDatabaseInitError(error, set);
    //   case 'PrismaClientValidationError':
    //     return handleDatabaseValidationError(error, set);
    //   case 'PrismaClientKnownRequestError':
    //     return handleRequestError(error, set);
    //   case 'ConnectionRefused':
    //     return handleMinioConnectError(error, set);
    //   case 'DatabaseError':
    //     return handleDatabaseError(error, set);
    //   case 'InternalServerError':
    //     return handleInternalServerError(error, set);
    //   // case 'Error':
    //   //   return handleError(error, set);
    //   // case 'VALIDATION':
    //   //   return handleValidationError(error, set);
    //   case 'NotFoundError':
    //     return handleNotFoundError(error, set);
    //   case 'ConflictError':
    //     return handleConflictError(error, set);
    //   case 'AuthenticationError':
    //     return handleAuthenticationError(error, set);
    //   case 'AuthorizationError':
    //     return handleAuthorizationError(error, set);
    //   case 'ValidationError':
    //     return handleValidationError(error, set);
    //   case 'InvalidBucketNameError':
    //     return handleInvalidBucketError(error, set);
    //   case 'S3Error':
    //     return { message: error.message, error: error.cause };
    //   case 'Error':
    //     return { message: 'Unknown error detected.'+ error?.type ? error.type : error }
    // }

    set.status = status;
    return {
      message, code: status, error: errors, success: false
    }
  }
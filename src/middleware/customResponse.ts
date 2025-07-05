import { Elysia, Context } from "elysia";

const customResponse = ({ error, response, set }: any) => {
    console.info("set: ", set);
    console.info("error: ", error);
    console.info("set: ", response);
    
  // Validate set object
  if (!set || typeof set !== 'object') {
    throw new Error('Invalid set object');
  }

  // File detection function
  const isResponseFile = (r: any) => {
    if (!r) return false;
    const contentType = r?.headers?.get?.('content-type') || r?.type;
    return contentType && /^(image|application|text|audio|video)\//.test(contentType);
  };

  // Return files unchanged
  if (isResponseFile(response)) {
    return response;
  }

  // Extract values
  const code = response?.code ?? set.status ?? 200;
  const message = response?.message ?? (response instanceof Object ? null : String(response));
  const errorMsg = response?.error ?? 
                   (error ? (error.code || error.message || String(error)) : null) ?? 
                   response?.note ?? 
                   null;

  // Build response object
  return {
    data: response?.data ?? null,
    page: response?.page ?? null,
    count: response?.count ?? null,
    total: response?.total ?? null,
    success: [200, 201, 202].includes(code),
    code,
    message,
    error: errorMsg
  };
};


export default customResponse;
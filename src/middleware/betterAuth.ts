import { Context, Elysia } from 'elysia';
import { auth } from '../utils/auth';

export const betterAuthView = (request: Request): Promise<Response> => {
  console.log("💻 BetterAuth endpoint reached ", request.method, request.url);
  
    const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"]
    // validate request method
    if(!BETTER_AUTH_ACCEPT_METHODS.includes(request.method)) {
        return Promise.reject(
            new Response(JSON.stringify({
                message: 'Method not Allowed',
                code: 405
            }), {
                status: 405,
                headers: { 'Content-Type': 'application/json' }
            })
        );
    }

        return auth.handler(request);
    
}

// user middleware (compute user and session and pass to routes)
export const betterAuthMiddleware = new Elysia({ name: 'better-auth' })
    // Mount Better Auth handler (basePath set in /utils/auth.ts)
    .mount(betterAuthView)
    .macro({
        auth: {
            async resolve({ set, status, request: { headers } }:Context) {
                // Implement cached session check
                

                const session = await auth.api.getSession({
                    headers
                })

                if (!session) {
                    set.status = 401;
                    return status(401);
                }

                return {
                    user: session.user,
                    session: session.session
                }
            }
        }
    });
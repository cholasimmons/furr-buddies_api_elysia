import { Context, Elysia } from 'elysia'
import { auth } from '../utils/auth'

const betterAuthView = (context: Context) => {
  console.log("💻 BetterAuth endpoint reached ", context.request.method, context.request.url);
  
    const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"]
    // validate request method
    if(BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
        return auth.handler(context.request);
    } else {
        context.status(405)
    }
}

// user middleware (compute user and session and pass to routes)
export const betterAuthMiddleware = new Elysia({ name: 'better-auth' })
    .mount('/auth', auth.handler) 
    .macro({
        auth: {
            async resolve({ status, request: { headers } }) {
                const session = await auth.api.getSession({
                    headers
                })

                if (!session) return status(401)

                return {
                    user: session.user,
                    session: session.session
                }
            }
        }
    })

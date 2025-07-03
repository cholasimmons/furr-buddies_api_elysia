import Elysia from "elysia";
import { betterAuthView } from "~middleware/betterAuth";

export const authController = new Elysia({
    prefix: '/auth',
    detail: { tags: ['Auth'] }
})
    // Mount Better Auth handler (basePath set in /utils/auth.ts)
    .mount(betterAuthView)

    // Dummy endpoint
    .get('/', () => { return {
        message: 'Auth working, but you\'re using the wrong method', code: 200
    } });
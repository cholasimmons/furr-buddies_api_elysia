import Elysia from "elysia";
import { betterAuthView } from "~middleware/betterAuth";

export const authController = new Elysia({
    prefix: '/auth',
    detail: { tags: ['Auth'] }
})

    // Dummy endpoint
    .get('/', () => { return {
        message: 'Auth working, but you\'re using the wrong method', code: 200
    } });
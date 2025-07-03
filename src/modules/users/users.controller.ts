import Elysia, { Context } from "elysia";
import { UsersService } from "./users.service";
import { authorize, checkIsAdmin } from "~middleware/authenticate";

export const usersController = new Elysia({
    prefix: 'users',
    detail: { tags: ['Users'] }
})
    // Returns a date
    .get('/', () => UsersService.getDate)

    // Restricted User object
    .get("/user", ({ user }:any) => user, {
        auth: true
    })

    // Restricted User object
    .get("/admin", ({ user }:any) => user, {
        beforeHandle: [checkIsAdmin]
    })
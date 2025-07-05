import Elysia, { Context, NotFoundError, t } from "elysia";
import { UsersService } from "./users.service";
import { authorize, checkIsAdmin } from "~middleware/authenticate";
import { db } from "~utils/database";
import { ProfilePlain, ProfilePlainInputCreate } from "src/generated/prismabox/Profile";
import { ErrorSchema } from "src/models/root.models";
import { User } from "src/generated/prismabox/User";

abstract class UsersController {
    static async getUser({ user }:any) {
        return user
    };
}

export const usersController = new Elysia({
    prefix: 'users',
    detail: { tags: ['Users'] }
})
    // Returns a date
    .get('/', () => UsersService.getDate)

    // Restricted User object
    .get("/user", UsersController.getUser, {
        auth: true,
        response: {
            200: User,
            404: ErrorSchema
        }
    })

    // Restricted User Profile object
    .get("/profile", async ({ user }:any) => {
        const profile = await db.profile.findUnique({
            where: { userId: user.id },
            // select: {
            //     firstname: true,
            //     lastname: true,
            //     gender: true
            // }
        })

        if(!profile){
            throw new NotFoundError("Profile not available")
        }

        return { data: profile };
    }, {
        auth: true,
        response: {
            200: t.Object({ data: ProfilePlain }),
            404: ErrorSchema
        }
    })

    // Restricted User object
    .get("/admin", ({ user }:any) => user, {
        beforeHandle: [checkIsAdmin]
    })



    // Restricted User object
    .post("/profile", async ({ user, body }:any) => {
        const profile = await db.profile.create({
            data: {
                ...body,
                user: {
                    connect: {
                        id: user.id
                    }
                }
            },
            include: { user: true }
        })

        return profile
    }, {
        auth: true,
        body: ProfilePlainInputCreate
    })
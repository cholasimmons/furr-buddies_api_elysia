import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { betterAuthMiddleware, betterAuthView } from "./middleware/betterAuth";
import { Logestic } from "logestic";
import { auth } from "./utils/auth";

const PORT = Bun.env.PORT ?? 3000;

const authHandler = new Elysia({ prefix: '/auth'})
    .mount("*", auth.handler)
    .get('/', () => { return {
        message: 'Auth working', code: 200
    } });



const app = new Elysia()
    .use(Logestic.preset('common'))
    .use(
        swagger({
            documentation: {
                // components: await OpenAPI.components,
                // paths: await OpenAPI.getPaths()
            }
        })
    )
    .use(
            cors({
                origin: true,
                methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
                credentials: true,
                allowedHeaders: ['Content-Type', 'Authorization']
            })
        )

    .use(betterAuthMiddleware)
    .use(authHandler)
    .get("/", () => "Hello Elysia")
    .get("/ping", () => "Pong")
    .get("/user", ({ user }:any) => user, {
    auth: true
    })
    .listen(PORT);

console.log(
  `🦊 Elysia server running at ${app.server?.hostname}:${app.server?.port} 💻`
);
console.info('Endpoints to try: \n/auth/sign-up/email\n/auth/sign-in/email\n/user');


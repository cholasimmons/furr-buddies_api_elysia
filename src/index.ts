import { Elysia, ValidationError } from "elysia";
import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { betterAuthMiddleware } from "~middleware/betterAuth";
import { Logestic } from "logestic";
import { usersController, authController } from "~modules/index";
import { OpenAPI } from "~utils/auth";
import { HttpStatusCode } from "elysia-http-status-code";
import { errorMessages } from "~middleware/errorCatcher";
import customResponse from "~middleware/customResponse";

const PORT = Bun.env.PORT ?? 3000;

const app = new Elysia({ detail: { tags: ['Root'] } })
.error({ ValidationError, Error })
    // Error catching
    .onError(errorMessages)

    // response transformation
    // .mapResponse(customResponse)

    // Cool console logging
    .use(Logestic.preset('common'))
    
    // Elysia OpenAPI (Swagger) plugin
    .use(
        swagger({
            autoDarkMode: true,
            documentation: {
                components: await OpenAPI.components,
                paths: await OpenAPI.getPaths()
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
    .use(HttpStatusCode())

    .use(betterAuthMiddleware)
    .use(authController)
    .get("/", () => "Hello Elysia")
    .get("/ping", () => "Pong")
    .get("/user", ({ user }:any) => user, {
        auth: true
    })
    .use(usersController)
    
    .listen(PORT);

console.log(
  `🦊 Elysia server running at ${app.server?.hostname}:${app.server?.port} 💻`
);
console.info(`Check swagger endpoints: http://${app.server?.hostname}:${app.server?.port}/swagger`);


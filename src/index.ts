import { Context, Elysia } from "elysia";
import { auth } from "./utils/auth";
import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { betterAuthMiddleware } from "./middleware/betterAuth";
import { Logestic } from "logestic";

const PORT = Bun.env.PORT ?? 3000;

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
// .all("/auth/*", betterAuthView)
.get("/", () => "Hello Elysia")
.get("/user", ({ user }:any) => user, {
  auth: true
})
.listen(PORT);

console.log(
  `🦊 Elysia server running at ${app.server?.hostname}:${app.server?.port}`
);

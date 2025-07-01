# Elysia with Bun runtime

## Prisma database server
To fire up a Prisma development server, run:
```bash
bun db
```

## Run the Elysia app
To start the development server run:
```bash
bun dev
```

## BetterAuth
BetterAuth is mounted at `/auth`, making all endpoints look like this: `http://localhost:3000/auth`

### Protected routes
`http://localhost:3000/user` is a protected route that requires a user to be authenticated in the system.

Open http://localhost:3000/ with your browser to see the result.

Test endpoints with a REST Client such as [Yaak](https://yaak.app) or [Insomnia](https://insomnia.rest)


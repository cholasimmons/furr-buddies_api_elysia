import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { organization, twoFactor } from "better-auth/plugins";
import { PrismaClient } from "../generated/prisma";
 
const prisma = new PrismaClient();
export const auth = betterAuth({
    basePath: '/auth',
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {  
        enabled: true
    },
    plugins: [
        // twoFactor(),
        // organization()
    ]
});

// let _schema: ReturnType<typeof auth.api.generateOpenAPISchema>
// const getSchema = async () => (_schema ??= auth.api.generateOpenAPISchema())

// export const OpenAPI = {
//     getPaths: (prefix = '/auth') =>
//         getSchema().then(({ paths }) => {
//             const reference: typeof paths = Object.create(null)

//             for (const path of Object.keys(paths)) {
//                 const key = prefix + path
//                 reference[key] = paths[path]

//                 for (const method of Object.keys(paths[path])) {
//                     const operation = (reference[key] as any)[method]

//                     operation.tags = ['Better Auth']
//                 }
//             }
//             return reference
//         }) as Promise<any>,
//     components: getSchema().then(({ components }) => components) as Promise<any>
// } as const
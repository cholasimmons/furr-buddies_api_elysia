import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin as adminPlugin, openAPI, organization, twoFactor } from "better-auth/plugins";
import { db } from "./database";
import consts from "~config/consts";

const authBasePath = '/auth';
export const auth = betterAuth({
    basePath: authBasePath,
    database: prismaAdapter(db, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {  
        enabled: true
    },
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 60 * 60 * 24 * 7 // 7 days
        },
        storeSessionInDatabase: false
    },
    advanced: {
        useSecureCookies: true
    },
    hooks: {
        // before / after hooks
    },
    plugins: [
        openAPI(),
        twoFactor(),
        adminPlugin({
            defaultRole: 'user',
            adminRoles: 'admin'
        }),
        organization()
    ],
    appName: consts.server.name
});

let _schema: ReturnType<typeof auth.api.generateOpenAPISchema>
const getSchema = async () => (_schema ??= auth.api.generateOpenAPISchema())

export const OpenAPI = {
    getPaths: (prefix = authBasePath) =>
        getSchema().then(({ paths }) => {
            const reference: typeof paths = Object.create(null)

            for (const path of Object.keys(paths)) {
                const key = prefix + path
                reference[key] = paths[path]

                for (const method of Object.keys(paths[path])) {
                    const operation = (reference[key] as any)[method]

                    operation.tags = ['Better Auth']
                }
            }
            return reference
        }) as Promise<any>,
    components: getSchema().then(({ components }) => components) as Promise<any>
} as const
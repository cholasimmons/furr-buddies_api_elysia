import { Elysia, t } from 'elysia'

export abstract class AuthService {
    static getDate(): Date {
        return new Date();
    }
}
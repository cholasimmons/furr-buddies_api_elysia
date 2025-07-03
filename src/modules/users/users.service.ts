import { Elysia, t } from 'elysia'

export abstract class UsersService {
    static getDate(): Date {
        return new Date();
    }
}
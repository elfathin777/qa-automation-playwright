import { APIRequestContext } from '@playwright/test';

export class ApiClient {
    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async getUsers(page: number) {
        return this.request.get(`/api/users?page=${page}`);
    }

    async createUser(name: string, job: string) {
        return this.request.post('/api/users', {
            data: { name, job }
        });
    }

    async login(payload: object) {
        return this.request.post('/api/login', {
            data: payload
        });
    }
}
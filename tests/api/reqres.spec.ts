import { test, expect } from '@playwright/test';
import { ApiClient } from '../../utils/ApiClient';

test.describe('Reqres API Tests', () => {
  let api: ApiClient;

  test.beforeEach(async ({ request }) => {
        api = new ApiClient(request);
    });

  test.afterEach(async () => {
    // Added small delay to avoid ReqRes rate limiting (public API)
    await new Promise(resolve => setTimeout(resolve, 500));
  });

  
  /*
  1. GET Users
  - Endpoint: GET /api/users?page=2
  - Assert status code 200
  - Assert response contains data array
  - Assert at least one user has id and email
  */
  test('API_01 - GET Users (Page 2)', async () => {
        const response = await api.getUsers(2);
        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(Array.isArray(body.data)).toBeTruthy();
        expect(body.data.length).toBeGreaterThan(0);
        
        // Assert at least one user has id and email
        const firstUser = body.data[0];
        expect(firstUser).toHaveProperty('id');
        expect(firstUser).toHaveProperty('email');
    });


  /*
  2. Create User
  - Endpoint: POST /api/users
  - Request body:
  { "name": "John", "job": "QA" }
  - Assert status code 201
  - Assert response contains id and createdAt
  */
  test('API_02 - Create User', async () => {
        const response = await api.createUser('John', 'QA');
        expect(response.status()).toBe(201);

        const body = await response.json();
        expect(body.name).toBe('John');
        
        expect(body).toHaveProperty('id');
        expect(body).toHaveProperty('createdAt');
    });

  /*
  Negative Login
  - Endpoint: POST /api/login
  - Request body:
  { "email": "peter@klaven" }
  - Assert status code 400
  - Assert error message exists
  */
  const invalidLogins = [
        { email: 'peter@klaven', desc: 'Missing password' },
        { email: '', desc: 'Empty email' }
    ];

    for (const data of invalidLogins) {
        test(`API_03 - Negative Login: ${data.desc}`, async () => {
            const response = await api.login({ email: data.email });
            expect(response.status()).toBe(400);

            const body = await response.json();
            expect(body).toHaveProperty('error');
        });
    }

});
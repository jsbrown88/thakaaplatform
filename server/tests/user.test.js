const request = require('supertest');
const app = require('../index.js');
const User = require('../models/User.js');

describe('User Authentication', () => {
  let authToken;

  beforeAll(async () => {
    await User.deleteMany({});
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/user/register')
      .send({
        username: 'testUser',
        password: 'testPassword',
        email: 'test@test.com'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('user');
  });

  it('should authenticate the user', async () => {
    const res = await request(app)
      .post('/api/user/login')
      .send({
        username: 'testUser',
        password: 'testPassword'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
    authToken = res.body.token;
  });

  it('should get the authenticated user profile', async () => {
    const res = await request(app)
      .get('/api/user/profile')
      .set('Authorization', `Bearer ${authToken}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
  });

  afterAll(async () => {
    await User.deleteMany({});
  });
});
const request = require('supertest');
const app = require('../index.js');
const { adminUser, siteData } = require('../models/Admin.js');

describe('Admin API', () => {
  let adminToken;

  beforeAll(async () => {
    const res = await request(app)
      .post('/api/admin/login')
      .send({
        username: 'admin',
        password: 'password'
      });
    adminToken = res.body.token;
  });

  test('Admin login', async () => {
    const res = await request(app)
      .post('/api/admin/login')
      .send({
        username: 'admin',
        password: 'password'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  test('Get site data', async () => {
    const res = await request(app)
      .get('/api/admin/data')
      .set('Authorization', `Bearer ${adminToken}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('siteData');
  });

  test('Update site data', async () => {
    const res = await request(app)
      .put('/api/admin/data')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        siteData: {
          totalUsers: 100,
          totalProducts: 50,
          totalInvestors: 20
        }
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('siteData');
    expect(res.body.siteData.totalUsers).toEqual(100);
    expect(res.body.siteData.totalProducts).toEqual(50);
    expect(res.body.siteData.totalInvestors).toEqual(20);
  });

  afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close();
    done();
  });
});
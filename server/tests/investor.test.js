const request = require('supertest');
const app = require('../index');
const Investor = require('../models/Investor');

describe('Investor Endpoints', () => {
  it('should create a new investor', async () => {
    const res = await request(app)
      .post('/api/investor')
      .send({
        name: 'Test Investor',
        email: 'testinvestor@gmail.com',
        password: 'testpassword'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('investor');
  });

  it('should fetch a single investor', async () => {
    const investor = new Investor({
      name: 'Test Investor',
      email: 'testinvestor@gmail.com',
      password: 'testpassword'
    });
    await investor.save();

    const res = await request(app).get(`/api/investor/${investor.id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('investor');
  });

  it('should update an investor', async () => {
    const investor = new Investor({
      name: 'Test Investor',
      email: 'testinvestor@gmail.com',
      password: 'testpassword'
    });
    await investor.save();

    const res = await request(app)
      .put(`/api/investor/${investor.id}`)
      .send({
        name: 'Updated Investor',
        email: 'updatedinvestor@gmail.com'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('investor');
    expect(res.body.investor).toHaveProperty('name', 'Updated Investor');
  });

  it('should delete an investor', async () => {
    const investor = new Investor({
      name: 'Test Investor',
      email: 'testinvestor@gmail.com',
      password: 'testpassword'
    });
    await investor.save();

    const res = await request(app).delete(`/api/investor/${investor.id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Investor deleted');
  });
});
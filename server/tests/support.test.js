const request = require('supertest');
const app = require('../index.js');
const Support = require('../models/Support.js');

describe('Support API', () => {
  let supportTicket;

  beforeAll(async () => {
    supportTicket = new Support({
      title: 'Test Ticket',
      description: 'This is a test ticket',
      status: 'Open',
      user: 'testUser'
    });

    await supportTicket.save();
  });

  afterAll(async () => {
    await Support.deleteMany();
  });

  it('should create a new support ticket', async () => {
    const res = await request(app)
      .post('/api/support')
      .send({
        title: 'New Test Ticket',
        description: 'This is a new test ticket',
        user: 'newTestUser'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('ticket');
  });

  it('should fetch a support ticket', async () => {
    const res = await request(app)
      .get(`/api/support/${supportTicket._id}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('ticket');
    expect(res.body.ticket.title).toEqual(supportTicket.title);
  });

  it('should update a support ticket', async () => {
    const res = await request(app)
      .put(`/api/support/${supportTicket._id}`)
      .send({
        status: 'Closed'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('ticket');
    expect(res.body.ticket.status).toEqual('Closed');
  });

  it('should delete a support ticket', async () => {
    const res = await request(app)
      .delete(`/api/support/${supportTicket._id}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Ticket deleted');
  });
});
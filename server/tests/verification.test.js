const request = require('supertest');
const app = require('../index');
const Verification = require('../models/Verification');

describe('Verification Badge', () => {
  let verificationToken;

  beforeAll(async () => {
    await Verification.deleteMany();

    const verification = new Verification({
      userId: 'testUserId',
      status: 'pending',
      documents: ['testDocument1', 'testDocument2']
    });

    verificationToken = verification._id;
    await verification.save();
  });

  test('Should get verification status', async () => {
    const res = await request(app)
      .get(`/api/verification/${verificationToken}`)
      .expect(200);

    expect(res.body.status).toBe('pending');
  });

  test('Should update verification status', async () => {
    const res = await request(app)
      .put(`/api/verification/${verificationToken}`)
      .send({ status: 'verified' })
      .expect(200);

    expect(res.body.status).toBe('verified');
  });

  afterAll(async () => {
    await Verification.deleteMany();
  });
});

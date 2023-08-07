const request = require('supertest');
const app = require('../index.js');
const Feedback = require('../models/Feedback.js');

describe('Feedback API', () => {
  let feedbackData = {
    doctorId: '123456',
    feedback: 'Great platform, easy to use and navigate.'
  };

  beforeEach(async () => {
    await Feedback.deleteMany();
  });

  test('Should create new feedback', async () => {
    await request(app)
      .post('/api/feedback')
      .send(feedbackData)
      .expect(201);
  });

  test('Should fetch all feedback', async () => {
    const feedback = new Feedback(feedbackData);
    await feedback.save();

    await request(app)
      .get('/api/feedback')
      .expect(200)
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(1);
      });
  });

  test('Should delete a feedback', async () => {
    const feedback = new Feedback(feedbackData);
    await feedback.save();

    await request(app)
      .delete(`/api/feedback/${feedback._id}`)
      .expect(200);
  });
});
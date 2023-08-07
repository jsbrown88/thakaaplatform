const request = require('supertest');
const app = require('../index.js');
const Notification = require('../models/Notification.js');

describe('Notification API', () => {
  let notificationData = {
    title: 'New Update',
    message: 'New product added to the suite',
    userId: '1234567890'
  };

  beforeEach(async () => {
    await Notification.deleteMany();

    let notification = new Notification(notificationData);
    await notification.save();
  });

  test('Should fetch all notifications', async () => {
    const res = await request(app).get('/api/notifications');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(1);
  });

  test('Should create a new notification', async () => {
    const res = await request(app)
      .post('/api/notifications')
      .send({
        title: 'Product Update',
        message: 'Product updated in the suite',
        userId: '0987654321'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual('Product Update');
  });

  test('Should delete a notification', async () => {
    const notification = await Notification.findOne(notificationData);
    const res = await request(app).delete(`/api/notifications/${notification._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Notification deleted');
  });
});
const request = require('supertest');
const app = require('../index.js');
const Chat = require('../models/Chat.js');

describe('Chat System', () => {
  let chatData = {
    sender: 'testUser',
    receiver: 'testReceiver',
    message: 'Hello, this is a test message',
  };

  beforeEach(async () => {
    await Chat.deleteMany();
  });

  test('Should send a message', async () => {
    const response = await request(app)
      .post('/api/chat/sendMessage')
      .send(chatData);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe(chatData.message);
  });

  test('Should receive a message', async () => {
    const chat = new Chat(chatData);
    await chat.save();

    const response = await request(app)
      .get(`/api/chat/receiveMessage?sender=${chatData.sender}&receiver=${chatData.receiver}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe(chatData.message);
  });

  test('Should report a message', async () => {
    const chat = new Chat(chatData);
    await chat.save();

    const response = await request(app)
      .post(`/api/chat/reportMessage/${chat._id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.reported).toBe(true);
  });
});
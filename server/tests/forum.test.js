const request = require('supertest');
const app = require('../index.js');
const { Forum } = require('../models/Forum.js');

describe('Forum API', () => {
    let forumData = {
        title: 'Test Thread',
        content: 'This is a test thread.',
        author: 'Test User'
    };

    beforeEach(async () => {
        await Forum.deleteMany();
    });

    test('Should create a new forum thread', async () => {
        await request(app)
            .post('/api/forum')
            .send(forumData)
            .expect(201);
    });

    test('Should fetch all forum threads', async () => {
        const forum = new Forum(forumData);
        await forum.save();

        await request(app)
            .get('/api/forum')
            .expect(200)
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(1);
            });
    });

    test('Should fetch a specific forum thread', async () => {
        const forum = new Forum(forumData);
        await forum.save();

        await request(app)
            .get(`/api/forum/${forum._id}`)
            .expect(200)
            .then(response => {
                expect(response.body.title).toEqual(forumData.title);
                expect(response.body.content).toEqual(forumData.content);
                expect(response.body.author).toEqual(forumData.author);
            });
    });

    test('Should update a specific forum thread', async () => {
        const forum = new Forum(forumData);
        await forum.save();

        const updatedData = {
            title: 'Updated Test Thread',
            content: 'This is an updated test thread.',
            author: 'Updated Test User'
        };

        await request(app)
            .put(`/api/forum/${forum._id}`)
            .send(updatedData)
            .expect(200)
            .then(response => {
                expect(response.body.title).toEqual(updatedData.title);
                expect(response.body.content).toEqual(updatedData.content);
                expect(response.body.author).toEqual(updatedData.author);
            });
    });

    test('Should delete a specific forum thread', async () => {
        const forum = new Forum(forumData);
        await forum.save();

        await request(app)
            .delete(`/api/forum/${forum._id}`)
            .expect(200)
            .then(async () => {
                const deletedForum = await Forum.findById(forum._id);
                expect(deletedForum).toBeNull();
            });
    });
});
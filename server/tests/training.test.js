const request = require('supertest');
const app = require('../index');
const Training = require('../models/Training');

describe('Training API', () => {
    let trainingData = {
        title: 'AI Training',
        description: 'Introduction to AI',
        resources: ['Resource 1', 'Resource 2']
    };

    beforeEach(async () => {
        await Training.deleteMany();
    });

    test('Should create new training', async () => {
        await request(app)
            .post('/api/training')
            .send(trainingData)
            .expect(201);
    });

    test('Should get all trainings', async () => {
        const training = new Training(trainingData);
        await training.save();

        await request(app)
            .get('/api/training')
            .expect(200)
            .then(response => {
                expect(Array.isArray(response.body)).toBe(true);
                expect(response.body.length).toEqual(1);
            });
    });

    test('Should get training by ID', async () => {
        const training = new Training(trainingData);
        await training.save();

        await request(app)
            .get(`/api/training/${training._id}`)
            .expect(200)
            .then(response => {
                expect(response.body.title).toBe(trainingData.title);
                expect(response.body.description).toBe(trainingData.description);
            });
    });

    test('Should update training by ID', async () => {
        const training = new Training(trainingData);
        await training.save();

        await request(app)
            .put(`/api/training/${training._id}`)
            .send({ title: 'Updated Title' })
            .expect(200)
            .then(response => {
                expect(response.body.title).toBe('Updated Title');
            });
    });

    test('Should delete training by ID', async () => {
        const training = new Training(trainingData);
        await training.save();

        await request(app)
            .delete(`/api/training/${training._id}`)
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe('Training deleted successfully');
            });
    });
});

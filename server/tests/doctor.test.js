const request = require('supertest');
const app = require('../index.js');
const Doctor = require('../models/Doctor.js');

describe('Doctor Account Tests', () => {
  let doctorData = {
    name: 'Dr. Test',
    email: 'test@doctor.com',
    password: 'test1234',
    licenseNumber: '1234567890'
  };

  beforeAll(async () => {
    await Doctor.deleteMany({});
  });

  it('Should save doctor to database', async done => {
    const res = await request(app).post('/api/doctor').send(doctorData);
    const doctor = await Doctor.findOne({ email: 'test@doctor.com' });
    expect(res.statusCode).toEqual(201);
    expect(doctor.name).toBeTruthy();
    expect(doctor.email).toBeTruthy();
    expect(doctor.licenseNumber).toBeTruthy();
    done();
  });

  it('Should get doctor from database', async done => {
    const res = await request(app).get('/api/doctor');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toEqual(1);
    done();
  });

  it('Should update doctor in database', async done => {
    const doctor = await Doctor.findOne({ email: 'test@doctor.com' });
    const res = await request(app).put(`/api/doctor/${doctor._id}`).send({ name: 'Dr. Updated' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual('Dr. Updated');
    done();
  });

  it('Should delete doctor from database', async done => {
    const doctor = await Doctor.findOne({ email: 'test@doctor.com' });
    const res = await request(app).delete(`/api/doctor/${doctor._id}`);
    expect(res.statusCode).toEqual(200);
    const deletedDoctor = await Doctor.findOne({ email: 'test@doctor.com' });
    expect(deletedDoctor).toBeNull();
    done();
  });
});
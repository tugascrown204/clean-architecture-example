const request = require('supertest');
const app = require('../index');
const Sample = require('../models/sampleModel');

describe('Sample API', () => {
  beforeAll(async () => {
    await Sample.deleteMany();
  });

  test('GET /samples should return an array', async () => {
    const response = await request(app).get('/samples');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

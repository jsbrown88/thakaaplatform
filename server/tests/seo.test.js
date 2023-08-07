const request = require('supertest');
const app = require('../index.js');
const seoController = require('../controllers/seoController.js');

describe('SEO Controller', () => {
  it('should have a getSeoData function', () => {
    expect(typeof seoController.getSeoData).toBe('function');
  });

  it('should return SEO data', async () => {
    seoController.getSeoData.mockReturnValue({ title: 'Thakaamed', description: 'Web3 suite of products' });
    const res = await request(app).get('/api/seo');
    expect(res.body).toEqual({ title: 'Thakaamed', description: 'Web3 suite of products' });
  });

  it('should have a updateSeoData function', () => {
    expect(typeof seoController.updateSeoData).toBe('function');
  });

  it('should update and return SEO data', async () => {
    seoController.updateSeoData.mockReturnValue({ title: 'Thakaamed Updated', description: 'Web3 suite of products updated' });
    const res = await request(app).put('/api/seo');
    expect(res.body).toEqual({ title: 'Thakaamed Updated', description: 'Web3 suite of products updated' });
  });
});
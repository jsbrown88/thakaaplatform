const request = require('supertest');
const app = require('../index.js');
const Product = require('../models/Product.js');

describe('Product API', () => {
  let productId;

  beforeAll(async () => {
    await Product.remove({});

    const product = await Product.create({
      name: 'Test Product',
      description: 'This is a test product',
      price: 100,
      seller: 'Test Seller',
      image: 'test.jpg'
    });

    productId = product._id;
  });

  test('should show all products', async () => {
    const response = await request(app).get('/api/product');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBe(1);
  });

  test('should show a product by id', async () => {
    const response = await request(app).get(`/api/product/${productId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe('Test Product');
    expect(response.body.description).toBe('This is a test product');
    expect(response.body.price).toBe(100);
    expect(response.body.seller).toBe('Test Seller');
    expect(response.body.image).toBe('test.jpg');
  });

  afterAll(async () => {
    await Product.remove({});
  });
});
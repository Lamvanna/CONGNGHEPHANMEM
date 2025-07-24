// MongoDB initialization script for Docker
// This script runs when MongoDB container starts for the first time

// Switch to nafood database
db = db.getSiblingDB('nafood');

// Create collections
db.createCollection('users');
db.createCollection('products');
db.createCollection('orders');
db.createCollection('reviews');
db.createCollection('banners');
db.createCollection('counters');

// Create indexes for better performance
db.users.createIndex({ "email": 1 }, { unique: true });
db.users.createIndex({ "role": 1 });
db.users.createIndex({ "isActive": 1 });

db.products.createIndex({ "category": 1 });
db.products.createIndex({ "isActive": 1 });
db.products.createIndex({ "name": "text", "description": "text" });

db.orders.createIndex({ "userId": 1 });
db.orders.createIndex({ "status": 1 });
db.orders.createIndex({ "createdAt": -1 });

db.reviews.createIndex({ "productId": 1 });
db.reviews.createIndex({ "userId": 1 });
db.reviews.createIndex({ "approved": 1 });
db.reviews.createIndex({ "userId": 1, "productId": 1, "orderId": 1 }, { unique: true });

db.banners.createIndex({ "order": 1 });
db.banners.createIndex({ "isActive": 1 });

// Initialize counters
db.counters.insertMany([
  { _id: 'users', seq: 0 },
  { _id: 'products', seq: 0 },
  { _id: 'orders', seq: 0 },
  { _id: 'reviews', seq: 0 },
  { _id: 'banners', seq: 0 }
]);

print('MongoDB initialized successfully for NAFOODLVN');

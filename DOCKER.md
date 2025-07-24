# 🐳 Docker Setup cho NAFOODLVN Backend

## 📋 Yêu cầu

- Docker >= 20.0
- Docker Compose >= 2.0

## 🚀 Quick Start

### 1. Production Environment

```bash
# Build và chạy tất cả services
docker-compose up -d

# Kiểm tra logs
docker-compose logs -f backend

# Seed dữ liệu mẫu
docker-compose exec backend npm run docker:seed

# Dừng services
docker-compose down
```

### 2. Development Environment

```bash
# Chạy development environment với hot reload
docker-compose -f docker-compose.dev.yml up -d

# Xem logs
docker-compose -f docker-compose.dev.yml logs -f backend-dev

# Dừng development environment
docker-compose -f docker-compose.dev.yml down
```

## 📦 Services

### Backend API
- **Container:** `nafood-backend`
- **Port:** 3000
- **Health Check:** `http://localhost:3000/api/health`

### MongoDB Database
- **Container:** `nafood-mongodb`
- **Port:** 27017
- **Username:** admin
- **Password:** password123
- **Database:** nafood

### Redis Cache
- **Container:** `nafood-redis`
- **Port:** 6379

## 🔧 NPM Scripts

```bash
# Docker build
npm run docker:build

# Docker run single container
npm run docker:run

# Docker Compose - Production
npm run docker:up
npm run docker:down

# Docker Compose - Development
npm run docker:dev
npm run docker:dev:down

# View logs
npm run docker:logs

# Seed data in Docker
npm run docker:seed
```

## 🗂️ Volumes

- **mongodb_data:** Persistent MongoDB data
- **redis_data:** Persistent Redis data
- **./public/uploads:** File uploads (mounted)

## 🌐 Networks

- **nafood-network:** Internal network cho production
- **nafood-dev-network:** Internal network cho development

## ⚙️ Environment Variables

### Production (.env)
```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb://admin:password123@mongodb:27017/nafood?authSource=admin
JWT_SECRET=your-super-secret-jwt-key-change-in-production
SESSION_SECRET=your-session-secret-change-in-production
FRONTEND_URL=http://localhost:3000
```

### Development
```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://admin:password123@mongodb:27017/nafood?authSource=admin
JWT_SECRET=dev-jwt-secret-key
SESSION_SECRET=dev-session-secret-key
FRONTEND_URL=http://localhost:5173
```

## 🔍 Debugging

### Xem logs của service cụ thể
```bash
docker-compose logs -f backend
docker-compose logs -f mongodb
docker-compose logs -f redis
```

### Truy cập container
```bash
# Backend container
docker-compose exec backend sh

# MongoDB container
docker-compose exec mongodb mongosh -u admin -p password123

# Redis container
docker-compose exec redis redis-cli
```

### Kiểm tra health
```bash
# Backend health check
curl http://localhost:3000/api/health

# MongoDB connection
docker-compose exec mongodb mongosh -u admin -p password123 --eval "db.adminCommand('ping')"
```

## 🔄 Database Operations

### Seed dữ liệu
```bash
# Trong Docker container
docker-compose exec backend npm run docker:seed

# Hoặc từ host
npm run docker:seed
```

### Backup MongoDB
```bash
# Backup
docker-compose exec mongodb mongodump -u admin -p password123 --authenticationDatabase admin -d nafood -o /backup

# Restore
docker-compose exec mongodb mongorestore -u admin -p password123 --authenticationDatabase admin -d nafood /backup/nafood
```

## 🚨 Troubleshooting

### Container không start
```bash
# Kiểm tra logs
docker-compose logs backend

# Rebuild container
docker-compose build --no-cache backend
docker-compose up -d backend
```

### MongoDB connection issues
```bash
# Kiểm tra MongoDB logs
docker-compose logs mongodb

# Test connection
docker-compose exec backend node -e "
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://admin:password123@mongodb:27017/nafood?authSource=admin');
client.connect().then(() => console.log('Connected')).catch(console.error);
"
```

### Port conflicts
```bash
# Thay đổi ports trong docker-compose.yml
services:
  backend:
    ports:
      - "3001:3000"  # Thay vì 3000:3000
  mongodb:
    ports:
      - "27018:27017"  # Thay vì 27017:27017
```

## 📊 Monitoring

### Resource usage
```bash
# Xem resource usage
docker stats

# Xem disk usage
docker system df
```

### Container health
```bash
# Kiểm tra health status
docker-compose ps

# Health check manual
docker-compose exec backend curl -f http://localhost:3000/api/health
```

## 🔒 Security Notes

- Thay đổi default passwords trong production
- Sử dụng Docker secrets cho sensitive data
- Limit container resources
- Regular security updates

## 🎯 Production Deployment

### 1. Build optimized image
```bash
docker build -t nafoodlvn-backend:latest .
```

### 2. Use production compose file
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### 3. Setup reverse proxy (Nginx)
```nginx
server {
    listen 80;
    server_name api.nafoodlvn.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

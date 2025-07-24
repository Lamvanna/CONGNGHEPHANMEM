# 🍜 NAFOODLVN Backend API

Backend API cho hệ thống quản lý nhà hàng NAFOODLVN được xây dựng với Node.js, Express và MongoDB.

## 🚀 Công nghệ sử dụng

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload
- **Zod** - Schema validation
- **WebSocket** - Real-time communication

## 📋 Yêu cầu hệ thống

- Node.js >= 18.0.0
- MongoDB >= 5.0
- npm hoặc yarn

## ⚙️ Cài đặt

1. **Clone repository:**
```bash
git clone https://github.com/Lamvanna/CONGNGHEPHANMEM.git -b backend
cd CONGNGHEPHANMEM
```

2. **Cài đặt dependencies:**
```bash
npm install
```

3. **Cấu hình environment:**
```bash
cp .env.example .env
```
Chỉnh sửa file `.env` với thông tin cấu hình của bạn.

4. **Khởi tạo database:**
```bash
npm run seed
```

5. **Chạy development server:**
```bash
npm run dev
```

Server sẽ chạy tại `http://localhost:3000`

## 🔧 Scripts

- `npm run dev` - Chạy development server với hot reload
- `npm run start` - Chạy production server
- `npm run build` - Build production bundle
- `npm run seed` - Khởi tạo dữ liệu mẫu
- `npm run check-collections` - Kiểm tra collections

## 📁 Cấu trúc project

```
├── server/
│   ├── db.js           # Database connection
│   ├── index.js        # Main server file
│   ├── routes.js       # API routes
│   ├── storage.js      # Database operations
│   └── vite.js         # Vite integration
├── shared/
│   └── schema.js       # Validation schemas
├── scripts/
│   ├── seed-data.js    # Database seeding
│   ├── check-collections.js
│   └── create-test-orders.js
├── start.js            # Development starter
├── start-prod.js       # Production starter
└── package.json
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Đăng ký tài khoản
- `POST /api/auth/login` - Đăng nhập
- `GET /api/auth/test` - Test authentication

### Products
- `GET /api/products` - Lấy danh sách sản phẩm
- `GET /api/products/:id` - Lấy chi tiết sản phẩm
- `POST /api/products` - Tạo sản phẩm mới (Admin)
- `PUT /api/products/:id` - Cập nhật sản phẩm (Admin)
- `DELETE /api/products/:id` - Xóa sản phẩm (Admin)

### Orders
- `GET /api/orders` - Lấy danh sách đơn hàng
- `GET /api/orders/:id` - Lấy chi tiết đơn hàng
- `POST /api/orders` - Tạo đơn hàng mới
- `PUT /api/orders/:id` - Cập nhật đơn hàng

### Reviews
- `GET /api/reviews` - Lấy danh sách đánh giá
- `POST /api/reviews` - Tạo đánh giá mới
- `PUT /api/reviews/:id/approve` - Duyệt đánh giá (Admin)

### Users
- `GET /api/users` - Lấy danh sách người dùng (Admin)
- `GET /api/users/:id` - Lấy thông tin người dùng
- `PUT /api/users/:id` - Cập nhật thông tin người dùng

### Statistics
- `GET /api/statistics/overview` - Thống kê tổng quan
- `GET /api/statistics/top-products` - Top sản phẩm bán chạy

### File Upload
- `POST /api/upload` - Upload file

## 🔐 Authentication

API sử dụng JWT tokens cho authentication. Include token trong header:
```
Authorization: Bearer <your-jwt-token>
```

## 👥 Roles

- **user** - Khách hàng thường
- **staff** - Nhân viên
- **admin** - Quản trị viên

## 📊 Database Schema

Xem chi tiết trong file `NAFOODLVN_SQLServer_Database.md`

## 🔧 Environment Variables

```env
MONGODB_URI=mongodb://localhost:27017/nafood
JWT_SECRET=your-jwt-secret
PORT=3000
NODE_ENV=development
SESSION_SECRET=your-session-secret
```

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run start:prod
```

### Docker (Optional)
```bash
docker build -t nafoodlvn-backend .
docker run -p 3000:3000 nafoodlvn-backend
```

## 📝 API Documentation

Chi tiết đầy đủ về API có trong file `API_DOCUMENTATION.md`

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

MIT License

## 📞 Liên hệ

- Email: support@nafoodlvn.com
- Website: https://nafoodlvn.com

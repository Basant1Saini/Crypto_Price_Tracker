# Crypto Price Tracker 🚀

A modern, real-time cryptocurrency price tracking application built with cutting-edge technologies.

## 🌟 Features

- **Real-time Price Updates**: Live cryptocurrency prices with WebSocket connections
- **Multi-Exchange Support**: Aggregated data from multiple exchanges (Binance, Coinbase, Kraken)
- **Interactive Charts**: Advanced charting with TradingView-style indicators
- **Portfolio Tracking**: Track your crypto investments and P&L
- **Price Alerts**: Custom notifications for price movements
- **Dark/Light Theme**: Modern UI with theme switching
- **Mobile Responsive**: PWA support for mobile devices
- **Historical Data**: Access to historical price data and analytics

## 🛠️ Tech Stack (MERN)

### Frontend
- **React 18** with TypeScript
- **Vite 5** (Build tool)
- **React Router v6** for routing
- **Tailwind CSS 3.4** for styling
- **Framer Motion** for animations
- **Chart.js 4** / **Recharts** for data visualization
- **React Query (TanStack Query v5)** for data fetching
- **Zustand** for state management
- **PWA** support with Vite PWA plugin

### Backend
- **Node.js 20** with TypeScript
- **Express.js 4.18** (Web framework)
- **MongoDB 7** with **Mongoose ODM**
- **Redis 7** for caching and sessions
- **Socket.io** for real-time WebSocket updates
- **Bull Queue** for background jobs
- **Joi** / **Zod** for schema validation

### Infrastructure & DevOps
- **Docker** & **Docker Compose**
- **GitHub Actions** for CI/CD
- **Netlify** / **Vercel** for frontend deployment
- **Railway** / **AWS** / **Heroku** for backend hosting
- **MongoDB Atlas** (Cloud database)
- **Redis Cloud** for caching

### APIs & Services
- **CoinGecko API** for price data
- **Binance WebSocket API** for real-time updates
- **CoinMarketCap API** as backup data source
- **Web Push API** for notifications

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- MongoDB 7+
- Redis 7+
- Docker & Docker Compose (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/crypto-price-tracker.git
   cd crypto-price-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the environment variables:
   ```env
   # Database
   MONGODB_URI="mongodb://localhost:27017/crypto_tracker"
   # Or MongoDB Atlas
   # MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/crypto_tracker"
   
   # Redis
   REDIS_URL="redis://localhost:6379"
   
   # API Keys
   COINGECKO_API_KEY="your_coingecko_api_key"
   COINMARKETCAP_API_KEY="your_coinmarketcap_api_key"
   
   # JWT
   JWT_SECRET="your_jwt_secret"
   JWT_REFRESH_SECRET="your_jwt_refresh_secret"
   
   # App Config
   PORT=5000
   NODE_ENV=development
   CLIENT_URL="http://localhost:3000"
   ```

4. **Start with Docker**
   ```bash
   docker-compose up -d
   ```

5. **Start Development Servers**
   
   Backend (Terminal 1):
   ```bash
   cd backend
   npm run dev
   ```
   
   Frontend (Terminal 2):
   ```bash
   cd frontend
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
crypto-price-tracker/
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom hooks
│   │   ├── services/        # API services
│   │   ├── store/           # Zustand stores
│   │   ├── utils/           # Utilities
│   │   └── types/           # TypeScript types
│   ├── public/              # Static assets
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
├── backend/                 # Express.js backend
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # Mongoose models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Utilities
│   │   └── config/          # Configuration
│   ├── server.ts
│   └── package.json
├── shared/                  # Shared types/utilities
├── docker-compose.yml
├── package.json
└── README.md
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development servers
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:seed      # Seed database with sample data
npm run db:reset     # Reset database

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:e2e     # Run end-to-end tests

# Linting & Formatting
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking
```

## 🌐 API Endpoints

### Public Endpoints
- `GET /api/coins` - Get list of supported cryptocurrencies
- `GET /api/coins/:id/price` - Get current price for a coin
- `GET /api/coins/:id/history` - Get historical price data
- `GET /api/markets` - Get market overview

### Protected Endpoints
- `POST /api/auth/login` - User authentication
- `GET /api/portfolio` - Get user portfolio
- `POST /api/portfolio/add` - Add coin to portfolio
- `GET /api/alerts` - Get price alerts
- `POST /api/alerts` - Create price alert

### WebSocket Events
- `price_update` - Real-time price updates
- `market_update` - Market data updates
- `alert_triggered` - Price alert notifications

## 🔒 Security Features

- **JWT Authentication** with refresh tokens
- **Rate Limiting** on API endpoints
- **Input Validation** with Zod schemas
- **CORS** configuration
- **Helmet.js** for security headers
- **Environment Variables** for sensitive data

## 📱 PWA Features

- **Offline Support** with service workers
- **Push Notifications** for price alerts
- **App-like Experience** on mobile devices
- **Background Sync** for data updates

## 🧪 Testing

- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Supertest for API testing
- **E2E Tests**: Playwright
- **Component Tests**: Storybook

## 📊 Monitoring & Analytics

- **Error Tracking**: Sentry integration
- **Performance Monitoring**: Web Vitals
- **Analytics**: Privacy-focused analytics
- **Logging**: Structured logging with Winston

## 🚀 Deployment

### Frontend (Vercel)
```bash
npm run build
vercel --prod
```

### Backend (Docker)
```bash
docker build -t crypto-tracker-api .
docker run -p 8000:8000 crypto-tracker-api
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [CoinGecko](https://coingecko.com) for cryptocurrency data
- [Binance](https://binance.com) for real-time WebSocket feeds
- [TradingView](https://tradingview.com) for charting inspiration

## 📞 Support

For support, email support@cryptotracker.com or join our [Discord](https://discord.gg/cryptotracker).

---

⭐ **Star this repository if you found it helpful!**
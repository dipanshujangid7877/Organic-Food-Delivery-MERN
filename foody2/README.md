# Foody Backend

Express + MongoDB API for the Foody shop frontend.

## Setup

1. Copy `.env.example` to `.env`.
2. Update `MONGO_URL` and `JWT_SECRET`.
3. Install dependencies with `npm install`.
4. Start the server with `npm run dev` or `npm start`.

Default API URL: `http://localhost:5000`

## Useful endpoints

- `GET /health`
- `POST /register`
- `POST /registor` legacy alias for the current frontend
- `POST /login`
- `GET /products`
- `POST /products`
- `GET /products/:id`
- `PUT /products/:id`
- `DELETE /products/:id`
- `POST /add`
- `GET /cart/:userId`
- `DELETE /cart`

# NexCart

NexCart is a full-stack e-commerce application with a React storefront and an
Express/Node.js API backed by MongoDB. It includes customer shopping flows and
an admin area for managing the store.

## Features

- Browse the product catalog and view product details
- Register and log in; manage a customer profile and view orders
- Add products to a cart that persists in the browser
- Check out and process payments with Razorpay
- Admin dashboard for products, orders, users, and store analytics
- Upload product images with Cloudinary
- Send account and order emails through Gmail

## Tech stack

- **Frontend:** React, React Router, Redux Toolkit
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Integrations:** Razorpay, Cloudinary, Nodemailer (Gmail)

## Requirements

- Node.js and npm
- A MongoDB database (local or hosted)
- Credentials for any integrations you want to use (see [Configuration](#configuration))

## Getting started

1. Install dependencies from the project root:

   ```sh
   npm install
   ```

   The root install script also installs the backend and frontend dependencies.

2. Create `backend/.env` and add the configuration described below. At minimum,
   set `MONGO_URI` and `JWT_SECRET`.

3. Start the API and frontend together:

   ```sh
   npm run dev
   ```

   The API runs on `http://localhost:5000` by default, and the frontend runs on
   `http://localhost:3000`. The frontend development server proxies API requests
   to port 5000.

To run either part separately, use `npm run dev:server` or
`npm run dev:client` from the project root.

## Configuration

Add these variables to `backend/.env`:

| Variable | Required for | Description |
| --- | --- | --- |
| `MONGO_URI` | API and seeding | MongoDB connection string |
| `JWT_SECRET` | Authentication | Secret used to sign and verify login tokens |
| `PORT` | Optional | API port; defaults to `5000` |
| `CLOUDINARY_CLOUD_NAME` | Image uploads | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Image uploads | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Image uploads | Cloudinary API secret |
| `RAZORPAY_KEY_ID` | Payments | Razorpay key ID |
| `RAZORPAY_KEY_SECRET` | Payments | Razorpay key secret |
| `EMAIL_USER` | Email notifications | Gmail account used to send email |
| `EMAIL_PASS` | Email notifications | Gmail app password or configured SMTP password |

Cloudinary, Razorpay, and email credentials are only needed for their
corresponding integrations. Keep secrets in `backend/.env`; do not commit them.

## Sample data

To add the demo products, users, and order to the configured MongoDB database:

```sh
cd backend
npm run seed
```

The seed script creates or updates demo records, including local admin and
customer accounts. Use only in a development database, and change or remove
demo credentials before deploying.

## Build

Create a production build of the frontend from the project root:

```sh
npm run build
```

## Project layout

```text
backend/
  config/       Database and Cloudinary setup
  controllers/  API request handlers
  middleware/   Authentication and admin authorization
  model/        Mongoose models
  routes/       API routes
  index.js      Express server entry point
  seed.js       Demo data seeder
frontend/
  src/admin/    Admin screens
  src/components/ Shared UI components
  src/pages/    Storefront and customer screens
  src/redux/    Cart state
  src/context/  Authentication state
```

## API overview

The backend exposes these route groups:

- `/api/auth` — registration, login, and admin user listing
- `/api/products` — product catalog and admin product management
- `/api/orders` — order creation, order history, and admin order management
- `/api/payment` — Razorpay order creation and payment verification
- `/api/analytics` — admin store analytics
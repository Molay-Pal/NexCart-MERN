require("dotenv").config();

const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Order = require("./model/Order");
const Product = require("./model/Product");
const User = require("./model/User");

const demoProducts = [
  {
    name: "Wireless Headphones",
    description: "Comfortable over-ear headphones with clear, balanced sound.",
    price: 79.99,
    category: "Electronics",
    stock: 25,
    imageUrl: ["https://placehold.co/600x600?text=Wireless+Headphones"],
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Everyday Backpack",
    description: "A durable backpack with room for daily essentials.",
    price: 49.99,
    category: "Accessories",
    stock: 18,
    imageUrl: ["https://placehold.co/600x600?text=Everyday+Backpack"],
    rating: 4.2,
    numReviews: 8,
  },
  {
    name: "Stainless Steel Bottle",
    description: "Reusable insulated bottle for hot and cold drinks.",
    price: 19.99,
    category: "Home",
    stock: 40,
    imageUrl: ["https://placehold.co/600x600?text=Steel+Bottle"],
    rating: 4.7,
    numReviews: 21,
  },
];

async function seedDatabase() {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is missing. Add it to backend/.env before seeding.");
  }

  await mongoose.connect(process.env.MONGO_URI);

  const adminPassword = await bcrypt.hash("Admin123!", 10);
  const customerPassword = await bcrypt.hash("User123!", 10);

  await User.findOneAndUpdate(
    { email: "admin@nexcart.test" },
    {
      $set: {
        name: "NexCart Admin",
        password: adminPassword,
        role: "admin",
        verified: true,
      },
    },
    { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true },
  );

  const customer = await User.findOneAndUpdate(
    { email: "customer@nexcart.test" },
    {
      $set: {
        name: "Demo Customer",
        password: customerPassword,
        role: "user",
        verified: true,
      },
    },
    { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true },
  );

  const products = [];
  for (const productData of demoProducts) {
    const product = await Product.findOneAndUpdate(
      { name: productData.name },
      { $set: productData },
      { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true },
    );
    products.push(product);
  }

  const items = [
    { productId: products[0]._id, qty: 1, price: products[0].price },
    { productId: products[2]._id, qty: 2, price: products[2].price },
  ];

  await Order.findOneAndUpdate(
    { paymentId: "seed-payment-demo-001" },
    {
      $set: {
        user: customer._id,
        items,
        totalAmount: items.reduce((sum, item) => sum + item.qty * item.price, 0),
        address: {
          fullName: customer.name,
          street: "123 Demo Street",
          city: "Toronto",
          postalCode: "M5V 2T6",
          country: "Canada",
        },
        status: "delivered",
      },
    },
    { upsert: true, runValidators: true, setDefaultsOnInsert: true },
  );

  console.log("Seed data created/updated successfully.");
  console.log("Admin login: admin@nexcart.test / Admin123!");
  console.log("Customer login: customer@nexcart.test / User123!");
  console.log(`Products seeded: ${products.length}; demo order seeded: 1.`);
}

seedDatabase()
  .catch((error) => {
    console.error("Failed to seed database:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
const mongoose = require("mongoose");
const { mockGuides, mockUsers } = require("./mockData");
const config = require("../shared/config");
const addGuide = require("../modules/guides/add-guide");
const Guide = require("../modules/guides/Guide");
const User = require("../modules/users/User");

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(`${config.db.url}/${config.db.name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Debug: Log connection status
    console.log("Connected to MongoDB");

    // Perform database operations (insert mock data)
    await User.insertMany(mockUsers);
    await Guide.insertMany(mockGuides);

    console.log("Seed data inserted successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Debug: Log before closing connection
    console.log("Closing MongoDB connection");

    // Close the MongoDB connection
    mongoose.connection.close();
  }
}

seedDatabase();

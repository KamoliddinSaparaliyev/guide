const mockUsers = [
  {
    first_name: "John",
    last_name: "Doe",
    age: 25,
    role: "admin",
    username: "john",
    password: "password",
  },
  {
    first_name: "Jane",
    last_name: "Smith",
    age: 30,
    role: "admin",
    username: "jane",
    password: "1234",
  },
  {
    first_name: "Alice",
    last_name: "Johnson",
    age: 28,
    role: "employee",
    username: "alice",
    password: "1234pass",
  },
];

const mockGuides = [
  {
    title: "Getting Started with React",
    content:
      "Learn the basics of React, a popular JavaScript library for building user interfaces. This guide covers setting up your development environment, creating components, and understanding React's component lifecycle.",
  },
  {
    title: "Node.js REST API Development",
    content:
      "Explore the world of Node.js and build robust RESTful APIs. This guide walks you through creating endpoints, handling requests, and integrating databases. Whether you're a beginner or experienced developer, you'll find valuable insights here.",
  },
  {
    title: "Responsive Web Design Principles",
    content:
      "Master the art of responsive web design. This guide explains key concepts like media queries, flexible grids, and fluid layouts. Ensure your websites look great on various devices, from desktops to smartphones.",
  },
  {
    title: "Database Design Best Practices",
    content:
      "Designing a database is a critical part of application development. Discover best practices for creating efficient and scalable database schemas. Topics include normalization, indexing, and data modeling.",
  },
  {
    title: "JavaScript Promises and Async/Await",
    content:
      "Dive deep into asynchronous programming in JavaScript. This guide demystifies Promises and introduces the modern Async/Await syntax. Write clean and maintainable asynchronous code in your projects.",
  },
];

module.exports = { mockUsers, mockGuides };

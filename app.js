const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");

const app = express();

// Body parser middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://vishalkaralevsk:vishalkaralevsk@cluster0.0db9ec5.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  });

// Use user routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started and MongoDB connected on port ${PORT}`)
);

import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://rohanpk1818:uZGlaDSBIuxw1vy8@noterit.307su.mongodb.net/";

  await mongoose
    .connect(connectionUrl)
    .catch((error) => console.error("Database connection error:", error));
};

export default connectToDB;

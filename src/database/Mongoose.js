const mongoose = require("mongoose");

const connectToMongoose = async (mongooseURL) => {
  try {
    const databaseConnection = await mongoose.connect(mongooseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (!databaseConnection) {
      console.error(
          `Error connecting to database ${JSON.stringify(databaseConnection)}`
      );
      return false;
    }

    console.log("Successfully connected to database");

    return true;
  }

  catch(error) {
    console.error(`Error connecting to database ${error.message}`)
    return false;
  }

};

module.exports = connectToMongoose;

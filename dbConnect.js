const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://harshsingh9425168491:HmC2fTX28IHjUEXX@cluster0.hsxpwml.mongodb.net/?retryWrites=true&w=majority";

  try {
    const connect = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDb connected:  ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

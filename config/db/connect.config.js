import mongoose from "mongoose";

export const connectMongoDB = async (mode) => {
  try {
    const URL_LOCAL = "mongodb://127.0.0.1:27017/backend1-coderhouse";
    const URL_ATLAS =
      "mongodb+srv://joserequena85jr_db_user:tr0DlJ1nQYYLiUdr@backend-coderhouse.wgbpkli.mongodb.net/";

    const URL = mode === "local" ? URL_LOCAL : URL_ATLAS;

    await mongoose.connect(URL);
    console.log(
      ` MongoDB conectada correctamente a ${mode === "local" ? "Local" : "Atlas"}`,
    );
  } catch (err) {
    console.error(" Error al conectar a MongoDB", err);
    process.exit(1);
  }
};

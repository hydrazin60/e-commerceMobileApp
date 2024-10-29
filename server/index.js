import fastify from "fastify";
import dotenv from "dotenv";
import { mongoDbConnect } from "./src/config/mongoDbConnect.js";
dotenv.config();

const start = async () => {
  await mongoDbConnect();
  const app = fastify();
  const PORT = process.env.PORT || 4000;
  app.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Server listening on http://localhost:${PORT}`);
    }
  });
};
start();

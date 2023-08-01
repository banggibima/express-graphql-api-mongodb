import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT,
  database: {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    name: process.env.MONGO_NAME,
  },
};

export default config;

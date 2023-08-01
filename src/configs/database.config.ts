import mongoose from 'mongoose';
import config from './config';

mongoose.connect(
  `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions
);

const database = mongoose.connection;

export default database;

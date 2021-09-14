
import * as mongoose from 'mongoose';
import seedData from './seedData';
export default class Database {
  public static open(mongoURL: string) {
    return new Promise((resolve, reject) => {
      mongoose.connect(mongoURL, (err) => {
        if (err) {
          console.log('ERROR', err);
          return reject(err);
        }
        console.log('Successfully connected to the database', mongoURL);
        seedData();
        return resolve('success');

      });
    });
  }
  public static disconnect() {
    mongoose.disconnect((err) => {
      if (!err) console.log('Disconnected from MongoDB.');
    });
  }
}

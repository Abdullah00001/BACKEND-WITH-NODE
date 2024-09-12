import dotenv from 'dotenv';
import { app } from './app.js';
import { connectDB } from './db/connect.db.js';

dotenv.config();

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Server Running On Port : ${port}\nTo Visit --> http://localhost:8000/`
      );
    });
  })
  .catch((error) => {
    console.error(`Database Connection Failed\nError : ${error}`);
  });

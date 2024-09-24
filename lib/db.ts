import mongoose, { Connection } from "mongoose";

let cashedConnect: Connection | null = null;

export const connectToMongoDB = async () => {
     if (cashedConnect) {
          console.log("using cashed db connection");
          return cashedConnect;
     }

     try {
          const connecting = await mongoose.connect(
               `${process.env.MONGODB_URI}`
          );
          cashedConnect = connecting.connection;
          console.log("New mongodb connection established");
          return cashedConnect;
     } catch (error) {
          console.log(error);
          throw error;
     }
};

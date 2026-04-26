import dns from "node:dns";
import dnsPromises from "node:dns/promises";
import mongoose from "mongoose";
import colors from "colors";

const DEFAULT_MONGO_DNS_SERVERS = ["8.8.8.8", "1.1.1.1"];

const configureMongoDns = async (mongoUrl) => {
  if (!mongoUrl?.startsWith("mongodb+srv://")) {
    return;
  }

  const dnsServers = (process.env.MONGO_DNS_SERVERS || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  const fallbackServers =
    dnsServers.length > 0 ? dnsServers : DEFAULT_MONGO_DNS_SERVERS;
  const hostname = new URL(mongoUrl).hostname;
  const srvRecord = `_mongodb._tcp.${hostname}`;

  try {
    await dnsPromises.resolveSrv(srvRecord);
  } catch (error) {
    if (!["ECONNREFUSED", "EAI_AGAIN", "ETIMEOUT"].includes(error.code)) {
      throw error;
    }

    dns.setServers(fallbackServers);
    await dnsPromises.resolveSrv(srvRecord);
    console.warn(
      `Default DNS could not resolve ${hostname}; using ${fallbackServers.join(", ")} for MongoDB SRV lookup.`.yellow
    );
  }
};

const connectDB = async () => {
  if (!process.env.MONGO_URL) {
    const error = new Error("MONGO_URL is not defined in environment variables.");
    console.error(`MongoDB connection error: ${error.message}`.bgRed.white);
    throw error;
  }

  try {
    await configureMongoDns(process.env.MONGO_URL);
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected To MongoDB Database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.error(`Error in MongoDB connection: ${error.message || error}`.bgRed.white);
    throw error;
  }
};

export default connectDB;

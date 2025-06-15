import { MongoClient } from "mongodb"

let client
let clientPromise

if (typeof window === "undefined") {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
  const options = {}

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options)
      global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
  } else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }
} else {
  clientPromise = Promise.reject(new Error("MongoDB client should only be used on server side"))
}

export default clientPromise

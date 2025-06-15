import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET(request) {
  try {
    const client = await clientPromise
    const db = client.db("pawket")
    const products = await db.collection("products").find({}).toArray()
    return NextResponse.json(products)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ message: "Error fetching products" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise
    const db = client.db("pawket")
    const product = await request.json()
    const result = await db.collection("products").insertOne(product)
    return NextResponse.json(result, { status: 201 })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ message: "Error adding product" }, { status: 500 })
  }
}

import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("pawket")
    const products = await db.collection("products").find({}).toArray()
    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise
    const db = client.db("pawket")
    const body = await request.json()

    const { name, description, price, category, imageUrl, stock } = body

    if (!name || !description || !price || !category || !imageUrl || stock === undefined) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    const result = await db.collection("products").insertOne({
      name,
      description,
      price,
      category,
      imageUrl,
      stock,
      createdAt: new Date(),
    })

    return NextResponse.json({ message: "Product added successfully", productId: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error("Error adding product:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

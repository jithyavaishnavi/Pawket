import { NextResponse } from "next/server"

// Dynamic import to avoid build issues
async function getMongoClient() {
  const clientPromise = await import("@/lib/mongodb")
  return clientPromise.default
}

export async function GET() {
  try {
    const clientPromise = await getMongoClient()
    const client = await clientPromise
    const db = client.db("pawket")

    const products = await db.collection("products").find({}).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const clientPromise = await getMongoClient()
    const client = await clientPromise
    const db = client.db("pawket")

    const body = await request.json()
    const product = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await db.collection("products").insertOne(product)

    return NextResponse.json({ message: "Product created successfully", id: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}

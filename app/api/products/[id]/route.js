import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function GET(request, { params }) {
  try {
    const client = await clientPromise
    const db = client.db("pawket")
    const { id } = params
    const product = await db.collection("products").findOne({ _id: new ObjectId(id) })

    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 })
    }
    return NextResponse.json(product)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ message: "Error fetching product" }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  try {
    const client = await clientPromise
    const db = client.db("pawket")
    const { id } = params
    const updatedProduct = await request.json()
    const result = await db.collection("products").updateOne({ _id: new ObjectId(id) }, { $set: updatedProduct })
    return NextResponse.json(result)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ message: "Error updating product" }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    const client = await clientPromise
    const db = client.db("pawket")
    const { id } = params
    const result = await db.collection("products").deleteOne({ _id: new ObjectId(id) })
    return NextResponse.json(result)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ message: "Error deleting product" }, { status: 500 })
  }
}

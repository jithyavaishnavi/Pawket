import { NextResponse } from "next/server"

// Dynamic import to avoid build issues
async function getMongoClient() {
  const { MongoClient, ObjectId } = await import("mongodb")
  const clientPromise = await import("@/lib/mongodb")
  return { MongoClient, ObjectId, clientPromise: clientPromise.default }
}

export async function GET(request, { params }) {
  try {
    const { ObjectId, clientPromise } = await getMongoClient()
    const client = await clientPromise
    const db = client.db("pawket")

    // Validate ObjectId format
    if (!params.id || params.id.length !== 24) {
      return NextResponse.json({ error: "Invalid product ID" }, { status: 400 })
    }

    const product = await db.collection("products").findOne({ _id: new ObjectId(params.id) })

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error("Error fetching product:", error)
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  try {
    const { ObjectId, clientPromise } = await getMongoClient()
    const client = await clientPromise
    const db = client.db("pawket")

    // Validate ObjectId format
    if (!params.id || params.id.length !== 24) {
      return NextResponse.json({ error: "Invalid product ID" }, { status: 400 })
    }

    const body = await request.json()
    const updateData = {
      ...body,
      updatedAt: new Date(),
    }

    const result = await db.collection("products").updateOne({ _id: new ObjectId(params.id) }, { $set: updateData })

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Product updated successfully" })
  } catch (error) {
    console.error("Error updating product:", error)
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    const { ObjectId, clientPromise } = await getMongoClient()
    const client = await clientPromise
    const db = client.db("pawket")

    // Validate ObjectId format
    if (!params.id || params.id.length !== 24) {
      return NextResponse.json({ error: "Invalid product ID" }, { status: 400 })
    }

    const result = await db.collection("products").deleteOne({ _id: new ObjectId(params.id) })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Product deleted successfully" })
  } catch (error) {
    console.error("Error deleting product:", error)
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}

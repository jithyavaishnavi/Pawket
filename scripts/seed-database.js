// MongoDB Database Seeding Script
// This script creates sample data for the Pawket e-commerce store

import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI

if (!uri) {
  console.error("MONGODB_URI environment variable is not set.")
  process.exit(1)
}

const products = [
  {
    name: "Premium Dog Food - Chicken & Rice",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop&crop=center",
    category: "Food",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    description:
      "A complete and balanced meal for adult dogs, made with real chicken and wholesome rice. Supports healthy digestion and a shiny coat.",
    features: ["High-quality protein", "Digestible carbohydrates", "Vitamins and minerals"],
    specifications: {
      weight: "10 lbs",
      flavor: "Chicken & Rice",
      lifeStage: "Adult",
    },
    stock: 50,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Interactive Cat Toy Set",
    price: 19.99,
    originalPrice: 24.99,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop&crop=center",
    category: "Toys",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    description:
      "Engage your feline friend with this exciting set of interactive toys, including feathers, balls, and a laser pointer.",
    features: ["Stimulates hunting instincts", "Promotes exercise", "Durable materials"],
    specifications: {
      material: "Plastic, Feathers",
      color: "Assorted",
      pieces: "5",
    },
    stock: 75,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Professional Pet Grooming Kit",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=400&fit=crop&crop=center",
    category: "Grooming",
    rating: 4.9,
    reviews: 156,
    inStock: true,
    description:
      "Everything you need for a professional grooming session at home. Includes brushes, combs, clippers, and scissors.",
    features: ["Ergonomic design", "Sharp blades", "Suitable for all coat types"],
    specifications: {
      material: "Stainless Steel, Plastic",
      pieces: "8",
      storage: "Carrying Case",
    },
    stock: 30,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Cozy Pet Bed - Large",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=center",
    category: "Accessories",
    rating: 4.7,
    reviews: 203,
    inStock: true,
    description: "A plush and comfortable bed for large dogs, providing ultimate relaxation and support for joints.",
    features: ["Soft faux fur", "Machine washable", "Non-slip bottom"],
    specifications: {
      size: "Large",
      dimensions: "36x28x8 inches",
      color: "Grey",
    },
    stock: 40,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Natural Cat Treats",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=400&fit=crop&crop=center",
    category: "Food",
    rating: 4.5,
    reviews: 67,
    inStock: true,
    description: "Delicious and healthy treats for cats, made with natural ingredients and no artificial additives.",
    features: ["Grain-free", "High in protein", "Irresistible flavor"],
    specifications: {
      weight: "5 oz",
      flavor: "Salmon",
      ingredients: "Real Salmon, Sweet Potato",
    },
    stock: 60,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Dog Leash & Collar Set",
    price: 24.99,
    originalPrice: 34.99,
    image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=400&fit=crop&crop=center",
    category: "Accessories",
    rating: 4.4,
    reviews: 98,
    inStock: false,
    description: "Durable and stylish leash and collar set for dogs, perfect for daily walks and training.",
    features: ["Heavy-duty nylon", "Adjustable size", "Comfortable grip"],
    specifications: {
      size: "Medium",
      color: "Blue",
      leashLength: "6 ft",
    },
    stock: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Cat Scratching Post",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=center",
    category: "Accessories",
    rating: 4.6,
    reviews: 145,
    inStock: true,
    description: "A sturdy scratching post to satisfy your cat's natural urge to scratch, protecting your furniture.",
    features: ["Durable sisal rope", "Stable base", "Easy assembly"],
    specifications: {
      height: "24 inches",
      material: "Sisal, Wood",
      color: "Beige",
    },
    stock: 25,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Dog Chew Toys Bundle",
    price: 16.99,
    originalPrice: 22.99,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop&crop=center",
    category: "Toys",
    rating: 4.3,
    reviews: 78,
    inStock: true,
    description: "A variety pack of durable chew toys for dogs, designed to promote dental health and reduce boredom.",
    features: ["Non-toxic rubber", "Different textures", "Suitable for aggressive chewers"],
    specifications: {
      material: "Rubber",
      pieces: "4",
      size: "Assorted",
    },
    stock: 80,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

async function seedDatabase() {
  let client
  try {
    client = new MongoClient(uri)
    await client.connect()
    const db = client.db("pawket")
    const productsCollection = db.collection("products")

    // Clear existing products
    await productsCollection.deleteMany({})
    console.log("Existing products cleared.")

    // Insert new products
    const result = await productsCollection.insertMany(products)
    console.log(`${result.insertedCount} products inserted successfully.`)
  } catch (error) {
    console.error("Error seeding database:", error)
  } finally {
    if (client) {
      await client.close()
    }
  }
}

seedDatabase()

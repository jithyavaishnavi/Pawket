// MongoDB Database Seeding Script
// This script creates sample data for the Pawket e-commerce store

const { MongoClient } = require("mongodb")

// Connection URL - replace with your MongoDB connection string
const url = process.env.MONGODB_URI || "mongodb://localhost:27017"
const dbName = "pawket"

// Sample products data with relevant images
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
      "Premium quality dog food made with real chicken and brown rice. Specially formulated for adult dogs with high-quality protein and essential nutrients for optimal health and vitality.",
    features: [
      "Made with real chicken as the first ingredient",
      "No artificial colors, flavors, or preservatives",
      "Rich in protein and essential amino acids",
      "Supports healthy digestion",
      "Veterinarian recommended",
    ],
    specifications: {
      Weight: "15 lbs",
      "Life Stage": "Adult",
      "Breed Size": "All Sizes",
      Protein: "26% min",
      Fat: "16% min",
      Fiber: "4% max",
    },
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
      "Engaging interactive toy set designed to keep your cat entertained and mentally stimulated. Includes feather wands, balls, and puzzle toys.",
    features: [
      "Multiple toy types for variety",
      "Promotes physical activity",
      "Mental stimulation",
      "Safe, non-toxic materials",
      "Suitable for all cat ages",
    ],
    specifications: {
      Material: "Non-toxic plastic and feathers",
      Age: "All ages",
      Pieces: "5 toys included",
      Safety: "CPSC approved",
    },
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
      "Complete grooming kit with professional-grade tools for maintaining your pet's coat and hygiene at home.",
    features: [
      "Professional-grade clippers",
      "Multiple comb attachments",
      "Nail clippers included",
      "Quiet motor operation",
      "Easy to clean",
    ],
    specifications: {
      Motor: "Quiet operation",
      Attachments: "4 comb sizes",
      Battery: "Rechargeable lithium",
      Warranty: "2 years",
    },
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
    description:
      "Ultra-comfortable pet bed with memory foam support and washable cover. Perfect for large dogs and cats.",
    features: [
      "Memory foam support",
      "Washable cover",
      "Non-slip bottom",
      "Hypoallergenic materials",
      "Available in multiple colors",
    ],
    specifications: {
      Size: 'Large (36" x 24")',
      Material: "Memory foam and cotton",
      Care: "Machine washable cover",
      "Weight Capacity": "Up to 80 lbs",
    },
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
    description:
      "All-natural cat treats made with real salmon and no artificial preservatives. Perfect for training and rewards.",
    features: [
      "Made with real salmon",
      "No artificial preservatives",
      "High in protein",
      "Perfect for training",
      "Resealable bag",
    ],
    specifications: {
      Weight: "6 oz",
      Ingredients: "Salmon, sweet potato, peas",
      Protein: "30% min",
      "Shelf Life": "18 months",
    },
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
    description:
      "Durable nylon leash and collar set with reflective stitching for nighttime visibility. Adjustable and comfortable.",
    features: [
      "Reflective stitching",
      "Adjustable collar",
      "6-foot leash",
      "Comfortable padding",
      "Strong metal hardware",
    ],
    specifications: {
      Material: "Nylon with reflective thread",
      "Leash Length": "6 feet",
      "Collar Size": "Adjustable 14-20 inches",
      "Weight Rating": "Up to 60 lbs",
    },
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
    description: "Tall scratching post with sisal rope and plush perch. Perfect for cats to scratch, climb, and relax.",
    features: [
      "Natural sisal rope",
      "Plush perch on top",
      "Stable base",
      "Multiple scratching surfaces",
      "Easy assembly",
    ],
    specifications: {
      Height: "36 inches",
      Material: "Sisal rope and plush",
      "Base Size": "16 x 16 inches",
      "Weight Capacity": "Up to 15 lbs",
    },
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
    description: "Set of durable chew toys designed to keep dogs entertained and promote dental health.",
    features: [
      "Durable rubber construction",
      "Promotes dental health",
      "Various textures and shapes",
      "Safe for aggressive chewers",
      "Easy to clean",
    ],
    specifications: {
      Material: "Natural rubber",
      Pieces: "4 toys included",
      Size: "Medium to large dogs",
      Safety: "Non-toxic materials",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Orthopedic Dog Bed",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1598808500950-c7106d211d7f?w=400&h=400&fit=crop&crop=center",
    category: "Accessories",
    rating: 4.9,
    reviews: 250,
    inStock: true,
    description:
      "High-density orthopedic foam dog bed for ultimate comfort and joint support. Removable, washable cover.",
    features: [
      "Memory foam for joint support",
      "Waterproof liner",
      "Machine washable cover",
      "Non-slip bottom",
      "Available in multiple sizes",
    ],
    specifications: {
      Size: 'Medium (30" x 20")',
      Material: "Orthopedic foam, polyester cover",
      Care: "Machine washable cover",
      "Weight Capacity": "Up to 60 lbs",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Dog Training Clicker with Wrist Strap",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1598133894008-61f7f2980080?w=400&h=400&fit=crop&crop=center",
    category: "Training",
    rating: 4.7,
    reviews: 110,
    inStock: true,
    description:
      "Effective training clicker for positive reinforcement. Comes with an elastic wrist strap for easy access.",
    features: [
      "Loud, consistent click sound",
      "Ergonomic design",
      "Includes wrist strap",
      "Suitable for all dog breeds",
      "Durable plastic construction",
    ],
    specifications: {
      Material: "Plastic, elastic",
      Color: "Assorted",
      "Sound Level": "Audible",
      "Training Type": "Positive Reinforcement",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Slow Feeder Dog Bowl",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1583511657547-f0007a811393?w=400&h=400&fit=crop&crop=center",
    category: "Food",
    rating: 4.6,
    reviews: 95,
    inStock: true,
    description: "Designed to slow down eating, preventing bloating and improving digestion. Non-slip base.",
    features: [
      "Promotes healthy eating pace",
      "Reduces bloating and indigestion",
      "Non-slip base",
      "Dishwasher safe",
      "Food-grade material",
    ],
    specifications: {
      Material: "BPA-free plastic",
      Capacity: "2 cups",
      Color: "Blue",
      "Dishwasher Safe": "Yes",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Dog Dental Chews - Large Breed",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1598133894008-61f7f2980080?w=400&h=400&fit=crop&crop=center",
    category: "Food",
    rating: 4.5,
    reviews: 80,
    inStock: true,
    description: "Veterinarian-recommended dental chews for large dogs. Helps reduce plaque and tartar buildup.",
    features: [
      "Freshens breath",
      "Reduces plaque and tartar",
      "Natural ingredients",
      "Grain-free option available",
      "Long-lasting chew",
    ],
    specifications: {
      Weight: "12 oz",
      "Life Stage": "Adult",
      "Breed Size": "Large",
      Ingredients: "Chicken, potato starch, glycerin",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

// Sample users data
const users = [
  {
    name: "John Doe",
    email: "john@example.com",
    password: "hashedpassword123", // In real app, this would be properly hashed
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    password: "hashedpassword456",
    address: {
      street: "456 Oak Ave",
      city: "Somewhere",
      state: "NY",
      zipCode: "67890",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

// Sample orders data
const orders = [
  {
    userId: null, // Will be set after users are inserted
    items: [
      {
        productId: null, // Will be set after products are inserted
        name: "Premium Dog Food - Chicken & Rice",
        price: 29.99,
        quantity: 2,
      },
      {
        productId: null,
        name: "Interactive Cat Toy Set",
        price: 19.99,
        quantity: 1,
      },
    ],
    total: 79.97,
    status: "shipped",
    shippingAddress: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

async function seedDatabase() {
  const client = new MongoClient(url)

  try {
    await client.connect()
    console.log("Connected to MongoDB")

    const db = client.db(dbName)

    // Clear existing data
    await db.collection("products").deleteMany({})
    await db.collection("users").deleteMany({})
    await db.collection("orders").deleteMany({})
    console.log("Cleared existing data")

    // Insert products
    const productResult = await db.collection("products").insertMany(products)
    console.log(`Inserted ${productResult.insertedCount} products`)

    // Insert users
    const userResult = await db.collection("users").insertMany(users)
    console.log(`Inserted ${userResult.insertedCount} users`)

    // Update orders with actual IDs and insert
    const insertedProducts = await db.collection("products").find({}).toArray()
    const insertedUsers = await db.collection("users").find({}).toArray()

    orders[0].userId = insertedUsers[0]._id
    orders[0].items[0].productId = insertedProducts[0]._id
    orders[0].items[1].productId = insertedProducts[1]._id

    const orderResult = await db.collection("orders").insertMany(orders)
    console.log(`Inserted ${orderResult.insertedCount} orders`)

    console.log("Database seeding completed successfully!")
  } catch (error) {
    console.error("Error seeding database:", error)
  } finally {
    await client.close()
  }
}

// Run the seeding function
seedDatabase()

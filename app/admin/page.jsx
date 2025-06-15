"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function AdminPage() {
  const [products, setProducts] = useState([])
  const [form, setForm] = useState({
    name: "",
    price: 0,
    image: "",
    category: "Food",
    rating: 0,
    reviews: 0,
    inStock: true,
    description: "",
    features: [],
    specifications: {},
  })
  const [editingId, setEditingId] = useState(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const res = await fetch("/api/products")
    const data = await res.json()
    setProducts(data)
  }

  const handleChange = (e) => {
    const { name, value, type } = e.target
    if (type === "number") {
      setForm({ ...form, [name]: Number.parseFloat(value) })
    } else if (name === "inStock") {
      setForm({ ...form, [name]: value === "true" })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const handleCategoryChange = (value) => {
    setForm({ ...form, category: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editingId) {
      await fetch(`/api/products/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      toast({ title: "Product Updated", description: `${form.name} has been updated.` })
      setEditingId(null)
    } else {
      await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      toast({ title: "Product Added", description: `${form.name} has been added.` })
    }
    setForm({
      name: "",
      price: 0,
      image: "",
      category: "Food",
      rating: 0,
      reviews: 0,
      inStock: true,
      description: "",
      features: [],
      specifications: {},
    })
    fetchProducts()
  }

  const handleEdit = (product) => {
    setForm(product)
    setEditingId(product._id || null)
  }

  const handleDelete = async (id) => {
    await fetch(`/api/products/${id}`, { method: "DELETE" })
    toast({ title: "Product Deleted", description: "Product has been removed." })
    fetchProducts()
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{editingId ? "Edit Product" : "Add New Product"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required />
            <Input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
            <Input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} required />
            <Select name="category" value={form.category} onValueChange={handleCategoryChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Food">Food</SelectItem>
                <SelectItem value="Toys">Toys</SelectItem>
                <SelectItem value="Grooming">Grooming</SelectItem>
                <SelectItem value="Accessories">Accessories</SelectItem>
                <SelectItem value="Training">Training</SelectItem>
              </SelectContent>
            </Select>
            <Input
              name="rating"
              type="number"
              placeholder="Rating (0-5)"
              value={form.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
            />
            <Input
              name="reviews"
              type="number"
              placeholder="Number of Reviews"
              value={form.reviews}
              onChange={handleChange}
            />
            <Select
              name="inStock"
              value={form.inStock.toString()}
              onValueChange={(value) => handleChange({ target: { name: "inStock", value } })}
            >
              <SelectTrigger>
                <SelectValue placeholder="In Stock" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">In Stock</SelectItem>
                <SelectItem value="false">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="md:col-span-2"
            />
            <Button type="submit" className="md:col-span-2 bg-[#E99C1A] hover:bg-[#E99C1A]/90 text-white">
              {editingId ? "Update Product" : "Add Product"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Existing Products</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.inStock ? "Yes" : "No"}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(product)}>
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleDelete(product._id)}>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

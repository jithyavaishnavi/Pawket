"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const { toast } = useToast()

  useEffect(() => {
    const storedCart = localStorage.getItem("pawket_cart")
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("pawket_cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, quantity = 1) => {
    setCart((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id)
      if (existingItem) {
        toast({
          title: "Item Updated",
          description: `${product.name} quantity updated in cart.`,
        })
        return prevItems.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + quantity } : item,
        )
      } else {
        toast({
          title: "Item Added",
          description: `${product.name} has been added to your cart.`,
        })
        return [...prevItems, { ...product, quantity }]
      }
    })
  }

  const removeFromCart = (productId) => {
    setCart((prevItems) => {
      const itemToRemove = prevItems.find((item) => item._id === productId)
      if (itemToRemove) {
        toast({
          title: "Item Removed",
          description: `${itemToRemove.name} has been removed from your cart.`,
        })
      }
      return prevItems.filter((item) => item._id !== productId)
    })
  }

  const updateQuantity = (productId, quantity) => {
    setCart((prevItems) => {
      if (quantity <= 0) {
        return prevItems.filter((item) => item._id !== productId)
      }
      return prevItems.map((item) => (item._id === productId ? { ...item, quantity } : item))
    })
  }

  const clearCart = () => {
    setCart([])
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
    })
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

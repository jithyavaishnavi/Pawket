"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Navbar from "@/components/navbar"
import { useCart } from "@/components/cart-context"
import ImageWithFallback from "@/components/image-with-fallback"

export default function CartPage() {
  const { state, dispatch } = useCart()

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link href="/shop">
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <Button variant="outline" onClick={clearCart} className="text-red-600 hover:text-red-700 hover:bg-red-50">
            Clear Cart
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                      category={item.category.toLowerCase()}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                    <Badge variant="secondary" className="mt-1">
                      {item.category}
                    </Badge>
                    <p className="text-lg font-bold text-gray-900 mt-2">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="h-8 w-8"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="px-3 py-1 font-medium min-w-[2rem] text-center">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-600">Subtotal: ${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({state.itemCount} items):</span>
                  <span className="font-medium">${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium">{state.total >= 50 ? "Free" : "$5.99"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax:</span>
                  <span className="font-medium">${(state.total * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between text-lg font-semibold mb-6">
                <span>Total:</span>
                <span>${(state.total + (state.total >= 50 ? 0 : 5.99) + state.total * 0.08).toFixed(2)}</span>
              </div>

              {state.total < 50 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <p className="text-sm text-blue-700">Add ${(50 - state.total).toFixed(2)} more for free shipping!</p>
                </div>
              )}

              <Button size="lg" className="w-full bg-primary-500 hover:bg-primary-600 text-white rounded-full mb-3">
                Proceed to Checkout
              </Button>

              <Link href="/shop">
                <Button variant="outline" size="lg" className="w-full rounded-full">
                  Continue Shopping
                </Button>
              </Link>

              <div className="mt-6 space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span>🚚</span>
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🔒</span>
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>↩️</span>
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

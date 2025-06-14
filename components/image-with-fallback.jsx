"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageOff } from "lucide-react"

// Category-specific fallback images
const categoryFallbacks = {
  food: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop&crop=center",
  toys: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop&crop=center",
  grooming: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=400&fit=crop&crop=center",
  accessories: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=center",
  health: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=400&fit=crop&crop=center",
  default: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop&crop=center",
}

// Generate SVG placeholder
const generatePlaceholderSVG = (width, height, category) => {
  const categoryColors = {
    food: "#f97316", // orange
    toys: "#10b981", // green
    grooming: "#3b82f6", // blue
    accessories: "#e99c1a", // primary
    health: "#ef4444", // red
    default: "#6b7280", // gray
  }

  const color = categoryColors[category] || categoryColors.default
  const categoryIcons = {
    food: "🍖",
    toys: "🎾",
    grooming: "✂️",
    accessories: "🎀",
    health: "💊",
    default: "🐾",
  }

  const icon = categoryIcons[category] || categoryIcons.default

  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}20"/>
      <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="${color}40" strokeWidth="2" strokeDasharray="8,4"/>
      <text x="50%" y="45%" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="24" fill="${color}80">${icon}</text>
      <text x="50%" y="60%" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="12" fill="${color}60">Image not available</text>
    </svg>
  `)}`
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fill,
  className = "",
  category,
  priority = false,
  sizes,
  quality = 75,
}) {
  const [imageError, setImageError] = useState(false)
  const [fallbackError, setFallbackError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  const handleFallbackError = () => {
    setFallbackError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  // If both original and fallback failed, show SVG placeholder
  if (imageError && fallbackError) {
    const displayWidth = width || 300
    const displayHeight = height || 300

    if (fill) {
      return (
        <div className={`relative ${className}`}>
          <div
            className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg"
            style={{
              backgroundImage: `url("${generatePlaceholderSVG(displayWidth, displayHeight, category)}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col items-center justify-center text-gray-400 p-4">
              <ImageOff className="w-8 h-8 mb-2" />
              <span className="text-xs text-center">Image unavailable</span>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div
        className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}
        style={{
          width: displayWidth,
          height: displayHeight,
          backgroundImage: `url("${generatePlaceholderSVG(displayWidth, displayHeight, category)}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center text-gray-400 p-4">
          <ImageOff className="w-8 h-8 mb-2" />
          <span className="text-xs text-center">Image unavailable</span>
        </div>
      </div>
    )
  }

  // Show fallback image if original failed
  if (imageError && !fallbackError) {
    const fallbackSrc = categoryFallbacks[category] || categoryFallbacks.default

    return (
      <div className="relative">
        {isLoading && (
          <div
            className={`absolute inset-0 bg-gray-200 animate-pulse rounded-lg ${fill ? "" : `w-[${width}px] h-[${height}px]`}`}
          />
        )}
        <Image
          src={fallbackSrc || "/placeholder.svg"}
          alt={`${alt} (fallback)`}
          width={width}
          height={height}
          fill={fill}
          className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          onError={handleFallbackError}
          onLoad={handleImageLoad}
          priority={priority}
          sizes={sizes}
          quality={quality}
        />
        {/* Fallback indicator */}
        <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full opacity-75">
          Fallback
        </div>
      </div>
    )
  }

  // Show original image
  return (
    <div className="relative">
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse rounded-lg ${fill ? "" : `w-[${width}px] h-[${height}px]`}`}
        />
      )}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        priority={priority}
        sizes={sizes}
        quality={quality}
      />
    </div>
  )
}

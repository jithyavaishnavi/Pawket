"use client"

import { useState } from "react"
import Image from "next/image"

export function ImageWithFallback({ src, fallbackSrc, alt, ...props }) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  return <Image src={imgSrc || "/placeholder.svg"} alt={alt} onError={handleError} {...props} />
}

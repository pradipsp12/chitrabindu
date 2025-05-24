"use client"

import { useEffect, useState } from "react"

export const useVideoThumbnail = (videoSrc: string) => {
  const [thumbnail, setThumbnail] = useState<string>("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const generateThumbnail = async () => {
      try {
        setLoading(true)

        // Create video element
        const video = document.createElement("video")
        video.crossOrigin = "anonymous"
        video.muted = true
        video.playsInline = true

        // Create canvas for thumbnail
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")

        if (!ctx) {
          throw new Error("Could not get canvas context")
        }

        // Wait for video metadata to load
        await new Promise<void>((resolve, reject) => {
          video.onloadedmetadata = () => resolve()
          video.onerror = () => reject(new Error("Failed to load video"))
          video.src = videoSrc
        })

        // Set canvas dimensions to match video
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight

        // Seek to 1 second (or 10% of video duration, whichever is smaller)
        const seekTime = Math.min(1, video.duration * 0.1)
        video.currentTime = seekTime

        // Wait for seek to complete
        await new Promise<void>((resolve) => {
          video.onseeked = () => resolve()
        })

        // Draw video frame to canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

        // Convert canvas to data URL
        const thumbnailDataUrl = canvas.toDataURL("image/jpeg", 0.8)
        setThumbnail(thumbnailDataUrl)

        // Cleanup
        video.remove()
        canvas.remove()
      } catch (error) {
        console.error("Error generating video thumbnail:", error)
        // Fallback to placeholder
        setThumbnail("/placeholder.svg?height=400&width=600")
      } finally {
        setLoading(false)
      }
    }

    if (videoSrc) {
      generateThumbnail()
    }
  }, [videoSrc])

  return { thumbnail, loading }
}

"use client"

import { useVideoThumbnail } from "../../hooks/useVideoThumbnail"
import { Play, Video } from "lucide-react"

interface VideoThumbnailProps {
  videoSrc: string
  alt: string
  onClick: () => void
}

export const VideoThumbnail = ({ videoSrc, alt, onClick }: VideoThumbnailProps) => {
  const { thumbnail, loading } = useVideoThumbnail(videoSrc)

  return (
    <div className="break-inside-avoid group cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
        {loading ? (
          <div className="w-full h-64 bg-gray-200 animate-pulse flex items-center justify-center">
            <Video className="w-8 h-8 text-gray-400" />
          </div>
        ) : (
          <img
            src={thumbnail || "/placeholder.svg"}
            alt={alt}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        )}

        {/* Video Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/50 rounded-full p-4 group-hover:bg-rose-500/80 transition-colors duration-300">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm font-medium">{alt}</p>
            <p className="text-xs opacity-75">Video</p>
          </div>
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
            <Video className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

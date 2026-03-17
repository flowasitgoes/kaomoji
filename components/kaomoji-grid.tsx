"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Check } from "lucide-react"
import type { KaomojiType } from "@/types/kaomoji"
import Image from "next/image"

interface KaomojiGridProps {
  kaomoji: KaomojiType[]
  onCopy: (text: string) => void
}

export function KaomojiGrid({ kaomoji, onCopy }: KaomojiGridProps) {
  const { toast } = useToast()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index)
      onCopy(text)
      toast({
        title: "Copied!",
        description: `${text} copied to clipboard`,
        duration: 1500,
      })
      setTimeout(() => setCopiedIndex(null), 1500)
    })
  }

  // Function to get emoji image based on category and tags
  const getEmojiImage = (category: string, tags: string[]) => {
    // Map categories to emoji images
    const categoryEmojiMap: Record<string, string> = {
      happy: "/emojis/grinning-face.svg",
      love: "/emojis/smiling-face-with-hearts.svg",
      sad: "/emojis/crying-face.svg",
      angry: "/emojis/pouting-face.svg",
      surprised: "/emojis/face-with-open-mouth.svg",
      shy: "/emojis/flushed-face.svg",
      cake: "/emojis/shortcake.svg",
      icecream: "/emojis/ice-cream.svg",
      coffee: "/emojis/hot-beverage.svg",
      cookie: "/emojis/cookie.svg",
      animals: "/emojis/bear.svg",
      music: "/emojis/musical-notes.svg",
      flowers: "/emojis/cherry-blossom.svg",
      hugs: "/emojis/hugging-face.svg",
      chinese: "/emojis/scroll.svg",
    }

    // Check for specific tags to override category defaults
    if (tags.includes("cake")) return "/emojis/shortcake.svg"
    if (tags.includes("cookie")) return "/emojis/cookie.svg"
    if (tags.includes("ice cream")) return "/emojis/ice-cream.svg"
    if (tags.includes("coffee")) return "/emojis/hot-beverage.svg"
    if (tags.includes("bear")) return "/emojis/bear.svg"
    if (tags.includes("cat")) return "/emojis/cat-face.svg"
    if (tags.includes("dog")) return "/emojis/dog-face.svg"
    if (tags.includes("rabbit")) return "/emojis/rabbit-face.svg"
    if (tags.includes("penguin")) return "/emojis/penguin.svg"
    if (tags.includes("flower")) return "/emojis/cherry-blossom.svg"
    if (tags.includes("music")) return "/emojis/musical-notes.svg"
    if (tags.includes("singing")) return "/emojis/microphone.svg"
    if (tags.includes("dancing")) return "/emojis/person-dancing.svg"
    if (tags.includes("love")) return "/emojis/heart.svg"
    if (tags.includes("kiss")) return "/emojis/kiss-mark.svg"
    if (tags.includes("hug")) return "/emojis/hugging-face.svg"
    if (tags.includes("happy")) return "/emojis/grinning-face.svg"
    if (tags.includes("sad")) return "/emojis/crying-face.svg"
    if (tags.includes("angry")) return "/emojis/pouting-face.svg"
    if (tags.includes("surprised")) return "/emojis/face-with-open-mouth.svg"
    if (tags.includes("shy")) return "/emojis/flushed-face.svg"
    if (tags.includes("blush")) return "/emojis/smiling-face-with-hearts.svg"
    if (tags.includes("wave")) return "/emojis/waving-hand.svg"
    if (tags.includes("thumbs up")) return "/emojis/thumbs-up.svg"
    if (tags.includes("sparkle")) return "/emojis/sparkles.svg"
    if (tags.includes("star")) return "/emojis/star.svg"
    if (tags.includes("heart")) return "/emojis/heart.svg"
    if (tags.includes("bubble")) return "/emojis/speech-balloon.svg"
    if (tags.includes("table flip")) return "/emojis/person-gesturing-no.svg"
    if (tags.includes("disapproval")) return "/emojis/unamused-face.svg"
    if (tags.includes("wink")) return "/emojis/winking-face.svg"
    if (tags.includes("drooling")) return "/emojis/drooling-face.svg"
    if (tags.includes("offering")) return "/emojis/open-hands.svg"
    if (tags.includes("headphones")) return "/emojis/headphone.svg"
    if (tags.includes("whistling")) return "/emojis/musical-note.svg"
    if (tags.includes("poetry")) return "/emojis/scroll.svg"
    if (tags.includes("tang")) return "/emojis/scroll.svg"

    // Default to category emoji if no specific tag match
    return categoryEmojiMap[category] || "/emojis/smiling-face.svg"
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <AnimatePresence>
        {kaomoji.map((item, index) => (
          <motion.div
            key={`${item.text}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, delay: (index % 10) * 0.03 }}
            layout
          >
            <Card
              className="group relative overflow-hidden transition-all duration-300 border border-mauve/20 shadow-md hover:shadow-lg bg-cream rounded-2xl"
              onClick={() => copyToClipboard(item.text, index)}
            >
              <div className="p-6 flex flex-col items-center justify-center min-h-[180px] cursor-pointer">
                <div className="absolute top-3 right-3">
                  <Image
                    src={getEmojiImage(item.category, item.tags) || "/placeholder.svg"}
                    alt={item.category}
                    width={24}
                    height={24}
                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="text-2xl font-mono mb-4 text-center text-plum">{item.text}</div>
                <div
                  className={`text-sm text-center mb-2 ${
                    item.category === "chinese" ? "text-coral font-medium" : "text-mauve"
                  }`}
                >
                  {item.caption}
                </div>
                <div className="text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity text-coral">
                  Click to copy
                </div>

                <div
                  className={`
                  absolute inset-0 flex items-center justify-center bg-rose/10 backdrop-blur-sm
                  transition-opacity duration-300
                  ${copiedIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
                >
                  <div className="bg-cream rounded-full p-3 shadow-lg">
                    <Check className="h-6 w-6 text-coral" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>

      {kaomoji.length === 0 && (
        <div className="col-span-full text-center py-12 text-mauve">
          No kaomoji found. Try a different search or category.
        </div>
      )}
    </div>
  )
}

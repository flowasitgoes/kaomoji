"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import Image from "next/image"

export function EmojiHelper() {
  const [isOpen, setIsOpen] = useState(false)

  const emojiCategories = [
    {
      name: "Faces",
      emojis: [
        { src: "/emojis/grinning-face.svg", name: "Grinning Face" },
        { src: "/emojis/smiling-face-with-hearts.svg", name: "Face with Hearts" },
        { src: "/emojis/crying-face.svg", name: "Crying Face" },
        { src: "/emojis/pouting-face.svg", name: "Pouting Face" },
        { src: "/emojis/face-with-open-mouth.svg", name: "Surprised Face" },
        { src: "/emojis/flushed-face.svg", name: "Flushed Face" },
        { src: "/emojis/hugging-face.svg", name: "Hugging Face" },
        { src: "/emojis/winking-face.svg", name: "Winking Face" },
        { src: "/emojis/unamused-face.svg", name: "Unamused Face" },
        { src: "/emojis/drooling-face.svg", name: "Drooling Face" },
      ],
    },
    {
      name: "Food",
      emojis: [
        { src: "/emojis/shortcake.svg", name: "Shortcake" },
        { src: "/emojis/ice-cream.svg", name: "Ice Cream" },
        { src: "/emojis/hot-beverage.svg", name: "Coffee" },
        { src: "/emojis/cookie.svg", name: "Cookie" },
      ],
    },
    {
      name: "Animals",
      emojis: [
        { src: "/emojis/bear.svg", name: "Bear" },
        { src: "/emojis/cat-face.svg", name: "Cat" },
        { src: "/emojis/dog-face.svg", name: "Dog" },
        { src: "/emojis/rabbit-face.svg", name: "Rabbit" },
        { src: "/emojis/penguin.svg", name: "Penguin" },
      ],
    },
    {
      name: "Other",
      emojis: [
        { src: "/emojis/musical-notes.svg", name: "Musical Notes" },
        { src: "/emojis/cherry-blossom.svg", name: "Cherry Blossom" },
        { src: "/emojis/scroll.svg", name: "Scroll" },
        { src: "/emojis/heart.svg", name: "Heart" },
        { src: "/emojis/sparkles.svg", name: "Sparkles" },
        { src: "/emojis/star.svg", name: "Star" },
      ],
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border-mauve/40 text-plum hover:text-coral hover:border-coral/50"
        >
          <Info className="h-4 w-4 mr-2" />
          Emoji Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-plum text-xl">Emoji Guide</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-mauve mb-4">
            Each kaomoji card is decorated with an emoji that matches its theme or emotion. Here's a guide to the emojis
            used in this collection:
          </p>

          <div className="space-y-6">
            {emojiCategories.map((category) => (
              <div key={category.name}>
                <h3 className="text-plum font-medium mb-2">{category.name}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {category.emojis.map((emoji) => (
                    <div
                      key={emoji.name}
                      className="flex items-center p-2 bg-cream/50 rounded-lg border border-mauve/20"
                    >
                      <Image
                        src={emoji.src || "/placeholder.svg"}
                        alt={emoji.name}
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      <span className="text-sm text-mauve">{emoji.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-mauve mt-6">
            Emojis are automatically matched to each kaomoji based on its category and tags. The emojis are sourced from
            the{" "}
            <a
              href="https://openmoji.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coral hover:underline"
            >
              OpenMoji
            </a>{" "}
            project, an open-source emoji library.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

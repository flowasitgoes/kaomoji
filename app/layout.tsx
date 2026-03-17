import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaomoji.ifunlove.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "顏文字 Kaomoji | 日本鍵盤表情符號收藏，一鍵複製",
    template: "%s | 顏文字 Kaomoji",
  },
  description:
    "顏文字（Kaomoji）是用鍵盤符號組成的日本表情，如 (^_^)、(T_T)、(>_<)。免費收藏數百個顏文字，依開心、難過、愛心等分類，一鍵複製到聊天與貼文，讓文字更有溫度。Japanese emoticons collection with copy to clipboard.",
  keywords: [
    "顏文字",
    "kaomoji",
    "日本表情符號",
    "Japanese emoticons",
    "鍵盤表情",
    "text emoticons",
    "(^_^)",
    "(T_T)",
    "一鍵複製",
    "copy emoticons",
    "文字表情",
  ],
  authors: [{ name: "Kaomoji" }],
  creator: "Kaomoji",
  openGraph: {
    type: "website",
    locale: "zh_TW",
    alternateLocale: ["en"],
    url: siteUrl,
    siteName: "顏文字 Kaomoji",
    title: "顏文字 Kaomoji | 日本鍵盤表情符號收藏，一鍵複製",
    description:
      "免費收藏數百個顏文字 (^_^) (T_T)，依情緒分類、一鍵複製。讓文字溝通更有溫度。Japanese emoticons collection with quick copy.",
    images: [
      {
        url: `${siteUrl}/icons/kaomoji-og-1200x630.jpg`,
        width: 1200,
        height: 630,
        alt: "顏文字 Kaomoji | 日本鍵盤表情符號收藏，一鍵複製",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "顏文字 Kaomoji | 日本鍵盤表情符號收藏",
    description: "免費顏文字收藏，一鍵複製 (^_^) (T_T) (>_<)。Japanese emoticons with copy to clipboard.",
    images: [`${siteUrl}/icons/kaomoji-og-1200x630.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "entertainment",
  icons: {
    icon: [
      { url: "/icons/kaomoji-icon-16.jpg", sizes: "16x16", type: "image/jpeg" },
      { url: "/icons/kaomoji-icon-32.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/icons/kaomoji-icon-64.jpg", sizes: "64x64", type: "image/jpeg" },
    ],
    apple: [
      { url: "/icons/kaomoji-icon-192.jpg", sizes: "192x192", type: "image/jpeg" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

import { KaomojiApp } from "@/components/kaomoji-app"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaomoji.vercel.app"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "顏文字 Kaomoji",
  alternateName: ["Kaomoji Collection", "日本顏文字"],
  description:
    "顏文字（Kaomoji）是用鍵盤符號組成的日本表情，如 (^_^)、(T_T)。免費收藏數百個顏文字，依情緒分類、一鍵複製，讓文字更有溫度。Japanese emoticons collection with copy to clipboard.",
  url: baseUrl,
  applicationCategory: "UtilitiesApplication",
  inLanguage: ["zh-Hant", "en"],
  featureList: [
    "日本顏文字 / Japanese emoticons 收藏",
    "依情緒分類（開心、難過、愛心等）",
    "一鍵複製到剪貼簿",
    "搜尋與標籤篩選",
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen dreamy-bg">
        <KaomojiApp />
      </main>
    </>
  )
}

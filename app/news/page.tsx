import fs from "fs";
import path from "path";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import NewsFeed from "@/components/market/NewsFeed";
import { NewsItem } from "@/types/content";

export const metadata = {
  title: "Latest Crypto News",
  description: "Stay updated with real-time cryptocurrency news, Bitcoin updates, and market insights from trusted sources.",
};

async function getNewsData(): Promise<NewsItem[]> {
  const filePath = path.join(process.cwd(), "content/data/news.json");
  try {
    const jsonData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    return [];
  }
}

export default async function NewsPage() {
  const data = await getNewsData();

  return (
    <>
      <Section className="bg-surface/30">
        <Container className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Latest Crypto News</h1>
          <p className="text-lg text-text-muted">
            Real-time cryptocurrency news and market updates aggregated from the most trusted industry sources.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <NewsFeed data={data} />
        </Container>
      </Section>

      <Section className="bg-primary/5">
        <Container className="text-center">
          <h2 className="text-2xl font-bold mb-6">🚀 Get Real-Time News First</h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            Join our Telegram group for instant news alerts and market commentary before it hits the feed.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://t.me/yagacalls" 
              target="_blank" 
              className="grad-button text-background px-10 py-4 rounded-xl font-bold transition-all hover:shadow-[0_0_25px_rgba(227,158,46,0.5)]"
            >
              Join Telegram Group →
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

export const metadata = {
  title: "Privacy Policy | Yaga Calls",
  description: "Learn how Yaga Calls handles your data and privacy with transparency and minimal data collection.",
  alternates: {
    canonical: "https://www.yagacalls.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-black mb-10 uppercase tracking-tighter">Privacy Policy</h1>
        <div className="prose prose-invert prose-amber max-w-none space-y-6 text-text-muted">
          <p>
            Your privacy is important to us. This policy explains how Yaga Calls handles information when you use our website or services.
          </p>
          <h2 className="text-text-high text-xl font-bold pt-4">1. Information We Collect</h2>
          <p>
            We collect minimal information required to provide our services. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Usage data (browsing behavior, IP address, device info) via standard web logs.</li>
            <li>Telegram usernames when you interact with our bot or support team.</li>
            <li>Transaction IDs for crypto payments to verify subscriptions.</li>
          </ul>
          <h2 className="text-text-high text-xl font-bold pt-4">2. How We Use Information</h2>
          <p>
            We use your information strictly for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Providing and improving our signals and website content.</li>
            <li>Verifying subscription payments and granting access.</li>
            <li>Sending critical service updates via Telegram.</li>
          </ul>
          <h2 className="text-text-high text-xl font-bold pt-4">3. Data Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share data with service providers (like hosting) solely for the purpose of maintaining our services.
          </p>
          <h2 className="text-text-high text-xl font-bold pt-4">4. Cookies</h2>
          <p>
            We use basic cookies to understand site performance and maintain session states. You can disable cookies in your browser settings.
          </p>
          <p className="pt-8 text-xs italic">
            Last Updated: May 2026
          </p>
        </div>
      </Container>
    </Section>
  );
}

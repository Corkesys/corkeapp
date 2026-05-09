export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <a href="/" className="text-lg font-semibold text-white">Corkeapp</a>
          <a href="/dashboard" className="text-sm text-zinc-400 hover:text-white">Open app</a>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm">Last updated: May 2025</p>
        </div>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">1. Our Core Commitment</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">Corkeapp is designed with privacy as a foundation. We do not collect, store, or process any personal data on our servers. We do not use cookies, tracking pixels, or analytics tools.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">2. Data We Do Not Collect</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">We do not collect your name, email address, IP address, location, device information, usage history, or any personally identifiable information. We do not store your AI queries or responses on our servers.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">3. Data Stored in Your Browser</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">If you purchase a Pro license, your license key and Stripe session ID are stored in your browser's localStorage. This data never leaves your device and is not accessible to us. You can clear this data at any time by clearing your browser's local storage.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">4. Third Party Services</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">Corkeapp uses the following third party services. Each has its own privacy policy governing their data practices:</p>
          <ul className="text-zinc-400 text-sm leading-relaxed space-y-2 list-disc list-inside">
            <li><span className="text-zinc-300">Vercel</span> — hosts the application and may retain server logs for up to 1 hour. See vercel.com/legal/privacy-policy</li>
            <li><span className="text-zinc-300">Anthropic</span> — processes AI queries you submit. See anthropic.com/privacy</li>
            <li><span className="text-zinc-300">Stripe</span> — processes payments for Pro licenses. See stripe.com/privacy</li>
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">5. AI Queries</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">When you use the AI assistant your query is transmitted to Anthropic's API for processing. We do not log or store your queries. However Anthropic may retain queries in accordance with their own privacy policy. Do not submit sensitive, confidential, or proprietary information through the AI assistant.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">6. Payments</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">All payment processing is handled exclusively by Stripe. We never see, receive, or store your payment card details. Stripe's privacy policy governs all payment data.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">7. GDPR & CCPA</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">Because we collect no personal data we have minimal obligations under GDPR and CCPA. However if you have any privacy concerns you may contact us and we will respond within 30 days.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">8. Children's Privacy</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">Corkeapp is intended for professional use by adults. We do not knowingly collect any information from children under the age of 13.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">9. Changes to This Policy</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Continued use of the service after changes constitutes acceptance of the new policy.</p>
        </section>
      </main>
      <footer className="border-t border-zinc-800 px-6 py-4 mt-12">
        <div className="max-w-3xl mx-auto flex gap-6">
          <a href="/privacy" className="text-zinc-500 text-xs hover:text-white">Privacy Policy</a>
          <a href="/terms" className="text-zinc-500 text-xs hover:text-white">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
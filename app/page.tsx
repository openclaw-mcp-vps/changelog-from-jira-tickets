export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase border border-[#30363d]">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Generate Changelogs from{" "}
          <span className="text-[#58a6ff]">Jira Tickets</span>{" "}
          Automatically
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect to Jira, let AI extract user-facing changes from ticket descriptions, and publish polished changelogs in seconds — no copy-pasting required.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card surprises.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Jira OAuth", "AI Extraction", "Sprint Picker", "Custom Templates", "Markdown & HTML Export"].map((f) => (
            <span key={f} className="px-4 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Connect Jira", desc: "Authenticate with your Jira workspace via OAuth in one click." },
            { step: "2", title: "Pick a Sprint", desc: "Select a project and sprint. We fetch all resolved tickets automatically." },
            { step: "3", title: "Generate & Export", desc: "AI extracts user-facing changes and formats a ready-to-publish changelog." }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-2xl font-bold mb-2">{step}</div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-[#8b949e] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$19<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to automate changelogs</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Jira projects",
              "AI-powered change extraction",
              "Sprint & version picker",
              "Markdown, HTML & plain text export",
              "Custom changelog templates",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which Jira plans are supported?",
              a: "We support Jira Cloud (Free, Standard, Premium, and Enterprise). Jira Server/Data Center is not currently supported."
            },
            {
              q: "How does the AI know what's user-facing?",
              a: "Our AI analyzes ticket summaries, descriptions, and labels to identify changes that affect end users, filtering out internal tasks and bug fixes marked as non-public."
            },
            {
              q: "Can I customize the changelog format?",
              a: "Yes. You can choose from built-in templates (Keep a Changelog, GitHub Releases style) or create your own using our template editor with Markdown support."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Changelog from Jira Tickets. All rights reserved.
      </footer>
    </main>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog from Jira Tickets – Automated Changelog Generation",
  description: "Connect to Jira, analyze tickets with AI, and generate formatted changelogs automatically. Built for product and release managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d7f4fe99-ef66-4cba-8e91-b48cb5e8e8f5"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

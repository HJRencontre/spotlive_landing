import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="bg-blueMidnight" lang="en">
      <Head />
      <body className="min-h-screen bg-blueMidnight font-sans antialiased text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

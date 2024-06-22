import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-blueMidnight">
      <Head />
      <body className="min-h-screen bg-blueMidnight font-sans antialiased text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

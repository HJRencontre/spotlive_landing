import { Button } from "@nextui-org/react";
import Link from "next/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-5xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer>
        <div className="bg-lime text-blueMidnight flex flex-col items-center justify-center py-16 px-2">
          <h1 className="font-bold text-5xl">Nous rejoindre</h1>
          <p className="mt-4 text-center py-4">
            Vous êtes un théâtre et souhaitez rejoindre Spotlive ou avez des
            questions ?
          </p>
          <Link
            className="text-lime"
            href="https://calendly.com/h-jrencontre/30min"
          >
            <Button
              className="border-2 btn btn-outline text-lime bg-blueMidnight"
              radius="full"
            >
              Rejoignez-nous
            </Button>
          </Link>
        </div>

        <div className="bg-white text-blueMidnight flex flex-col items-center justify-center py-16">
          <p className="py-2">©2024 Spotlive</p>
        </div>
      </footer>
    </div>
  );
}

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
          <h1 className="font-bold text-5xl">Organisateur</h1>
          <p className="mt-4 text-center py-4">
            Vous êtes un théâtre et souhaitez rejoindre Spotlive ou avez des
            questions ?
          </p>
          <Button className="text-lime bg-blueMidnight" radius="full">
            <Link className="text-lime" href="/organizer">
              Rejoignez-nous
            </Link>
          </Button>
        </div>

        <div className="bg-white text-blueMidnight flex flex-col items-center justify-center py-16">
          <p className="py-2">©2024 Spotlive</p>
        </div>
      </footer>
    </div>
  );
}

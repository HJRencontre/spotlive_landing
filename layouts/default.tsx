import { Button } from "@nextui-org/react";
import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import Link from "next/link";

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
      <footer className="container mx-auto max-w-5xl px-6 pt-16 justify-center items-center">
        <div className="bg-lime text-blueMidnight">
          <h1 className="font-bold text-5xl">Nous rejoindre</h1>
          <p className="mt-4">
            Vous êtes un théâtre et souhaitez rejoindre Spotlive ou avez des
            questions ?
          </p>
          <Button className="bg-blueMidnight">
            <Link href="" className="text-lime">
              Contactez-nous
            </Link>
          </Button>
        </div>
        <div>Wesh</div>
      </footer>
    </div>
  );
}

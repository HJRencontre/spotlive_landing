import { Image, Spacer } from "@nextui-org/react";

import Features from "@/components/features";
import ModalJoinWaitlist from "@/components/modal-join-waitlist";
import Recommandations from "@/components/recommandations/recommandations";
import SpotliveValues from "@/components/spotlive-values";
import TrendingNow from "@/components/trending-now/trending-now";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="gap-4 py-8 md:py-10">
        <div className="py-20 lg:py-52">
          <div className="lg:flex-row-reverse">
            <div className="flex">
              <h1 className="font-poppins text-left text-5xl font-bold lg:w-96">
                La culture à portée de pas.
              </h1>
              <Image alt="Présentation" src="wave.png" width={300} />
            </div>
            <div className="lg:grid grid-cols-2 items-center">
              <p className="py-6">
                Envie de vivre la culture locale de manière unique et immersive
                ? <br />
                Avec Spotlive, une nouvelle vague pousse les portes de la
                culture et réinvente votre expérience culturelle
              </p>
              <Image alt="Présentation" src="map.png" width={800} />
            </div>
          </div>
          <Spacer y={8} />
          <div className="flex justify-center items-center lg:block">
            <ModalJoinWaitlist buttonTitle="Me tenir au courant de l'aventure Spotlive 🥳" />
          </div>
        </div>
        <SpotliveValues />
        <Spacer y={40} />
        <TrendingNow />
        <Spacer y={40} />
        <Features />
        <Spacer y={40} />
        <Recommandations />
      </section>
    </DefaultLayout>
  );
}

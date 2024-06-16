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
        <div className="py-52">
          <div className="lg:flex-row-reverse">
            <div className="flex">
              <h1 className="font-poppins text-left text-5xl font-bold lg:w-96">
                La culture à portée de pas.
              </h1>
              <img
                alt="Présentation"
                className="h-20 w-64 justify-start"
                src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/titlewavesketch.png"
              />
            </div>
            <p className="flex-row py-2text-left justify-center items-center lg:flex">
              Envie de vivre la culture locale de manière unique et immersive ?{" "}
              <br />
              Avec Spotlive, une nouvelle vague pousse les portes de la culture
              et réinvente votre expérience culturelle
              <img
                alt="Présentation"
                className="max-w-sm"
                src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/mapsketch.png"
              />
            </p>
          </div>
          <div className="flex gap-3">
            <ModalJoinWaitlist />
          </div>
        </div>
        <SpotliveValues />
        <div className="py-8" />
        <TrendingNow />
        <div className="py-8" />
        <Features />
        <div className="py-8" />
        <Recommandations />
      </section>
    </DefaultLayout>
  );
}

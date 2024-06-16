import Features from "@/components/features";
import ModalJoinWaitlist from "@/components/modal-join-waitlist";
import Recommandations from "@/components/recommandations/recommandations";
import SpotliveValues from "@/components/spotlive-values";
import TrendingNow from "@/components/trending-now/trending-now";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <div className="lg:flex-row-reverse">
          <img
            alt="Présentation"
            className="max-w-sm rounded-lg"
            src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/mapsketch.png"
          />
          <div>
            <div className="flex">
              <h1 className="text-left text-5xl font-bold">La culture</h1>
              <img
                alt="Présentation"
                className="h-20 w-64 origin-top-left justify-start"
                src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/titlewavesketch.png"
              />
            </div>
            <h1 className="text-left text-5xl font-bold">à portée de pas</h1>
            <p className="py-6 text-left">
              Réservez vos places, visionnez des vidéos exclusives de ces lieux
              et plongez dans une experience culture inoubliable !
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <ModalJoinWaitlist />
        </div>
        <SpotliveValues />
        <TrendingNow />
        <Features />
        <Recommandations />
      </section>
    </DefaultLayout>
  );
}

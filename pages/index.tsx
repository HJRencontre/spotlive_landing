import { useDisclosure } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import ModalJoinWaitlist from "@/components/modal-join-waitlist";
import Features from "@/components/features";
import SpotliveValues from "@/components/spotlive-values";
import TrendingNow from "@/components/trending-now/trending-now";

export default function IndexPage() {
  const{isOpen, onOpen, onOpenChange} = useDisclosure()
  return (
    <DefaultLayout>
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/mapsketch.png" className="max-w-sm rounded-lg" />
          <div>

            <div className="grid grid-cols-2">
              <h1 className="text-left text-5xl font-bold">La culture à portée de pas</h1>
              <img className="h-20 w-64 origin-top-left justify-start"
                   src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/titlewavesketch.png"
                   alt="Image de présentation"/>
            </div>
            <p className="py-6 text-left">Réservez vos places, visionnez des vidéos exclusives
              de ces lieux et plongez dans une experience culture inoubliable !</p>
          </div>
        </div>

        <div className="flex gap-3">
          <ModalJoinWaitlist/>
        </div>
        <SpotliveValues/>
        <TrendingNow/>
        <Features/>
      </section>
    </DefaultLayout>
  );
}
